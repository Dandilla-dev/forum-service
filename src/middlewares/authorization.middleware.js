
export const hasRole = role => (req, res, next) => {
    const check = req.principal.roles.includes(role.toUpperCase().trim());
    return check ? next() : res.status(403).json({ message: 'Access denied' });
}

export const isOwner = paramName => (req, res, next) =>
    req.principal.userName === req.params[paramName] ? next() : res.status(403).json({ message: 'Access denied' });

export const isOwnerOrHasRole = (paramName, role) => (req, res, next) => {
    const isOwner = req.principal.userName === req.params[paramName];
    const hasRole = req.principal.roles.includes(role.toUpperCase().trim());
    return isOwner || hasRole ? next() : res.status(403).json({ message: 'Access denied' });
}

