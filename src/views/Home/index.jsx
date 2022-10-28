import { Box, Container,Flex,Button, Center,Text,Input } from "@chakra-ui/react";
import React,{Component} from "react";
import {useNavigate} from 'react-router-dom';


import './Segundo.css'

const Home = () => {
  const navigate = useNavigate();
    return (
      <Container className="Padre_2">
      <Flex direction={'column'} gap={'15px'} justify={'space-evenly'}>
        <Box className="Ventana_2" ml={2} mr={2} borderRadius={'10px'} >
        <Center>
          <Text>USDT</Text>
          <Input isReadOnly placeholder='Basic usage' />
        </Center>
        <Center>
          <Text>BUSD</Text>
          <Input isReadOnly placeholder='Basic usage' />
        </Center>
        </Box>
        <Box ml={2} mr={2} borderRadius={'10px'} >
          <Center><Button onClick={() => navigate(-1)} colorScheme='blue'>Button</Button></Center>
        </Box>
        <Box className="Ventana_2" ml={2} mr={2} borderRadius={'10px'} >Thisbox3</Box>
      </Flex>
      </Container>
    );
}

export { Home }
