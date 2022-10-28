import { Text,Container, Flex, NumberInput, NumberInputField, NumberInputStepper, Button, Center, Image,Heading, VStack, Stack, useColorModeValue, StackDivider, Icon} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiDollarCircle, BiArrowBack } from "react-icons/bi";
import { AiOutlineArrowRight} from "react-icons/ai";

import NavLink from '../../layouts/main/nav-link'

import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
} from 'react-icons/io5';

// import './funciones'
import './index.css'
import './Tercero.css'
import './Cuarto.css'
import './Quinto.css'
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";

import QRCode from "qrcode"
import { useCreateStonProyect } from "../../hooks/useCreateStonProyect";

const Feature = ({ text, icon, iconBg, onClick }) => {
  return (
    <Stack
      direction={'row'}
      align={'center'}
      m="1"
      p="1"
      onClick={onClick}
    >
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};



//view_one boton con id continuar y deshabilitado eliminar
//su funcion esta comentada en funciones.js
export const GenerarQr = () => {
  let navigate = useNavigate();
    // web3-react
  const { active } = useWeb3React()
  useEffect(()=>{
    if(!active){
      navigate("/login");
    }
  },[active, navigate])

  const [statePay, setStatePay] = useState(1)

  const [amount, setAmount] = React.useState('1.53')
  const [stable, setStable] = React.useState('"')
  const [qrLink, setQrLink] = React.useState('"')
  const { addressSton} = useCreateStonProyect()

  const handlerClickStable = (selectedStable)=>{
    setStable(selectedStable)
    setStatePay(3)
  }

  useEffect(()=>{
    QRCode.toDataURL( `${window.location.origin}/#/pay?amount=${amount}&address=${addressSton}`, function (err, url) {
      setQrLink(url)
    })
  },[amount, addressSton])


  const view_one = (
    <Container className="Padre_3">
      <Container className="Ventana_3" p={10} centerContent >
      <NavLink to="/home">
        <Button mb={'5'} w={'auto'} leftIcon={<BiArrowBack />} colorScheme='teal' variant='solid'>Regresar</Button>
      </NavLink>
        <h1>Monto a Pagar</h1>
        <p>Dolares a Recibir:</p>
        <Flex justify={'center'} pt={'10'} pb={'10'}>
          <BiDollarCircle className="icon" />
          <NumberInput 
            id="cantidad"
            onChange={(valueString) => setAmount(valueString)}
            onBlur={(el) => setAmount( Number(Number(el.target.value).toFixed(2)))}
            value={amount}
            min={5}
            focusBorderColor={'none'}
          >
            <NumberInputField />
            <NumberInputStepper>
            </NumberInputStepper>
          </NumberInput></Flex>
        <Button id="continuar" isDisabled={amount<5} rightIcon={<AiOutlineArrowRight/>} colorScheme='blue' onClick={() => setStatePay(2)}>Aceptar</Button>
      </Container>
    </Container>
  );
  const view__two = (
    <Container className="Padre_4">
      <Container className="Ventana_4" p={10} centerContent >
        <h1><BiArrowBack />RECORDATORIO HACER EL BOTON DE REGRESO Y CON EL TITULO DE ARRIBA</h1>
        <h1>Elije una criptomoneda</h1>
        <p>Selecciona la criptomoneda que vas a recibir a cambio</p>

        <Stack
            className="view_two__input-container"
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Dollar Theter'}
              onClick={()=>handlerClickStable("Dollar Theter")}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Binance Dollar'}
              onClick={()=>handlerClickStable("Binance Dollar")}
            />
          </Stack>
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
            src={qrLink}
            alt='Dan Abramov'
          />
        </Center>
        <p>Informacion transaccion:</p>
        <ul>
          <li>cantidad: {amount}</li>
          <li>moneda estable: {stable}</li>
        </ul>
        <NavLink to='/home'>
        <Button 
          id="continuar" 
          leftIcon={<BiArrowBack />}
          colorScheme='blue'
          >
            Inicio
        </Button>
        </NavLink>
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
