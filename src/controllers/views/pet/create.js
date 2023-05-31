import Pet from "../../../models/pet.js";

export default async (req, res, next) => {
    try {
        const { name, tag } = req.body;
        if (name) {
            const pet = await Pet.create({ name, tag });
            return res.status(201).render("pet", {
                css: "/public/styles/main.css",
                title: "PET DETAIL",
                navigation: [
                    { link: "/pets", text: "SEE PETS" },
                    { link: "/pets/form", text: "CREATE PET" }
                ],
                mainTitle: "PET DETAIL",
                pet: pet?.toJSON() || null
            });
        }
        return res.status(400).render("index", {
            css: "/public/styles/main.css",
            title: "ERROR",
            navigation: [
                { link: "/pets", text: "SEE PETS" },
                { link: "/pets/form", text: "CREATE PET" }
            ],
            mainTitle: "UNEXPECTED ERROR"
        });
    } catch (error) {
        next(error);
    }
};
