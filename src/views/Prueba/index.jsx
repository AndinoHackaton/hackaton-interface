import { Button } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useSton } from '../../hooks/useSton';
import { useCreatorStons } from '../../hooks/useCreatorStons';
import { useTransaccionEthToUsdt } from '../../hooks/useTransaccionEthToUsdt';
import { useCreateStonProyect } from '../../hooks/useCreateStonProyect';

export const Prueba = () => {
    
    const [adrress, setAddress] = useState("0x")

    const {active,
        isTransfering,
        transfer,
        setStonAddress,
        balance
    } = useTransaccionEthToUsdt()
    
    const {
        isCreating,
        createSton,
        account
    } = useCreateStonProyect()


    const creatorStons = useCreatorStons()
    const getAddress = useCallback(async () => {
        if (creatorStons) {
          const addressCurrent = await creatorStons.methods.getProyectByAddress(account).call()
          console.log("addressCurrent", addressCurrent)
          setAddress(addressCurrent)
          setStonAddress(addressCurrent)
        }
      }, [creatorStons, account, setStonAddress ])

    useEffect(()=>{
        console.log("getAddress")
        getAddress();
    }, [creatorStons, getAddress])

    return (
        <div>
            <p>Address: {adrress}</p>
            {active 
                ? (<Button onClick={createSton} disabled={isCreating} >Create Ston</Button>)
                : (<p>no hay</p>)
            }
        <hr/>
            <p>balance: {balance}</p>
            {active 
                ? (<Button onClick={transfer} disabled={isTransfering} >Convertir</Button>)
                : (<p>no hay</p>)
            }
        </div>
    );
};