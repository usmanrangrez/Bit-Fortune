import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/bit.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box w="full" h="85vh" bg="purple.500">
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w="full"
          h="full"
          objectFit="contain"
          src={btcSrc}
          filter="grayscale(1)"
        />
      </motion.div>
    </Box>
  );
};

export default Home;
