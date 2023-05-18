import { Router } from "express";
import create from "../../controllers/views/pet/create.js";
import readAll from "../../controllers/views/pet/readAll.js";
import readOne from "../../controllers/views/pet/readOne.js";

const router = Router();

router.post("/", create);
router.get("/", readAll);
router.get("/:petId", readOne);

export default router;
