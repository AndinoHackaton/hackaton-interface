import { useMemo, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import StonArtifacts from '../../config/artifacts/Ston'
const { abi } = StonArtifacts

export const useSton = () => {
  const [stonAddress, setStonAddress]  = useState("")
  const { active, library } = useWeb3React()
  const ston = useMemo(() => {
    console.log("stonAddress",stonAddress)

    if (active) return new library.eth.Contract(abi, stonAddress)
  }, [active, library?.eth?.Contract, stonAddress])

  return {ston, setStonAddress}
}