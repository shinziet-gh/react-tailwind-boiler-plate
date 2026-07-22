import { Box, Grid, Image, Text, VStack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router'
import { products } from '../data/products.js'

export default function ProductsGrid() {

    return (
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {products.map((product) => (
                <RouterLink key={product.id} to={`/product/${product.id}`}>
                    <VStack cursor="pointer" _hover={{ opacity: 0.8 }}>
                        <Box border="1px solid black" width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                            <Image src={product.image} alt={product.name} width="50%" height="50%" />
                        </Box>
                        <Box display="flex" flexDirection="column" gap={3} padding="10px">
                            <Text fontSize="md">{product.name}</Text>
                            <Text fontSize="small">{product.description}</Text>
                            <Text fontSize="sm" fontWeight="medium">${product.price.toFixed(2)}</Text>
                        </Box>
                    </VStack>
                </RouterLink>
            ))
            }
        </Grid >
    )
}