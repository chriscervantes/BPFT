import { Request, Response } from "express";
import * as ExampleModel from "../models/crud";

export const getAllBudgets = async (req: Request, res: Response) => {
  try {
    const examples = await ExampleModel.getAll();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ message: "Error fetching examples" });
  }
};

export const createBudget = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const newExample = await ExampleModel.create(name);
    res.status(201).json(newExample);
  } catch (error) {
    res.status(500).json({ message: "Error creating example" });
  }
};
