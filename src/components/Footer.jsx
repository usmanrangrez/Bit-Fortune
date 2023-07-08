import {
  Box,
  Stack,
  VStack,
  Text,
  Avatar,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const avatarSrc = "https://avatars.githubusercontent.com/u/92027005?v=4";
const Footer = () => {
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box
      bg={useColorModeValue("white", "black")}
      color={textColor}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Link href="https://github.com/usmanrangrez" target="_blank">
            Usman Rangrez
          </Link>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
