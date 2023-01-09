import { Avatar } from "@chakra-ui/avatar";
import { Heading } from "@chakra-ui/layout";
import { Flex, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" bg='lightcyan' alignItems='center' padding='1rem'>
        <Flex w="20%" justifyContent="space-between">
          <Box>
            <Heading>
              <Link href="/">Vivek Kumar</Link>
            </Heading>
          </Box>
          <Box>
            <Heading>
              <Link href="/projects">Projects</Link>
            </Heading>
          </Box>
        </Flex>
        <Box w="5%">
          <Avatar
            borderRadius="50%"
						w='70%'
            src="https://avatars.githubusercontent.com/u/107468134?v=4"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
