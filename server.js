import app from "./app.js";

const port = process.env.PORT || 8080;
const ready = () => console.log("server ready on port " + port);

app.listen(port, ready);
