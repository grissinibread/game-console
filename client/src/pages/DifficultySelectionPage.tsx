import { useState } from 'react';
import { Button, Flex, Text, VStack } from '@chakra-ui/react';

function DifficultySelectionPage() {
  const [difficulty, setDifficulty] = useState<string | null>(null);

  const updateGame = (difficulty: string) => {
    setDifficulty(difficulty);
  }

  return (
    <Flex height='100vh' align='center' justify='center' direction='column'>
      <Text>Select Difficulty</Text>

      <VStack className="stack" mt={4}>
        <Button variant={difficulty === 'easy' ? 'outline' : 'solid'} onClick={() => updateGame("easy")}>Easy</Button>
        <Button variant={difficulty === 'normal' ? 'outline' : 'solid'} onClick={() => updateGame("normal")}>Normal</Button>
        <Button variant={difficulty === 'hard' ? 'outline' : 'solid'} onClick={() => updateGame("hard")}>Hard</Button>
      </VStack>

      <Button mt={4} >Create Game</Button>
    </Flex>
  );
}

export default DifficultySelectionPage;
