import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

const port = process.env.port || 3000;

app.use(cors());

app.listen(port, () => {
  console.log(`Servidor encendido http://localhost:${port}`);
});
