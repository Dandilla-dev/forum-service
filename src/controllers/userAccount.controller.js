import * as AccountService from '../services/userAccount.service.js';

export const createAccount = async (req, res) => {
    try {
        const {login, password, firstName, lastName} = req.body;
        const created = {login, password, firstName, lastName}
        const user = await AccountService.createAccount(created);
        return res.status(201).json({
            "login": user.login,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "roles": user.roles
        });
    }catch (e) {
        if (e.message === 'User already exists') {
            return res.status(409).json({
                "status": 409,
                "error": "Conflict",
                "message": "User already exists"
            });
        }else {
            console.error(e);
            return res.status(500).json({
                "status": 500,
                "error": "Internal Server Error",
                "message": "An error occurred while creating the account"
            });
        }
    }
}

export  const deleteAccount = async (req, res) => {
    try {
        const user = await AccountService.deleteAccount(req.params.user);
        return res.status(200).json({
            "login": user.login,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "roles": user.roles
        });
    }catch(e) {
            console.error(e);
            return res.status(500).json({
                "status": 500,
                "error": "Internal Server Error",
                "message": "An error occurred while deleting the account"
            });
        }
}

export const updateAccount = async (req, res) => {
    try {
        const {firstName, lastName} = req.body;
        const updated = {firstName, lastName}
        const user = await AccountService.updateAccount(req.params.user, updated);
        return res.status(200).json({
            "login": user.login,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "roles": user.roles
        });
    }catch(e) {
        console.error(e);
        return res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while updating the account"
        });
    }
}

export const addRole = async (req, res) => {
    try {
        const user = await AccountService.addRole(req.params.user,
            req.params.role);
        return res.status(200).json({
            "login": user.login,
            "roles": user.roles
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while role adding"
        });
    }
}

export const deleteRole = async (req, res) => {
    try {
        const user = await AccountService.deleteRole(req.params.user,
            req.params.role);
        return res.status(200).json({
            "login": user.login,
            "roles": user.roles
        });
    }catch(e) {
        console.error(e);
        return res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while role deleting"
        });
    }
}

export  const getUser = async (req, res) => {
    try {
        const user = await AccountService.getUser(req.params.user);
        return res.status(200).json({
            "login": user.login,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "roles": user.roles
        });
    }catch (e) {
        if (e.message === 'User Not Found') {
            return res.status(404).json({
                "status": 404,
                "error": "Not found",
                "message": "User Not Found"
            });
        } else {
            console.error(e);
            return res.status(500).json({
                "status": 500,
                "error": "Internal Server Error",
                "message": "An error occurred while getting the user"
            });
        }
    }
}

export const userLogin = (req, res) => {
    const user = req.user
    return res.status(200).json({
        "login": user.login,
        "firstName": user.firstName,
        "lastName": user.lastName,
        "roles": user.roles
    });
}

export const changePassword = async (req, res) => {
    try { await AccountService.changePassword(req.user.login,
            req.body.password);
        return res.status(204).send();
    }catch(e) {
        console.error(e);
        return res.status(500).json({
            "status": 500,
            "error": "Internal Server Error",
            "message": "An error occurred while changing the password"
        });
    }
}


