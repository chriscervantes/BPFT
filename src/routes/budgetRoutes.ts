import express from "express";
import * as budgetController from "../controllers/budgetController";

const router = express.Router();

router.get("/", budgetController.getAllExamples);
router.post("/", budgetController.createExample);

export default router;
