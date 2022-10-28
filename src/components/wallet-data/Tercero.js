import { Container, Flex, NumberInput,NumberInputField,NumberInputStepper,Button} from "@chakra-ui/react";
import React,{Component} from "react";
import { BiDollarCircle,BiArrowBack} from "react-icons/bi";
import App from "../../App";

import './Tercero.css'

function Tercero(){
    return (
      <Container className="Padre_3">

        <Container className="Ventana_3" p={10} centerContent >
        <h1><BiArrowBack/>RECORDATORIO HACER EL BOTON DE REGRESO Y CON EL TITULO DE ARRIBA</h1>



        <h1>Monto a Pagar</h1>
        <p>Dolares a Recibir:</p>


        <Flex centerContent justify={'center'} pt={'10'} pb={'10'}> 
          <BiDollarCircle className="icon"/>
          <NumberInput focusBorderColor={'none'}>
          <NumberInputField />
          <NumberInputStepper>
          </NumberInputStepper>
        </NumberInput></Flex>
        <Button colorScheme='blue'>Button</Button>
      </Container>
      </Container>
    );
}
export default Tercero;