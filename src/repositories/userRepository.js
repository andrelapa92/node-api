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
        const existingUser = await models.User.findOne({ where: { email } });
        if (existingUser) {
            return existingUser;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        throw new Error('Erro ao buscar usuário pelo e-mail no banco de dados.');
    }
}

async function createUser(reqBody) {
    try {
        reqBody.created_at = new Date();
        reqBody.updated_at = new Date();
        return await models.User.create(reqBody);
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