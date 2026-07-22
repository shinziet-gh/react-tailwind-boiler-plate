import { useState } from 'react'
import { Button, HStack, Image, Text, VStack, Box } from '@chakra-ui/react'
import { ProductType } from '../schema/product.ts'
import Counter from './Counter.tsx'

export default function ProductDetail({ product }: { product: ProductType }) {

    const [selectedWeight, setSelectedWeight] = useState(product.prodWeights[0])
    const [quantity, setQuantity] = useState(1)

    return (
        <HStack width="100%" display="flex" alignItems="flex-start">

            <Box flex="1" backgroundColor="#f0f0f0" justifyContent="center" alignItems="center" display="flex">
                <Image src={product.prodImageUrl} alt={product.prodName} width="60%" height="50%" p="12" />
            </Box>

            <VStack flex="2" display="flex" key={product.prodName} justifyContent="center" alignItems="center">

                <VStack flex="1" display="flex" alignItems="flex-start">
                    <Text fontSize="2xl" fontWeight="bold">
                        {product.prodName}
                    </Text>
                    <Text fontSize="xl" fontWeight="bold">
                        ${product.prodPrice.toFixed(2)}
                    </Text>
                    <Text>{product.prodDesc}</Text>

                    <Text fontSize="sm" marginTop="8">Weight</Text>
                    <Box display="flex" flexDirection="column" gap="4">
                        <HStack>
                            {product.prodWeights.map((weight, index) => (
                                <Button width="90px" height="70px" key={index} backgroundColor="white" color="black" border="1px solid #ccc">
                                    {weight < 1 ? (weight * 1000).toString() + "g" : weight.toString() + "kg"}
                                </Button>
                            ))}
                        </HStack>

                        <HStack display="flex" justifyContent="space-between">
                            <Counter />
                            <Button>Add to Cart</Button>
                        </HStack>
                    </Box>
                </VStack>
            </VStack>
        </HStack >
    )
}