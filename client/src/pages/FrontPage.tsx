import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function FrontPage() {
  const createConnection = async () => {
    const wsUri = "ws://localhost:8080";
    const ws = new WebSocket(wsUri);

    ws.addEventListener("open", () => {
      ws.send("ma mama");

      ws.onmessage = (message) => {
        console.log(message.data);
      };
    });
  };

  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
      direction="column"
      gap={4}
    >
      <Link to="/difficulty">
        <Button onClick={() => createConnection()}>Start Game</Button>
      </Link>
      <Button>Join Game</Button>
    </Flex>
  );
}

export default FrontPage;
