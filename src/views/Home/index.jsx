import { Box, Container,Flex,Button, Center,Text, Stack, StackDivider, useColorModeValue, Icon, Image } from "@chakra-ui/react";
import React,{  useCallback, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';

import './index.css'
import NavLink from "../../layouts/main/nav-link";
import { useWeb3React } from "@web3-react/core";
import { useCreateStonProyect } from '../../hooks/useCreateStonProyect';
import { useSton } from "../../hooks/useSton";
import useTruncatedAddress from "../../hooks/useTruncatedAddress";

import binancePng from "../../assets/img/binance.png"
import etherPng from "../../assets/img/tether.png"
import bitcoinPng from "../../assets/img/bitcoin.png"
import dogePng from "../../assets/img/doge.png"
import bnbPng from "../../assets/img/bnb.png"
import ethereumPng from "../../assets/img/ethereum.png"

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
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


const Home = () => {
  let navigate = useNavigate();
    // web3-react
  const { active } = useWeb3React()
  useEffect(()=>{
    if(!active){
      navigate("/");
    }
  },[active, navigate])


  const { isCreating, createSton , addressSton, hasAddressSton} = useCreateStonProyect()

  const [balance, setBalance] = useState(0)

  const {ston, setStonAddress} = useSton()

  const getBalance = useCallback(async () => {
      if (ston) {
        const currentBalance = await ston.methods.currentBalance().call()
        setBalance(currentBalance)
      }
    }, [ston])

  useEffect(()=>{
    setStonAddress(addressSton)
  },[ addressSton, setStonAddress ])

  useEffect(()=>{
    getBalance();
  }, [getBalance])

  const truncatedAddress = useTruncatedAddress(addressSton)

  const buttonContractOrPay = hasAddressSton
    ? (<NavLink to="/GenerarQr">
        <Button
          colorScheme='blue'
        >
          {truncatedAddress}
        </Button>
      </NavLink>)
    : (<Button
        colorScheme='blue'
        onClick={createSton}
        disabled={isCreating}
      >
        crea tu contrato
      </Button>)

    return (
      <Container className="home__container">
      <Flex direction={'column'} gap={'15px'} justify={'space-evenly'}>
        <Box className="prices__container" ml={2} mr={2} borderRadius={'10px'} >
          <Feature
              icon={<Image src={binancePng}/>}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={`BUSD - 00`}
            />
            <Feature
              icon={<Image src={etherPng}/>}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={`Tether - 00`}
            />
            <Feature
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={`Acumulado - ${balance}`}
            />
        </Box>
        <Box ml={2} mr={2} borderRadius={'10px'} >
          <Center>
            {buttonContractOrPay}
          </Center>
        </Box>
        <Box className="Ventana_2" ml={2} mr={2} borderRadius={'10px'} >
        <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={<Image src={bitcoinPng}/>}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'BTC'}
            />
            <Feature
              icon={<Image src={ethereumPng}/>}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'ETH'}
            />
            <Feature
              icon={<Image src={bnbPng}/>}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'BNB'}
            />
          </Stack>
        </Box>
      </Flex>
      </Container>
    );
}

export { Home }
