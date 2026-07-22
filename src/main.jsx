import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import ProductPage from './pages/ProductPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={{ ...defaultSystem, initialColorMode: 'dark' }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
)
