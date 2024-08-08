import UserDto from "../dto/UserDto";
import IUser from "../Interfaces/IUser";

let users: IUser[] = [{
    id: 1,
    name: "Jorge",
    email: "jor@mail.com",
    active: true
}];

let id: number = 2;

export const createUsersServices = async (userData: UserDto): Promise<IUser> =>{
    // recibir lo datos del usuario
    // crear un nuevo usuario
    // incluir el nuevo usuario en el arreglo
    // retornar el objeto creado
    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        active: userData.active
    }
    users.push(newUser)
    id++;
    return newUser
    
};

export const getUsersServices = async (): Promise<IUser[]> =>{
    return users;

};


export const deleteUsersServices = async (id: number): Promise<void> =>{
    users = users.filter((user: IUser) => {
        return user.id !== id
    })
}