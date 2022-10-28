import React,{Component} from "react";
import App from "../../App";
import { Container, Flex, NumberInput,NumberInputField,NumberInputStepper,Button,Select} from "@chakra-ui/react";
import { BiDollarCircle,BiArrowBack} from "react-icons/bi";
import './Cuarto.css'

function Cuarto(){
    return (
      <Container className="Padre_4">

        <Container className="Ventana_4" p={10} centerContent >
        <h1><BiArrowBack/>RECORDATORIO HACER EL BOTON DE REGRESO Y CON EL TITULO DE ARRIBA</h1>
        
        
        
        <h1>Elije una criptomoneda</h1>
        <p>Selecciona la criptomoneda que vas a recibir a cambio</p>
        
        
        <Select placeholder='Seleccionar'>
          <option value='option1'><BiDollarCircle className="icon"/> Dollar Theter</option>
          <option value='option2'><BiDollarCircle className="icon"/> Binance Dollar</option>
        </Select>
          
        <Button colorScheme='blue'>Button</Button>
      </Container>
      </Container>
    );
}
export default Cuarto;