import { Box, Container, Progress, Spinner, Text } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"80vh"}
      gap={5}
      // ml={"20vw"}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="md"
        w={["120px", "100px", "200px", "200px"]}
        h={["120px", "100px", "200px", "150px"]}
        mb={6}
      />
      <Progress w={"200px"} size={"xs"} isIndeterminate />
    </Box>
  );
};

export default Loader;
