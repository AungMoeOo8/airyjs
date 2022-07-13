const { EventEmitter } = require("events");

class Router extends EventEmitter {}

const router = new Router();

module.exports = router;
