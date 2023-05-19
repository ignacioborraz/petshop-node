import Pet from "../../../models/pet.js";

export default async (req, res, next) => {
    try {
        const page = Number(req.query.page) || 0;
        const limit = req.query.limit || 100;
        const offset = page * limit;
        const count = await Pet.count();
        const pages = Math.ceil(count / limit);
        const pets = await Pet.findAll({
            order: [["name", "ASC"]],
            offset,
            limit: offset || limit,
            attributes: ["id", "name", "tag"],
            raw: true
        });
        if (pets.length < count && page < pages - 1) {
            res.set("x-next", `/api/pets?limit=${limit}&page=${page + 1}`);
            return res.status(200).render("pets", {
                css: "/public/styles/main.css",
                title: "LIST OF PETS",
                navigation: [
                    { link: "/pets", text: "SEE PETS" },
                    { link: "/pets/form", text: "CREATE PET" }
                ],
                mainTitle: "LIST OF PETS",
                pets: pets.length > 0 ? pets : null,
                xNext: `/pets?limit=${limit}&page=${page + 1}`
            });
        }
        return res.status(200).render("pets", {
            css: "/public/styles/main.css",
            title: "LIST OF PETS",
            navigation: [
                { link: "/pets", text: "SEE PETS" },
                { link: "/pets/new", text: "CREATE PET" }
            ],
            mainTitle: "LIST OF PETS",
            pets
        });
    } catch (error) {
        next(error);
    }
};
