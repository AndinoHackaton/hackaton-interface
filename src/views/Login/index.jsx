import React,{Component} from "react";
import App from "../../App";
import WalletData from "../../components/wallet-data";

import './Primero.css'

import { Box, Button , Center, Container, Spacer, Spinner,SimpleGrid} from '@chakra-ui/react'


export const Login=()=>{
    return (
      <Container className="Padre_1">
        <Container className="Ventana_1">        
        <SimpleGrid columns={1} spacingX='40px' spacingY='20px'>
          
          <WalletData/>
          
          <Center><Spinner color='red.500' /></Center>

        </SimpleGrid>

      </Container>
      </Container>
    );
}