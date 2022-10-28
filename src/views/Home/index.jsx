import { Box, Container,Flex,Button, Center,Text, Stack, StackDivider, useColorModeValue, Icon } from "@chakra-ui/react";
import React,{  useCallback, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';

import './index.css'
import NavLink from "../../layouts/main/nav-link";
import { useWeb3React } from "@web3-react/core";
import { useCreateStonProyect } from '../../hooks/useCreateStonProyect';
import { useSton } from "../../hooks/useSton";


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
      navigate("/login");
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

  const buttonContractOrPay = hasAddressSton
    ? (<NavLink to="/GenerarQr">
        <Button
          colorScheme='blue'
        >
          {addressSton}
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
          <div className="prices__text" >
              <Text className="prices__token">USDT</Text>
              <Text className="prices__balance">000</Text>
          </div>
          <div className="prices__text" >
              <Text className="prices__token">BUSD</Text>
              <Text className="prices__balance">000</Text>
          </div>
          <div className="prices__text" >
              <Text className="prices__token">Acumulado</Text>
              <Text className="prices__balance">{balance}</Text>
          </div>
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
              icon={
                <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Business Planning'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Financial Planning'}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Market Analysis'}
            />
          </Stack>
        </Box>
      </Flex>
      </Container>
    );
}

export { Home }
