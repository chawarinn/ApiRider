import express from "express";
import cors from "cors";
import { router as login } from "./api/login";
import { router as register } from "./api/register";
import { router as users } from "./api/users";
import { router as de } from "./api/delete";
import { router as order } from "./api/order";
import { router as rider } from "./api/rider";

import bodyParser from "body-parser";

export const app = express();

app.use(
    cors({
      origin: "*",
    })
);

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use("", login);
app.use("", register);
app.use("/users", users);
app.use("/de", de);
app.use("/order", order);
app.use("/riders", rider);

