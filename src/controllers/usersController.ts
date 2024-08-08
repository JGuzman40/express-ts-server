import { Request, Response } from "express";
import { createUsersServices, getUsersServices, deleteUsersServices } from "../services/usersServices";
import IUser from "../Interfaces/IUser";

export const createUsers = async (req: Request, res: Response) =>{
    const { name, email, active } = req.body;
    const newUser: IUser = await createUsersServices({ name, email, active })
    res.status(201).json(newUser)
};

export const getUsers = async (req: Request, res: Response) =>{
    const users: IUser[] = await getUsersServices();
    res.status(200).json(users);
};


export const deleteUsers = async (req: Request, res: Response) =>{
    const { id } = req.body
    await deleteUsersServices(id)
    res.status(200).json({ message: "User eliminado correctamente"})
}