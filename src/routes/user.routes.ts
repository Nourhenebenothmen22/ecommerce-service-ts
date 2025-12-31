import { Router } from "express";
import { getUserById, getUsers, login, register } from "../controllers/user.controller";
const router=Router()
router.post("/register",register)
router.post("/login",login)
router.get("/",getUsers);
router.get("/:id",getUserById);
export default router;
