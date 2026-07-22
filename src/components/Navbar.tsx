import React, { useEffect, useState } from 'react'
import { HStack, VStack, Box, Text } from '@chakra-ui/react'

export default function NavBar({ isMenuOpen }: { isMenuOpen: boolean }) {

    //Navigation tabs for different news categories
    const tabs = [
        { key: 'home', label: 'Home' },
        { key: 'products', label: 'Products' },
        { key: 'contact', label: 'Contact' },];

    return (
        <HStack width="25%" justifyContent="space-evenly">
            {tabs.map((tab) => {
                return (
                    <Text key={tab.key}
                    >
                        {tab.label}
                    </Text>
                );
            })}
        </HStack>
    )
}