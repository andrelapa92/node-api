import models from "../models/index.js";

async function getUsers() {
    try {
        return await models.User.findAll();
    } catch (error) {
        throw new Error('Erro ao buscar usuários no banco de dados.');
    }
}

async function getUserById(id) {
    try {
        return await models.User.findByPk(id);
    } catch (error) {
        throw new Error('Erro ao buscar usuário pelo ID no banco de dados.');
    }
}

async function getUserByEmail(email) {
    try {
        return await models.User.findOne({ where: { email } });
    } catch (error) {
        throw new Error('Erro ao buscar usuário pelo e-mail no banco de dados.');
    }
}

async function createUser(user) {
    try {
        user = {
            ...user,
            created_at: new Date(),
            updated_at: new Date(),
        };
        return await models.User.create(user);
    } catch (error) {
        throw new Error('Erro ao inserir usuário no banco de dados.');
    }
}

async function updateUser(existingUser, body) {
    try {
        body.updated_at = new Date();
        return await existingUser.update(body);
    } catch (error) {
        throw new Error('Erro ao atualizar usuário no banco de dados.');
    }
}

async function deleteUser(id) {
    try {
        return await models.User.destroy({ where: { id } });
    } catch (error) {
        throw new Error('Erro ao excluir usuário do banco de dados.');
    }
}

export default {
    getUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
};