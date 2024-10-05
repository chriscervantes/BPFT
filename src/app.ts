import express from "express";
import dotenv from "dotenv";
import exampleRoutes from "./routes/exampleRoutes";
import rateLimiter from "./middleware/rateLimiter";
import budgetRoutes from "./routes/budgetRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(rateLimiter);

app.use("/api/examples", exampleRoutes);
app.use("/api/budget", budgetRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
