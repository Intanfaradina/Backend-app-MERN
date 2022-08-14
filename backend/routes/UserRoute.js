import express from "express";
import {getUsers, getUsersById, saveUser, updateUser, deleteUser} from "../controller/UserController.js";
const router =express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', saveUser);
router.patch('/users/update/:id', updateUser);
router.delete('/users/delete/:id', deleteUser);

export default router 