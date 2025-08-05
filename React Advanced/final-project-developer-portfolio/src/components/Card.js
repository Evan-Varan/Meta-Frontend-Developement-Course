import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(
  <VStack
      overflow="hidden"
      borderRadius = "lg"
      spacing={4}
      align="start"
      p={4}
      background="white"
    boxShadow = "md">
       <Image
        src={imageSrc}
        alt={title}
        width="100%"
        height="200px" // fixed height for consistency
        objectFit="cover"
        borderTopRadius="lg" // only top corners rounded
      />
        <Heading size = "md" color = "black">{title}</Heading>
        <Text fontSize="sm" color="black">{description}</Text>
        <HStack>
          <Text fontSize = "sm" color = "black">See more</Text>
          <FontAwesomeIcon color = "black" icon={faArrowRight} size="1x" />
        </HStack>
 
    
    </VStack>
  )
};

export default Card;
