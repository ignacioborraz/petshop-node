const errorHandler = (error, req, res, next) => {
    return res.status(500).json({
        code: 500,
        message: error.message
    });
};

export default errorHandler;
