import { VStack, HStack, Box, Text } from '@chakra-ui/react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

function App() {
    return (
        <VStack w="100%" minH="100vh" align="center">
            <VStack w="80%" flex="1">
                <Header />

                <Box flex="1" width="100%" minHeight="100%" alignContent="center" justifyContent="center">
                    <Outlet />
                </Box>
            </VStack>

            <HStack width="100vw" bg="yellow" justifyContent="center">
                <Footer />
            </HStack>

        </VStack>
    )
}

export default App
