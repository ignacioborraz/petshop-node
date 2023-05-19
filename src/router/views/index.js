import { Router } from "express";
import petsRouter from "./pets.js";

const router = Router();

router.get("/", async (req, res, next) => {
    try {
        return res.status(200).render("index", {
            css: "/public/styles/main.css",
            title: "HOME",
            navigation: [
                { link: "/pets", text: "SEE PETS" },
                { link: "/pets/new", text: "CREATE PET" }
            ],
            mainTitle: "HOME"
        });
    } catch (error) {
        next(error);
    }
});

router.use("/pets", petsRouter);

export default router;
