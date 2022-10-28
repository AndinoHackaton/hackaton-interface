import { Container, Flex, NumberInput, NumberInputField, NumberInputStepper, Button, Select, Center, Image } from "@chakra-ui/react";
import React, { Component, useState } from "react";
import { BiDollarCircle, BiArrowBack } from "react-icons/bi";

import './Tercero.css'
import './Cuarto.css'
import './Quinto.css'
export const Pay = () => {

  const [statePay, setStatePay] = useState(1)

  const view_one = (
    <Container className="Padre_3">
      <Container className="Ventana_3" p={10} centerContent >
        <h1><BiArrowBack />RECORDATORIO HACER EL BOTON DE REGRESO Y CON EL TITULO DE ARRIBA</h1>
        <h1>Monto a Pagar</h1>
        <p>Dolares a Recibir:</p>
        <Flex centerContent justify={'center'} pt={'10'} pb={'10'}>
          <BiDollarCircle className="icon" />
          <NumberInput focusBorderColor={'none'}>
            <NumberInputField />
            <NumberInputStepper>
            </NumberInputStepper>
          </NumberInput></Flex>
        <Button colorScheme='blue' onClick={() => setStatePay(2)}>next</Button>
      </Container>
    </Container>
  );
  const view__two = (
    <Container className="Padre_4">
      <Container className="Ventana_4" p={10} centerContent >
        <h1><BiArrowBack />RECORDATORIO HACER EL BOTON DE REGRESO Y CON EL TITULO DE ARRIBA</h1>
        <h1>Elije una criptomoneda</h1>
        <p>Selecciona la criptomoneda que vas a recibir a cambio</p>
        <Select placeholder='Seleccionar'>
          <option value='option1'><BiDollarCircle className="icon" /> Dollar Theter</option>
          <option value='option2'><BiDollarCircle className="icon" /> Binance Dollar</option>
        </Select>

        <Button colorScheme='blue' onClick={() => setStatePay(3)}>Button</Button>
      </Container>
    </Container>
  );
  const view_three = (
    <Container className="Padre_5">

      <Container className="Ventana_5" p={10} centerContent >
        <h1><BiArrowBack />RECORDATORIO HACER EL BOTON DE REGRESO Y CON EL TITULO DE ARRIBA</h1>

        <Center>
          <Image
            h='150px'
            objectFit=''
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Codigo_QR.svg/1200px-Codigo_QR.svg.png'
            alt='Dan Abramov'
          />
        </Center>
        <Button colorScheme='blue'>Button</Button>
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
