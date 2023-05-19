import { Router } from "express";
import create from "../../controllers/pet/create.js";
import readAll from "../../controllers/pet/readAll.js";
import readOne from "../../controllers/pet/readOne.js";

const router = Router();

router.post("/", create);
router.get("/", readAll);
router.get("/:petId", readOne);

export default router;
