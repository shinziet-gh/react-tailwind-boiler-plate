import { Box, HStack, Text } from '@chakra-ui/react'
import Navbar from './NavBar.tsx'
import { useState } from 'react'

export default function Header() {
    //Get window dimensions
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <Box width="100%">
            <HStack fontSize="md" gap="32" backgroundColor='white' marginY="5">
                <Text fontWeight="bold"> MyShop</Text>
                <Navbar isMenuOpen={isMenuOpen} />
            </HStack>
        </Box>
    )
}