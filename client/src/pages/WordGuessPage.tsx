import { Box, Flex, Input, Text } from "@chakra-ui/react";

function WordGuessPage() {
  let temp = [1, 2, 3, 4, 5, 6, 7];
  let temp2 = [1, 2, 3, 4, 5];

  return (
    <Flex
      direction="column"
      height="100vh"
      align="center"
      justify="center"
      m={4}
    >
      <Text fontWeight="bold" mb={4}>Starter Word</Text>
      <Text mb={4}>PlaceHolder Word</Text>

      <Text fontWeight="bold" mb={4}>Guess Words</Text>

      <div className={"stack"}>
        {temp.map((index) => (
          <Box key={index}>
            {temp2.map((index) => (
              <Input
                m={1}
                key={index}
                className={"wordInput"}
                name={"wordInput"}
                type={"text"}
                maxLength={1}
                w={1}
              />
            ))}
          </Box>
        ))}
      </div>
    </Flex>
  );
}

export default WordGuessPage;
