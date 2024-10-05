import express from "express";
import * as ExampleController from "../controllers/exampleController";

const router = express.Router();

router.get("/", ExampleController.getAllExamples);
router.post("/", ExampleController.createExample);

export default router;
