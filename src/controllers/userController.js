const UserService = require('../services/userService');

const addUser = async (req, res, next) => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

const removeUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await UserService.deleteUserById(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const viewUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await UserService.getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

const listUsers = async (req, res, next) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const users = await UserService.getUsers({ page, limit });
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    addUser,
    removeUser,
    viewUser,
    listUsers
};
