import { Stack, Flex, Badge } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import useTruncatedAddress from '../../hooks/useTruncatedAddress'

const Home = () => {
  const { active, account } = useWeb3React()
  const truncatedAddress = useTruncatedAddress(account)

  return (
    <Stack
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
      direction={{ base: 'column-reverse', md: 'row' }}
    >
      {active ? (
        <>
          <Flex mt={2}>
            <Badge ml={2}>
              Address:
              <Badge ml={1} colorScheme="green">
                {truncatedAddress}
              </Badge>
            </Badge>
          </Flex>
        </>
      ) : (
        <Badge mt={2}>Wallet desconectado</Badge>
      )}
    </Stack>
  )
}

export { Home }
