import { Box, Container,Flex,Button, Center,Text,Input } from "@chakra-ui/react";
import React,{Component} from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
 
import App from "../../App";

import './Segundo.css'

function Segundo(){
      
        const navigate = useNavigate();
        
      
    return (
      <Container className="Padre_2">
      <Flex direction={'column'} gap={'15px'} justify={'space-evenly'}>
        <Box className="Ventana_2" ml={2} mr={2} borderRadius={'10px'} >
        <Center>
          <Text>USDT</Text>
          <Input isReadOnly placeholder='Basic usage' />
        </Center>
        <Center>
          <Text>BUSD</Text>
          <Input isReadOnly placeholder='Basic usage' />
        </Center>
        </Box>
        <Box ml={2} mr={2} borderRadius={'10px'} >
          <Center><Button onClick={() => navigate(-1)} colorScheme='blue'>Button</Button></Center>
        </Box>
        <Box className="Ventana_2" ml={2} mr={2} borderRadius={'10px'} >Thisbox3</Box>
      </Flex>
      </Container>
    );
}
export default Segundo;


















/*import './index.css'
import { useCallback, useEffect, useState } from 'react'
// Charkra
import {
  Flex,
  Button,
  Tag,
  TagLabel,
  Badge,
  TagCloseButton,
  LinkBox,LinkOverlay,Box,
  Spinner,VStack, Center, Container,Text,Heading,Image,Input,NumberInputField,NumberInput,NumberInputStepper,Spacer,HStack, Grid,GridItem
} from '@chakra-ui/react'
import { ArrowForwardIcon,ArrowBackIcon,StarIcon} from '@chakra-ui/icons'
import { AiOutlinePlus,AiFillDollarCircle} from 'react-icons/ai';

import { SiBitcoinsv,SiEthereum,SiLitecoin,SiDogecoin } from 'react-icons/si';
//Hooks
import useTruncatedAddress from '../../hooks/useTruncatedAddress';
// Router
import { Link } from 'react-router-dom'
// Web3
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
//Config
import { connector } from '../../config/web3'



/*          <GridItem mt={5} pl='1' pr='1'  area={'segundo'}>
          
          <Grid 
            templateAreas={`"saldo "
                            "boton"
                            "historial"  `}
            backgroundImage="url('https://acortar.link/BXAQXU')"
            backgroundPosition="center"
            borderRadius='15px'
            backgroundRepeat="no-repeat"
            p={3}
            h={'auto'}>

            <Container p={'auto'} area={'saldo'}>
              
              <Text color='white' >Saldo en USDT:</Text>            
              <HStack borderRadius={'15px'} pl={6} bg='green.100' spacing='24px'>
                <SiBitcoinsv size='20px'  />
                <NumberInput borderRadius={'15px'}  p={4} bg='teal.300' isReadOnly  >
                  <NumberInputField />
                    <NumberInputStepper> 
                    </NumberInputStepper> 
                </NumberInput>
              </HStack>

              <Text color='white' >Saldo en BUSD:</Text>  
              <HStack borderRadius={'15px'} pl={6} bg='green.100' spacing='24px'>
                <SiBitcoinsv size='20px'  />
                <NumberInput borderRadius={'15px'}  p={4} bg='teal.300' isReadOnly  >
                  <NumberInputField />
                    <NumberInputStepper> 
                    </NumberInputStepper> 
                </NumberInput>
              </HStack>
            </Container>
          </Grid>
        
          <LinkBox as='button' w='auto' p={3} mt={5} borderRadius='md' borderWidth='md' rounded='md'
            bgGradient='linear(to-r, pink.500, green.300)' color='white'>

              <Heading size='sm' m='2'>
                <LinkOverlay href='https://www.youtube.com/watch?v=QQYeipc_cik'>
                  Recibir Pago
                </LinkOverlay>
              </Heading>
          </LinkBox>


          <Box pt={5} m={'5px'} area={'historial'}>
              <Heading textAlign={'left'} fontSize={'xl'} mb={2}>Historial:</Heading>
              <Text textAlign={'left'}  fontSize='sm'>
                Paystack helps businesses in Africa get paid by anyone, anywhere in the
                world
              </Text>
            </Box>

                </GridItem>

                <GridItem mt={'5px'} pl='2' area={'tercero'}>
                  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' color={'white'} bgColor={'blue.500'}>
                

                <Box p='6'>
                  <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                      Moneda 1
                    </Badge>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                      {property.beds} beds &bull; {property.baths} baths
                    </Box>
                  </Box>
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                  >
                    {property.title}
                  </Box>
                  <Box>
                    {property.formattedPrice} 
                    <Box as='span' color='gray.600' fontSize='sm'>
                      / wk
                    </Box>
                  </Box>

                  
                </Box>
                <Box p='6'>
                  <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                      Moneda 1
                    </Badge>
                    <Box
                      color='gray.500'
                      fontWeight='semibold'
                      letterSpacing='wide'
                      fontSize='xs'
                      textTransform='uppercase'
                      ml='2'
                    >
                      {property.beds} beds &bull; {property.baths} baths
                    </Box>
                  </Box>
                  <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                  >
                    {property.title}
                  </Box>
                  <Box>
                    {property.formattedPrice} 
                    <Box as='span' color='gray.600' fontSize='sm'>
                      / wk
                    </Box>
                  </Box>
                  </Box>
                  </Box>
                                

                
                </GridItem>
        */