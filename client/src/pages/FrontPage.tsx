import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  setServer: (server: WebSocket) => void;
}

function FrontPage({setServer}: Props) {
  const createConnection = async () => {
    const wsUri = "ws://localhost:8080";
    setServer(new WebSocket(wsUri));
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
