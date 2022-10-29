import { useToast } from "@chakra-ui/react"
import { useWeb3React } from "@web3-react/core"
import { useCallback, useEffect, useState } from "react"
import { useSton } from "../useSton"

export const useTransaccionEthToUsdt = ()=>{
    
    const [balance, setBalance] = useState(0)
    const [amountSton, setAmountSton] = useState(0)

    const [isTransfering, setIsTransfering] = useState(false)
    const toast = useToast()
  
    const { active, account } = useWeb3React()
    const {ston, setStonAddress} = useSton()

    const transfer = useCallback(async () => {
      if (ston) {
        const data = await fetch('http://example.com/movies.json');
        const priceEth = data.filter(({id})=> id==="ethereum")[0].current_price
        setIsTransfering(true)
        ston.methods
          .contribute()
          .send({
            from: account,
            value: (amountSton/priceEth)*1000000*1000000*1000000,
            gasLimit: 2100000
          })
          .on('transactionHash', (txHash) => {
            toast({
              title: 'Transacción enviada',
              description: txHash,
              status: 'info',
            })
          })
          .on('receipt', () => {
            setIsTransfering(false)
            toast({
              title: 'Transacción confirmada',
              description: 'Nunca pares de aprender.',
              status: 'success',
            })
          })
          .on('error', (error) => {
            setIsTransfering(false)
            console.error(error)
            toast({
              title: 'Transacción fallida',
              description: error.message,
              status: 'error',
            })
          })
      }
    }, [ston, toast, account, amountSton])
    
    const getBalance = useCallback(async () => {
      if (ston) {
        const currentBalance = await ston.methods.currentBalance().call()
        setBalance(currentBalance)
      }
    }, [ston])

    useEffect(()=>{
        getBalance();
    }, [ston, getBalance])


    return {active, isTransfering, transfer, account, setStonAddress, balance, setAmountSton}
}