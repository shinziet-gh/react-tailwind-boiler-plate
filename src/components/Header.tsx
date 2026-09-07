import { Box, HStack, Text, IconButton } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router'
import { FiShoppingBag } from 'react-icons/fi'
import { useState } from 'react'
import NavBar from './NavBar';
import useStateWithSessionStorage from '../hooks/useStateWithSessionStorage';

export default function Header() {
    //Get window dimensions
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const [quantity, setQuantity] = useStateWithSessionStorage('cartQuantity')

    return (
        <Box width="100%">
            <HStack display="flex" fontSize="md" gap="32" marginY="5">
                <Text fontWeight="bold"> MyShop</Text>
                <Box flex="1">
                    <NavBar /></Box>
                <Box flex="1"></Box>
                <Box display="flex" justifyContent="flex-end">
                    <IconButton aria-label="Cart" padding="2">
                        <FiShoppingBag />
                        <Text fontWeight="bold">({quantity})</Text>
                    </IconButton>
                </Box>

            </HStack>
        </Box>
    )
}