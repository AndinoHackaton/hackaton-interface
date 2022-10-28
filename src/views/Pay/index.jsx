import { Container, Flex, NumberInput, NumberInputField, NumberInputStepper, Button, Select, Center, Image,Heading} from "@chakra-ui/react";
import React, { Component, useState } from "react";
import { BiDollarCircle, BiArrowBack } from "react-icons/bi";
import { AiOutlineArrowRight} from "react-icons/ai";
import { IoReturnDownBack } from "react-icons/io5";

import './funciones'
import './Tercero.css'
import './Cuarto.css'
import './Quinto.css'
//view_one boton con id continuar y deshabilitado eliminar
//su funcion esta comentada en funciones.js
export const Pay = () => {
    
  const [statePay, setStatePay] = useState(1)

  const view_one = (
    <Container className="Padre_3">
      <Container className="Ventana_3" p={10} centerContent >
      <Button mb={'5'} w={'auto'} leftIcon={<BiArrowBack />} colorScheme='teal' variant='solid'>Regresar</Button>
        <h1>Monto a Pagar</h1>
        <p>Dolares a Recibir:</p>
        <Flex centerContent justify={'center'} pt={'10'} pb={'10'}>
          <BiDollarCircle className="icon" />
          <NumberInput id="cantidad"  min={0}  focusBorderColor={'none'}>
            <NumberInputField />
            <NumberInputStepper>
            </NumberInputStepper>
          </NumberInput></Flex>
        <Button id="continuar" isDisabled rightIcon={<AiOutlineArrowRight/>} colorScheme='blue' onClick={() => setStatePay(2)}>Aceptar</Button>
      </Container>
    </Container>
  );
  const view__two = (
    <Container className="Padre_4">
      <Container className="Ventana_4" p={10} centerContent >
      <Button mb={'5'} w={'auto'} leftIcon={<BiArrowBack />}  colorScheme='teal' variant='solid' onClick={() => setStatePay(1)}>Regresar</Button>
        <h1>Elije una criptomoneda</h1>
        <p>Selecciona la criptomoneda que vas a recibir a cambio</p>
        <Select placeholder='Seleccionar'>
          <option value='option1'><BiDollarCircle className="icon" /> Dollar Theter</option>
          <option value='option2'><BiDollarCircle className="icon" /> Binance Dollar</option>
        </Select>

        <Button  rightIcon={<AiOutlineArrowRight/>} colorScheme='blue' onClick={() => setStatePay(3)}>Aceptar</Button>
      </Container>
    </Container>
  );
  const view_three = (
    <Container className="Padre_5">

      <Container className="Ventana_5" p={10} centerContent >
        <Heading as='h1' size='md' noOfLines={1}>
          Paga con QR!
        </Heading>
        <Center>
          <Image
            h='150px'
            objectFit=''
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Codigo_QR.svg/1200px-Codigo_QR.svg.png'
            alt='Dan Abramov'
          />
        </Center>
        <Button  rightIcon={<IoReturnDownBack/>} colorScheme='blue' onClick={() => setStatePay(1)}>Aceptar</Button>
      </Container>
    </Container>
  );

  if (statePay === 1) {
    return view_one
  } else if (statePay === 2) {
    return view__two
  } else {
    return view_three
  }
};
