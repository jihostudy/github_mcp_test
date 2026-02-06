import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { initDb } from "./db/initDb.js";

initDb();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/api", routes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
