import { VStack, HStack, Box, Text } from '@chakra-ui/react'
import Header from './components/Header'
import Counter from './components/Counter'
import Banner from './components/Banner'
import ProductsGrid from './components/ProductsGrid'
import './App.css'
import Footer from './components/Footer'

function Home() {
  return (

    <>
      <Banner />

      <Box marginY="12" textAlign="center">
        <Text fontSize="lg" fontWeight="medium" marginBottom="5" letterSpacing="wide">PRODUCTS</Text>
        <ProductsGrid />
      </Box>
    </>
  )
}

export default Home
