import { VStack, Text, Button, HStack, Box } from '@chakra-ui/react'
import SocialMedia from './SocialMedia.tsx'

export default function Footer() {
    return (
        <HStack width="80%" height="250px" display="flex">
            <VStack flex="2" justifyContent="flex-start" alignItems="flex-start" width="100%">
                <Text fontWeight="bold">My Shop</Text>
                <Box marginY={1}>
                    <SocialMedia />
                </Box>
            </VStack>

            <VStack flex="1" justifyContent="flex-start" alignItems="flex-start" width="100%">
                <Text fontWeight="bold">Contact</Text>
                <Text>555-555-5555</Text>
            </VStack>

            <VStack flex="1" justifyContent="flex-start" alignItems="flex-start" width="100%">
                <Text fontWeight="bold">Visit Us</Text>
                <Text>1234 Street, New York, NY, 10002</Text>
            </VStack>

        </HStack>
    )
}