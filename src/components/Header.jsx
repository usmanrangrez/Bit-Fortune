import React, { useEffect } from "react";
import { Button, HStack, useColorMode, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    localStorage.setItem("colorMode", colorMode);
  }, [colorMode]);

  useEffect(() => {
    const savedColorMode = localStorage.getItem("colorMode");
    if (savedColorMode && colorMode !== savedColorMode) {
      toggleColorMode(savedColorMode);
    }
  }, [colorMode, toggleColorMode]);

  return (
    <Flex
      w={"100"}
      p={4}
      shadow={"base"}
      bgColor={"#0b1238"}
      justify="space-between"
    >
      <HStack spacing={4}>
        <Button fontSize={"20px"} variant={"unstyled"} color={"white"}>
          <Link to={"/"}>Home</Link>
        </Button>
        <Button fontSize={"20px"} variant={"unstyled"} color={"white"}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>
        <Button fontSize={"20px"} variant={"unstyled"} color={"white"}>
          <Link to="/coins">Coins</Link>
        </Button>
      </HStack>

      <Button onClick={toggleColorMode}>
        🌙 {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </Flex>
  );
};

export default Header;
