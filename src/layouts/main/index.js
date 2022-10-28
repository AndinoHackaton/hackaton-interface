import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NavLink from "./nav-link";
import WalletData from "../../components/wallet-data";


import Logo from "../../assets/img/logo.png"
import "./index.css"
import { useWeb3React } from "@web3-react/core";

// const Links = [
//   {
//     name: "Login",
//     to: "/login",
//   },
//   {
//     name: "Home",
//     to: "/home",
//   },
//   {
//     name: "Crear qr",
//     to: "/pay",
//   },
// ];

const MainLayout = ({ children }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { deactivate } =
    useWeb3React()
    const disconnect = () => {
      deactivate()
      localStorage.removeItem('previouslyConnected')
    }

  return (
    <Flex minH="100vh" direction="column" className="layout__container">
      <Button  onClick={disconnect}>
        <Image src={Logo} />
      </Button>
      {/* <Box
        mx="auto"
        maxW={"7xl"}
        width="100%"
        bg={useColorModeValue("white", "gray.800")}
        px={4}
      >
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Flex alignItems="center">
              <Heading size="md" color="purple" mt={0.2} ml={1}>
                STon
              </Heading>
            </Flex>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ name, to }) => (
                <NavLink key={name} to={to}>
                  {name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <WalletData />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map(({ name, to }) => (
                <NavLink key={name} to={to}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box> */}
      
      <Box mx="auto" flex={1} p={4} maxW={"7xl"} width="100%">
        {children}
      </Box>
    </Flex>
  );
};

export default MainLayout;
