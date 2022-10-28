import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTransaccionEthToUsdt } from '../../hooks/useTransaccionEthToUsdt'

export const Pay = () => {
    const [searchParams] = useSearchParams();
    const [amount, setAmount] = useState(5)
    const [address, setAddress] = useState("0x00000..00")
    const {isTransfering, transfer, setStonAddress} = useTransaccionEthToUsdt();


    useEffect(()=>{
        setAmount(searchParams.get("amount"))
        setAddress(searchParams.get("address"))
        setStonAddress(address)
    }, [searchParams, setStonAddress, address ])


    return (
        <Container className="home__container">
      <Flex direction={'column'} gap={'15px'} justify={'space-evenly'}>
        <Box  ml={2} mr={2} borderRadius={'10px'} >
              <Text className="prices__token">Pagar a través de STon </Text>
              <Text className="prices__token">Eth:{amount}</Text>
        </Box>
        <Button disabled={isTransfering} onClick={transfer}>STonear</Button>
      </Flex>
      </Container>
    );
};
