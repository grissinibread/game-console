import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", function connection(ws) {
  ws.on("error", console.error);

  ws.on("message", function message(data) {
    let text = data.toString("utf-8");

    if (text === "easy") ws.send(3);
    if (text === "normal") ws.send(5);
    if (text === "hard") ws.send(7);
  });
});
