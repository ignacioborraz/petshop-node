const errorHandler = (error, req, res, next) => {
    console.error(error);
    return res.json({
        code: 500,
        message: error.message
    });
};

export default errorHandler;
