import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  numOfWords?: number;
}

function WordInputPage({numOfWords}: Props) {
  // TODO: Fix race condition
  console.log(numOfWords);
  const guessWords = new Array(numOfWords).fill('');
  console.log(guessWords);
  
  const navigate = useNavigate();

  return (
    <Flex direction="column" height="100vh" align="center" justify="center" m={4}>
      <Text>Starter Word</Text>
      <Input m={4} maxWidth='lg'/>

      <Text>Guess Words</Text>
      {guessWords.map((_, index) => (
        <Input key={index} mt={4} maxWidth='lg'/>
      ))}

      <Button mt={4} onClick={() => navigate('/wordGuess')}>Lock In</Button>
    </Flex>
  );
}

export default WordInputPage;
