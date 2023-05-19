import { Router } from "express";
import create from "../../controllers/views/pet/create.js";
import readAll from "../../controllers/views/pet/readAll.js";
import register from "../../controllers/views/pet/register.js";
import readOne from "../../controllers/views/pet/readOne.js";

const router = Router();

router.post("/", create);
router.get("/", readAll);
router.get("/form", register);
router.get("/:petId", readOne);

export default router;
