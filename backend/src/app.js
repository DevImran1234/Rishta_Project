import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";
import routes from "./routes/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import setupSocket from "./services/socketService.js";
import path from "path";
import { createServer } from "http";
import errorHandler from "./middleware/errorMiddleware.js";


dotenv.config();
connectDB();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const uploadsPath = path.join(projectRoot, "uploads");
app.use("/uploads", express.static(uploadsPath));

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/api", routes);
app.use(errorHandler);

const httpServer = createServer(app);

setupSocket(httpServer);

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server (HTTP & Socket) is running on port ${PORT}`);
});

export default app;
