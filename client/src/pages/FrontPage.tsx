import { Button, Center, Flex, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <Flex align='center' justify='center' height='100vh' direction='column' gap={4}>
        <Link to="/difficulty">
          <Button>Start Game</Button>
        </Link>
        <Button>Join Game</Button>
    </Flex>
  );
}

export default FrontPage;
