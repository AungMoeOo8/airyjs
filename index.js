const http = require("http");
const router = require("./src/router");

const server = http.createServer();

const data = [
  { id: 1, name: "Aung Moe Oo", age: 22, role: "admin", marriage: false },
  { id: 1, name: "Aung Moe Oo", age: 22, role: "admin", marriage: false },
  { id: 1, name: "Aung Moe Oo", age: 22, role: "admin", marriage: false },
  { id: 1, name: "Aung Moe Oo", age: 22, role: "admin", marriage: false },
  { id: 1, name: "Aung Moe Oo", age: 22, role: "admin", marriage: false },
  { id: 1, name: "Aung Moe Oo", age: 22, role: "admin", marriage: false },
  { id: 1, name: "Aung Moe Oo", age: 22, role: "admin", marriage: false },
  { id: 1, name: "Aung Moe Oo", age: 22, role: "admin", marriage: false },
  { id: 1, name: "Aung Moe Oo", age: 22, role: "admin", marriage: false },
  { id: 1, name: "Aung Moe Oo", age: 22, role: "admin", marriage: false },
];

server.on("request", (req, res) => {
  router.emit(req.url, req, res);
});

router.on("/api", (req, res) => res.end(JSON.stringify(data)));

router.on("/ex", (req, res) => {
  console.log(req.method);
  console.log(req.headers);
  res.end();
});

server.listen("3000");
