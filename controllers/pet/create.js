import Pet from "../../models/pet.js";

export default async (req, res, next) => {
    const { name, tag } = req.body;
    try {
        await Pet.create({ name, tag });
        return res.status(201).json({
            code: 201,
            message: "created"
        });
    } catch (error) {
        next(error);
    }
};
