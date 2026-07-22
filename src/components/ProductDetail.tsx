import { useState } from 'react'
import { Button, Grid, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { ProductType } from '../schema/product.ts'

export default function ProductDetail({ product }: { product: ProductType }) {

    return (
        <HStack>
            <Image src={product.prodImageUrl} alt={product.prodName} />
            <VStack key={product.prodName}>
                <Text>{product.prodName}</Text>
                <Text>{product.prodDesc}</Text>
                <Text>{product.prodPrice}</Text>

                <HStack>
                    {product.prodWeights.map((weight, index) => (
                        <Button key={index}>{weight}</Button>
                    ))}
                </HStack>

            </VStack>
        </HStack>
    )
}