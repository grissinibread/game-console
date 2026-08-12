import { useState } from "react";
import { Button, Flex, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props {
  server: WebSocket | null;
}

function DifficultySelectionPage({ server }: Props) {
  const [difficulty, setDifficulty] = useState<string | null>(null);

  const updateGame = (difficulty: string) => {
    setDifficulty(difficulty);
  };

  const sendDifficulty = () => {
    if (difficulty) server?.send(difficulty);
  };

  return (
    <Flex height="100vh" align="center" justify="center" direction="column">
      <Text>Select Difficulty</Text>

      <VStack className="stack" mt={4}>
        <Button
          variant={difficulty === "easy" ? "outline" : "solid"}
          onClick={() => updateGame("easy")}
        >
          Easy
        </Button>
        <Button
          variant={difficulty === "normal" ? "outline" : "solid"}
          onClick={() => updateGame("normal")}
        >
          Normal
        </Button>
        <Button
          variant={difficulty === "hard" ? "outline" : "solid"}
          onClick={() => updateGame("hard")}
        >
          Hard
        </Button>
      </VStack>

      <Link to="/wordInput">
        <Button mt={4} disabled={difficulty === null} onClick={sendDifficulty}>
          Create Game
        </Button>
      </Link>
    </Flex>
  );
}

export default DifficultySelectionPage;
