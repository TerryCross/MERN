

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500;
    console.log("errorMiddleware.js, I not Express now handle the error, typeof server response status code:", statusCode);
    console.log("typeof err.stack", toType(err.stack),
                err.stack.split("\n")[0]);
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

export default errorHandler;

function toType(obj) { return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1];}
