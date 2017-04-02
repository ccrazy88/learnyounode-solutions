const net = require("net");
const strftime = require("strftime");

const port = process.argv[2];
const server = net.createServer(socket => {
  const formattedDate = strftime("%F %R");
  const data = formattedDate + "\n";
  socket.end(data);
});

server.listen(port);
