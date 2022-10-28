import { Container, Flex, NumberInput,NumberInputField,NumberInputStepper,Button,Center,Image} from "@chakra-ui/react";
import { BiDollarCircle,BiArrowBack} from "react-icons/bi";
import React,{Component} from "react";
import App from "../../App";

import './Quinto.css'

function Quinto(){
    return (
      <Container className="Padre_5">

        <Container className="Ventana_5" p={10} centerContent >
        <h1><BiArrowBack/>RECORDATORIO HACER EL BOTON DE REGRESO Y CON EL TITULO DE ARRIBA</h1>

        <Center>
        <Image
          h='150px'
          objectFit=''
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Codigo_QR.svg/1200px-Codigo_QR.svg.png'
          alt='Dan Abramov'
        />
        </Center>
        <br/>        <br/>
        
        <br/>
        <br/>
        <Button colorScheme='blue'>Button</Button>
      </Container>
      </Container>
    );
}
export default Quinto;