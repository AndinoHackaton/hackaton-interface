import React,{Component} from "react";
import App from "../../App";

import './Primero.css'

import { Box, Button , Center, Container, Spacer, Spinner,SimpleGrid} from '@chakra-ui/react'


function Primero(){
    return (
      <Container className="Padre_1">
        <Container className="Ventana_1">        
        <SimpleGrid columns={1} spacingX='40px' spacingY='20px'>
          
          <Button colorScheme='blue'>Button</Button>
          
          <Center><Spinner color='red.500' /></Center>

        </SimpleGrid>

      </Container>
      </Container>
    );
}
export default Primero;