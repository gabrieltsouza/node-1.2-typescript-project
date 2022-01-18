//npm add @types/express -D
import express, { request, response } from "express";
import { createCourse } from "./routes";

const app = express();

app.get("/", createCourse)

app.listen(3333);