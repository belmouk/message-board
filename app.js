import express from "express";
import indexRouter from "./routes/index.js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const PORT = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
