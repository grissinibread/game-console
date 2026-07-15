import { Button, Center, Flex, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <Flex align='center' justify='center' height='100vh'>
      <VStack>
        <Link to="/difficulty">
          <Button>Start Game</Button>
        </Link>
        <Button>Join Game</Button>
      </VStack>
    </Flex>
  );
}

export default FrontPage;
