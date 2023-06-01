import { Router } from "express";
import petsRouter from "./pets.js";

const router = Router();

// router.use("/pets", passport.authenticate('jwt',{ session:false }), petsRouter);
router.use("/pets", petsRouter);

export default router;
