


const response = (res, statusCode, data, msg) => {

    res.status(statusCode).json({
        code: statusCode,
        data,
        msg
    });}

module.exports = response;