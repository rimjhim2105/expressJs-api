import { Router } from "express";
import UserController from "../controllers/userController.js";

const route = Router();

route.post('/', UserController.createUser)

export default route;