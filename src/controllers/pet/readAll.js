import Pet from "../../models/pet.js";

export default async (req, res, next) => {
    try {
        const page = Number(req.headers["x-next"]) || 0;
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
            // include: [{ model: Store, where: { locationId: req.user.locationId } }]; filtrar por store con passport+jwt
        });
        if (pets.length === 0) {
            return res.status(404).json({
                code: 404,
                message: "not found"
            });
        }
        if (pets.length < count && page < pages - 1) {
            res.set("x-next", page + 1); // setear headers con la pagina siguiente
        }
        return res.status(200).json({
            code: 200,
            pets
        });
    } catch (error) {
        next(error);
    }
};
