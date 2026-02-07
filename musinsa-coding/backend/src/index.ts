import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import { initDb } from "./db/initDb.js";
import { securityHeaders } from "./middleware/security.js";
import { globalLimiter } from "./middleware/rateLimiter.js";

initDb();

const app = express();

// Security
app.use(securityHeaders);
app.use(globalLimiter);

// Parsing
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api", routes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
