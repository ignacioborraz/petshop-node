const errorHandler = (error, req, res, next) => {
    console.error(error);
    return res.status(500).json({
        method: req.method,
        path: req.url,
        response: error.message
    });
};

export default errorHandler;
