import Pet from "../../../models/pet.js";

export default async (req, res, next) => {
    try {
        const { petId } = req.params;
        const pet = await Pet.findOne({
            where: { id: petId },
            attributes: ["id", "name", "tag"]
        });
        return res.status(200).render("pet", {
            css: "/public/styles/main.css",
            title: "PET DETAIL",
            navigation: [
                { link: "/pets", text: "SEE PETS" },
                { link: "/pets/new", text: "CREATE PET" }
            ],
            mainTitle: "PET DETAIL",
            pet: pet?.toJSON() || null
        });
    } catch (error) {
        next(error);
    }
};
