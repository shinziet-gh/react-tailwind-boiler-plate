import { useState, useEffect } from 'react'
import ProductDetail from '../components/ProductDetail.tsx'
import { HStack } from '@chakra-ui/react'
import { products } from '../data/products.js'
import { useParams } from 'react-router'
import { ProductType } from '../schema/product.ts'

export default function ProductPage() {

    const { id } = useParams()

    const product = products.find(
        (item) => item.id === Number(id)
    )
    if (!product) {
        return <h1>Product not found</h1>
    }

    const productData: ProductType = {
        prodId: product.id.toString(),
        prodName: product.name,
        prodImageUrl: product.image,
        prodDesc: product.description,
        prodPrice: product.price,
        prodWeights: product.weights,
        prodCategory: product.category
    }

    return (
        <HStack>

            <ProductDetail product={productData} />

        </HStack>
    )
}
