import { useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'
import StonArtifacts from '../../config/artifacts/Ston'
const { abi, address } = StonArtifacts

export const useSton = () => {
  const { active, library, chainId } = useWeb3React()
  const ston = useMemo(() => {
    if (active) return new library.eth.Contract(abi, address[chainId])
  }, [active, chainId, library?.eth?.Contract])

  return ston
}