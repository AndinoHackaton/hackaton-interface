import { useToast } from "@chakra-ui/react"
import { useWeb3React } from "@web3-react/core"
import { useCallback, useState } from "react"
import { useCreatorStons } from "../useCreatorStons"

export const useCreateStonProyect = ()=>{

    const [isCreating, setIsCreating] = useState(false)
    const toast = useToast()

    const { active, account, library } = useWeb3React()
    const creatorStons = useCreatorStons()

    const createSton = useCallback((title) => {
      if (creatorStons) {
        setIsCreating(true)
        creatorStons.methods
          .startProject(title,library.utils.toWei('100000000', 'Gwei'))
          .send({
            from: account,
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
            setIsCreating(false)
            toast({
              title: 'Transacción confirmada',
              description: 'Nunca pares de stONear.',
              status: 'success',
            })
          })
          .on('error', (error) => {
            setIsCreating(false)
            console.error(error)
            toast({
              title: 'Transacción fallida',
              description: error.message,
              status: 'error',
            })
          })
      }
    }, [creatorStons, toast, account, library?.utils])


    return {active, isCreating, createSton, account}
}