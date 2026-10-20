import * as AccountRepository from '../repository/userAccount.repository.js';


export const createAccount = async (user) => {
    try {
        return await AccountRepository.createAccount(user);
    } catch (e) {
        if (e.code === 11000) {
            throw new Error('User already exists');
        } else {
            throw e;
        }
    }
};

export const deleteAccount = async (login) => {
    return await AccountRepository.deleteAccount(login);
};

export const updateAccount = async (login, updated) => {
    return await AccountRepository.updateAccount(login, updated);
};

export const addRole = async (login, role) => {
    return await AccountRepository.addRole(login, role.toUpperCase());
};

export const deleteRole = async (login, role) => {
    return await AccountRepository.deleteRole(login, role.toUpperCase());
};

export const getUser = async (login) => {
    const user = await AccountRepository.getUser(login);
    if (!user) {
        throw new Error('User Not Found');
    } else {
        return user;
    }
};

export const changePassword = async (login, newPassword) => {
    return await AccountRepository.changePassword(login, newPassword);
};