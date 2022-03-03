exports.middlewareSetUserSession = (req, res, next) => {
    req.session = {userId: 21, userName: 'Hythan', ip: 123}
    next();
};