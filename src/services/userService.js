const User = require('../models/userModel');

const createUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    return user;
};

const deleteUserById = async (id) => {
    const deletedUser = await User.findByIdAndDelete(id);
    return deletedUser;
};

const getUserById = async (id) => {
    const user = await User.findById(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

const getUsers = async ({ page, limit }) => {
    const users = await User.find()
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
    return users;
};

module.exports = {
    createUser,
    deleteUserById,
    getUserById,
    getUsers
};
