import { Image } from '@chakra-ui/react'
import blueBanner from '../assets/blue.jpg'

export default function Banner() {
    return (
        <Image src={blueBanner} alt="banner" width="100%" height="300px" />
    )
}