import { Button, HStack, Image, Text, VStack, Box, Grid } from '@chakra-ui/react'
import { CartType } from '../schema/product.ts'
import Counter from './Counter.tsx'
import useStateWithSessionStorage from '../hooks/useStateWithSessionStorage.ts'

export default function ProductDetail() {

    const [cart, _] = useStateWithSessionStorage('cart');

    const cartList = cart.cartList;

    return (
        <VStack width="100%" display="flex" alignItems="flex-start">
            {cartList.map((product) => (
                <HStack key={product.prodId}>
                    <Box border="1px solid black" display="flex" width="20%" justifyContent="center" alignItems="center">
                        <Image src={product.prodImageUrl} alt={product.prodName} />
                    </Box>
                    <Text fontSize="md">{product.prodName}</Text>
                    <Text fontSize="sm" fontWeight="medium">${product.prodPrice.toFixed(2)}</Text>
                    <Text fontSize="sm" fontWeight="medium">
                        {product.prodWeight < 1 ? (product.prodWeight * 1000).toString() + "g" : product.prodWeight.toString() + "kg"}
                    </Text>
                    <Text fontSize="sm" fontWeight="medium">{product.quantity}</Text>
                </HStack>
            ))
            }
        </VStack >
    )
}