import { Box, Button, Center, Container, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import WalletData from '../../components/wallet-data';
import { useTransaccionEthToUsdt } from '../../hooks/useTransaccionEthToUsdt'

export const Pay = () => {
    const [searchParams] = useSearchParams();
    const [amount, setAmount] = useState(5)
    const [address, setAddress] = useState("0x00000..00")
    const {isTransfering, transfer, setStonAddress, setAmountSton, amountEthSton} = useTransaccionEthToUsdt();


    useEffect(()=>{
        setAmount(searchParams.get("amount"))
        setAddress(searchParams.get("address"))
        setStonAddress(searchParams.get("address"))
        setAmountSton(searchParams.get("amount"))
      }, [searchParams, setStonAddress, setAmountSton ])


    return (
        <Container className="home__container">
      <Flex direction={'column'} gap={'15px'} justify={'space-evenly'}>
        <Box  ml={2} mr={2} borderRadius={'10px'} >
              <Text className="prices__token">Pagar a través de STon </Text>
              <Text className="prices__token">TBNB: {(amountEthSton/1000000/1000000/1000000).toFixed(6)}</Text>
              <Text className="prices__token">BUSD: {amount}</Text>
        </Box>
        <Button disabled={isTransfering} colorScheme='blue' onClick={transfer}>STonear</Button>
      </Flex>
      <Center><WalletData/></Center>
      </Container>
    );
};
