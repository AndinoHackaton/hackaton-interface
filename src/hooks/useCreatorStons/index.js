import { useMemo } from 'react'
import { useWeb3React } from '@web3-react/core'
import CreatorStonsArtifacts from '../../config/artifacts/CreadorStons'
const { abi, address } = CreatorStonsArtifacts

export const useCreatorStons = () => {
  const { active, library, chainId } = useWeb3React()
  const creatorStons = useMemo(() => {
    if (active) return new library.eth.Contract(abi, address[chainId])
  }, [active, chainId, library?.eth?.Contract])

  return creatorStons
}