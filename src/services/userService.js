import userRepository from "../repositories/userRepository.js";
import { AlreadyExists, NotFound } from "../utils/error/customErrors.js";

async function getUsers() {
    return await userRepository.getUsers();
}

async function getUserById(id) {
    const existingUser = await userRepository.getUserById(id);
    if (!existingUser) {
        throw new NotFound(`Usuário com ID ${id} não encontrado.`);
    }
    return existingUser;
}

async function createUser(user) {
    const existingUser = await userRepository.getUserByEmail(user.email);
    if (existingUser) {
        throw new AlreadyExists('E-mail já cadastrado.');
    }
    return await userRepository.createUser(user);
}


async function updateUser(id, body) {
    const existingUser = await getUserById(id);
    return await userRepository.updateUser(existingUser, body);
}

async function deleteUser(id) {
    const existingUser = await userRepository.getUserById(id);
    if (!existingUser) {
        throw new NotFound(`Usuário com ID ${id} não encontrado.`);
    } else {
        return await userRepository.deleteUser(id);
    }
}

export default {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};