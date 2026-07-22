import React from 'react'
import { HStack, Text, Button } from '@chakra-ui/react'
import { FacebookIcon, XIcon, WhatsappIcon, InstagramIcon } from './SocialMediaIcons.tsx'

export default function SocialMedia() {
    const socialIcons = [FacebookIcon, XIcon, WhatsappIcon, InstagramIcon];

    return (
        <HStack justifyContent="space-between">
            {socialIcons.map((Icon, index) =>
                <Icon key={index} size="md" />
            )}
        </HStack>
    )
}
