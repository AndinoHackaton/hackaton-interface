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
          <Input isReadOnly placeholder='Configurar mostrar USDT' />
        </Center>
        <Center>
          <Text>BUSD</Text>
          <Input isReadOnly placeholder='Configurar mostrar BUSD' />
        </Center>
        </Box>
        <Box ml={2} mr={2} borderRadius={'10px'} >
          <Center><Button disabled onClick={() => navigate(-1)} colorScheme='blue'>Boton a Cambiar</Button></Center>
        </Box>
        <Box className="Ventana_2" ml={2} mr={2} borderRadius={'10px'} >Historial</Box>
      </Flex>
      </Container>
    );
}

export { Home }
