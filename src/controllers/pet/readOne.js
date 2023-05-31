import { Pet } from "../../models/models.js";

export default async (req, res, next) => {
    try {
        const { petId } = req.params;
        const pet = await Pet.findOne({
            where: { id: petId },
            attributes: ["id", "name", "tag"]
        });
        if (pet) {
            return res.status(200).json({
                code: 200,
                pet
            });
        }
        return res.status(404).json({
            code: 404,
            message: "not found"
        });
    } catch (error) {
        next(error);
    }
};
