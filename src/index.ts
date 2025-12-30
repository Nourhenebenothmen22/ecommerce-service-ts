import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middlewares globaux
app.use(helmet()); // Sécurité headers
app.use(cors());   // CORS
app.use(morgan("dev")); // Logs HTTP
app.use(express.json()); // Body parser JSON

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requêtes par IP
  message: "Too many requests from this IP, please try again later",
});
app.use(limiter);

// Route test
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is running ✅" });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
