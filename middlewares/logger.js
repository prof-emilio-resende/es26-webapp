function logger(req, res, next) {
    console.log('... request start ...');
    next();
    console.log('... request end ...');
}

module.exports = logger;