const express = require ("express");

const helmet = require ("helmet");

const CORS = require ("cors");

// const characterRouter = require("./characters/characterRouter");

const server = express()

server.use(express.json());
server.use(helmet());
server.use(CORS());

// server.use("/api/router", characterRouter)

server.get("/", (req, res) => {
    res.send(`<h1>Hello World</h1>`)
})

module.exports = server;