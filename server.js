const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use("/test", require("./pages/api/test"));
    server.get("/user/:id", (req, res) => app.render(req, res, "/api/user", req.params));
    server.get("*", (req, res) => handle(req, res));
    server.listen(port, (error) => {
        if (error) throw error;
        console.log("> Ready on http://localhost:3000");
    });
}).catch((e) => {
    console.error(e.stack);
    process.exit(1);
});