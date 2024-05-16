

module.exports.getHome = (req, res, next) => {
    res.render('index');
}

module.exports.getLogin = (req, res, next) => {
    res.render('login');
}

module.exports.getSignup = (req, res, next) => {
    res.render('signup');
}