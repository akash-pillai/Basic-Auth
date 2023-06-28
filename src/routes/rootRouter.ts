import { Router } from "express";
import {userRouter} from "../routes/userRouter"


export const rootRouter=Router();


rootRouter.use(userRouter);