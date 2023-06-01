import Pet from "../../models/pet.js";

export default async (req, res, next) => {
    try {
        const { name, tag } = req.body;
        if (name) {
            // await Pet.create({ name, tag, storeId: req.user.storeId }); en caso de usar passport+jwt
            await Pet.create({ name, tag });
            return res.status(201).json({
                code: 201,
                message: "created"
            });
        }
        return res.status(400).json({
            code: 400,
            message: "unexpected error"
        });
    } catch (error) {
        next(error);
    }
};
