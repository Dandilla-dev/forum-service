import Account from '../models/userAccount.model.js';

export const createAccount = async (user) => {
    return await Account.create(user);
};

export const deleteAccount = async (login) => {
    return await Account.findOneAndDelete({login: login}).exec();
};

export const updateAccount = async (login, updated) => {
    const fields = {};
    if (updated.firstName) {
        fields.firstName = updated.firstName;
    }
    if (updated.lastName) {
        fields.lastName = updated.lastName;
    }
    return await Account.findOneAndUpdate(
        {login: login},
        {$set: fields},
        {returnDocument: 'after'}
    ).exec();
};

export const addRole = async (login, role) => {
    return await Account.findOneAndUpdate(
        {login: login},
        {$addToSet: {roles: role}},
        {returnDocument: 'after'}
    ).exec();
};

export const deleteRole = async (login, role) => {
    return await Account.findOneAndUpdate(
        {login: login },
        {$pull: {roles: role}},
        {returnDocument: 'after'}
    ).exec();
};

export const getUser = async (login) => {
    return await Account.findOne({ login }).exec();
};

export const changePassword = async (login, newPassword) => {
    return await Account.findOneAndUpdate(
        {login: login},
        {$set: {password: newPassword}},
        {returnDocument: 'after'}
    ).exec();
};