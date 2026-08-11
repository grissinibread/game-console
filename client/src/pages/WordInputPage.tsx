import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function WordInputPage() {
  const navigate = useNavigate();
  let difficulty = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Flex direction="column" height="100vh" align="center" justify="center" m={4}>
      <Text>Starter Word</Text>
      <Input m={4} maxWidth='lg'/>

      <Text>Guess Words</Text>
      {difficulty.map((d) => (
        <Input key={d} mt={4} maxWidth='lg'/>
      ))}

      <Button mt={4} onClick={() => navigate('/wordGuess')}>Lock In</Button>
    </Flex>
  );
}

export default WordInputPage;
