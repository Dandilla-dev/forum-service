export const auth = async (req, res, next) => {
    const isValid = true;
    if (!isValid) {
        return res.status(401).json({
            "status": 401,
            "error": "Unauthorized",
            "message": "Invalid credentials"
        });
    } else {
        //Implement middleware logic to authenticate user
        req.user = {
            login: 'JavaFan',
            firstName: 'John',
            lastName: 'Smith',
            roles: ['USER']
        };
        next()
    }
}

export const isAdmin = (req, res, next) => {
    const hasAccess = true;
    if (!hasAccess) {
        return res.status(403).json({
            "status": 403,
            "error": "Forbidden",
            "message": "Access denied"
        });
    } else {
        //Implement middleware logic for users role
        next()
    }
}


export const isOwnerOrAdmin = (req, res, next) => {
    const hasAccess = true;
    if (!hasAccess) {
        return res.status(403).json({
            "status": 403,
            "error": "Forbidden",
            "message": "Access denied"
        });
    } else {
        //Implement middleware logic for users role
        next()
    }
}

