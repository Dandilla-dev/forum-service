import {findPostById} from "../repository/post.repository.js";


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

export const checkPostOwner = async (req, res, next) => {
const id = req.params.id;
const post = await findPostById(id);
if (!post) {
    return res.status(404).json({ message: 'Post not found' });
}
if (post.author !== req.principal.userName) {
    return res.status(403).json({ message: 'Access denied' });
}
next();
}

export const isPostOwnerOrHasRole = role =>  async (req, res, next) => {
    const id = req.params.id;
    const post = await findPostById(id);
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    const isAuthor = post.author === req.principal.userName;
    const hasRole = req.principal.roles.includes(role.toUpperCase().trim());
    return isAuthor || hasRole ? next() : res.status(403).json({ message: 'Access denied' });
}