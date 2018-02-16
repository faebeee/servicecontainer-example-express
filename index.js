const express = require("express");
const path = require('path');
const ServiceContainer = require('servicecontainer');

const app = express();
const container = ServiceContainer.create(path.resolve(__dirname, './config/parameters.json'));

const helloController = container.get("HelloController");

app.get("/", (req, res) => {
    helloController.getIndex(req, res);
});

app.get("/hello", (req, res) => { 
    helloController.sayHello(req, res);
});

const port = container.getParameter('port');

app.listen(port, () => console.log(`Example app listening on ${ port }`));