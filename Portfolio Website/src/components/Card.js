import { Box,Badge ,Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box   maxW='ms' borderWidth='1px' borderRadius='lg' overflow='hidden' bg='white'
    >
      <Image  src={imageSrc}></Image>
      <Box p='6' color='black'>
        <VStack alignItems='flex-start'>
          <Heading as='h1' size='md' color='black'>
            {title} &nbsp;
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              New
            </Badge>
          </Heading>
          <Text   color='rgb(117, 124, 131)' fontSize='sm'>{description}</Text>
          <Heading size='sm'>
            See more   <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Heading>
        </VStack>
      </Box>
    </Box>
  )
};

export default Card;
