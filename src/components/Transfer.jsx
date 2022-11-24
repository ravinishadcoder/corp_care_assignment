import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RiTeamFill } from "react-icons/ri";
const Transfer = () => {
  return (
    <Box 
    p="40px"
    bg="white"
    boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      <HStack gap="5px">
        <RiTeamFill />
        <Text>Transfer to your team</Text>
      </HStack>
      <HStack gap="30px" mt="10px">
        <Text fontSize="4xl" fontWeight="bold">
          <Text as="span"  color="gray">
            $
          </Text>
          450
        </Text>
        <Button bg="#0038ff" variant="solid" color="white">
          Transfer
        </Button>
      </HStack>
      <AvatarGroup size="sm" max={4} mt="10px">
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
      </AvatarGroup>
    </Box>
  );
};

export default Transfer;
