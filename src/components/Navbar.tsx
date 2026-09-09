import React, { useEffect, useState } from 'react'
import { HStack, VStack, Box, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router'

export default function NavBar() {

    return (
        <HStack>
            <RouterLink to={`/`}>
                <Text _hover={{ fontWeight: "semibold" }}>Home</Text>
            </RouterLink>

            <RouterLink to={`/#products`}>
                <Text _hover={{ fontWeight: "semibold" }}>Products</Text>
            </RouterLink>

            <RouterLink to={`/#contact`}>
                <Text _hover={{ fontWeight: "semibold" }}>Contact</Text>
            </RouterLink>
        </HStack>
    )
}