import { Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <VStack>
      <Link to="/difficulty">
        <Button color={"white"}>Start Game</Button>
      </Link>
      <Button color={"white"}>Join Game</Button>
    </VStack>
  );
}

export default FrontPage;
