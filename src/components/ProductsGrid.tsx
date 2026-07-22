import { Grid, Image, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router'
import { products } from '../data/products.js'

export default function ProductsGrid() {

    return (
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {products.map((product) => (
                <RouterLink key={product.id} to={`/products/${product.id}`}>
                    <VStack cursor="pointer" _hover={{ opacity: 0.8 }}>
                        <Image src={product.image} alt={product.name} />
                        <Text>{product.name}</Text>
                    </VStack>
                </RouterLink>
            ))}
        </Grid>
    )
}