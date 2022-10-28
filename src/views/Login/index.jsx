import React,{ useEffect } from "react";
import WalletData from "../../components/wallet-data";

import './Primero.css'

import {  Center, Container, Spinner,SimpleGrid} from '@chakra-ui/react'
import Carousel from "../../components/carrusel";
import { useWeb3React } from "@web3-react/core";
import { useNavigate } from "react-router-dom";


export const Login=()=>{
  let navigate = useNavigate();
    // web3-react
  const { active } = useWeb3React()
  useEffect(()=>{
    if(active){
      navigate("/home");
    }
  },[active, navigate])
    return (
        <SimpleGrid columns={1} spacingX='40px' spacingY='20px'>
          <Carousel />
          
          <Center><WalletData/></Center>

        </SimpleGrid>
    );
}