import React from 'react';
import { createIcon } from '@chakra-ui/react';
import { siFacebook, siX, siWhatsapp, siInstagram } from 'simple-icons';

export const FacebookIcon = createIcon({
    viewBox: "0 0 24 24",
    path: (
        <path d={siFacebook.path} fill="red" />
    ),
});

export const XIcon = createIcon({
    viewBox: "0 0 24 24",
    path: (
        <path d={siX.path} fill="red" />
    ),
});

export const WhatsappIcon = createIcon({
    viewBox: "0 0 24 24",
    path: (
        <path d={siWhatsapp.path} fill="red" />
    ),
});

export const InstagramIcon = createIcon({
    viewBox: "0 0 24 24",
    path: (
        <path d={siInstagram.path} fill="red" />
    ),
});