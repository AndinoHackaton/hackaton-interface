import { useToast } from "@chakra-ui/react"
import { useWeb3React } from "@web3-react/core"
import { useCallback, useState } from "react"
import { useSton } from "../useSton"

export const useTransaccionEthToUsdt = ()=>{
    
    const [isTransfering, setIsTransfering] = useState(false)
    const toast = useToast()
  
    const { active, account } = useWeb3React()
    const ston = useSton()
  
    const transfer = useCallback(() => {
      if (ston) {
        setIsTransfering(true)
        ston.methods
          .contribute()
          .send({
            from: account,
            value: 20000000000000000,
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
    }, [ston, toast, account])


    return {active, isTransfering, transfer, account}
}