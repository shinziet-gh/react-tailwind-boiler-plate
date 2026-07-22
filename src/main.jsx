import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Home.jsx'
import Layout from './layout/Layout.tsx'
import ProductPage from './pages/ProductPage.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={{ ...defaultSystem, initialColorMode: 'dark' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
