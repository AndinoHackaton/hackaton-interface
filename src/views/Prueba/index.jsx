import React, { useCallback, useEffect, useState } from 'react';

import { Button } from '@chakra-ui/react';
import { useSton } from '../../hooks/useSton';
import { useTransaccionEthToUsdt } from '../../hooks/useTransaccionEthToUsdt';

export const Prueba = () => {
    
    const [balance, setBalance] = useState(0)

    const {active, isTransfering, transfer} = useTransaccionEthToUsdt()
    
    const ston = useSton()
    const getBalance = useCallback(async () => {
        if (ston) {
          const currentBalance = await ston.methods.currentBalance().call()
          setBalance(currentBalance)
        }
      }, [ston])

    useEffect(()=>{
        getBalance();
    }, [ston, getBalance])
    return (
        <div>
            <p>balance: {balance}</p>
            {active 
                ? (<Button onClick={transfer} disabled={isTransfering} >Convertir</Button>)
                : (<p>no hay</p>)
            }
        </div>
    );
};