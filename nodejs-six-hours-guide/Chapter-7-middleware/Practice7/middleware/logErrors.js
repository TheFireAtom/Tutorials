const { logEvents } = require("./logEvents")

const errorLogger = (err, req, res, next) => {
    logEvents(`${err.name}: ${err.message}`, "errLog.txt");
    console.error(err.stack);
    res.status(500).send(err.message);
    next();
}

module.exports = errorLogger;