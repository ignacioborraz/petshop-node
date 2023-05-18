const notFoundHandler = (req, res, next) => {
    console.log(`not found ${req.method} ${req.url}`);
    return res.json({
        code: 404,
        message: "not found"
    });
};

export default notFoundHandler;
