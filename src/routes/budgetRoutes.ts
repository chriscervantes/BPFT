import express from "express";
import * as budgetController from "../controllers/budgetController";

const router = express.Router();

router.get("/", budgetController.getAllBudgets);
router.post("/", budgetController.createBudget);

export default router;
