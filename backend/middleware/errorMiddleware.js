const errorHandler = (err, req, res, next) => {
    console.log("I not Express now handle the error, typeof statuscode:", typeof res.statuscode);
    const statusCode = res.statusCode || 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
}

export default errorHandler;
