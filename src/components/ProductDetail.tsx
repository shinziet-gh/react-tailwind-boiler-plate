import { useState } from 'react'
import { Button, HStack, Image, Text, VStack, Box } from '@chakra-ui/react'
import { ProductType } from '../schema/product.ts'
import { CartType } from '../schema/product.ts'
import Counter from './Counter.tsx'
import useStateWithSessionStorage from '../hooks/useStateWithSessionStorage.ts'

export default function ProductDetail({ product }: { product: ProductType }) {

    const [selectedWeight, setSelectedWeight] = useState(product.prodWeights[0]);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const [cart, setCart, _] = useStateWithSessionStorage('cart');

    // Updating state from session storage
    const updateCart = () => {

        // Check if the product already exists in the cart using set
        const itemIndex = cart.cartList.findIndex((item) => item.prodId === product.prodId && item.prodWeight === selectedWeight);

        if (itemIndex !== -1) {
            cart.cartList[itemIndex].quantity += selectedQuantity;

            const newCart: CartType = {
                cartList: [...cart.cartList]
            };

            setCart(newCart);
            console.log(cart);
            return;
        }

        // If the product doesn't exist, add it to the cart 

        const newCart: CartType = {
            cartList: [
                ...cart.cartList,
                {
                    prodId: product.prodId,
                    prodName: product.prodName,
                    prodPrice: product.prodPrice,
                    prodWeight: selectedWeight,
                    quantity: selectedQuantity,
                    prodImageUrl: product.prodImageUrl
                }
            ]
        };

        setCart(newCart);
        console.log(cart);
    }

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
                                <Button
                                    width="90px"
                                    height="70px"
                                    key={index}
                                    backgroundColor={(weight == selectedWeight) ? "#e0e0e0" : "white"}
                                    color="black"
                                    border={(weight == selectedWeight) ? "1px solid black" : "1px solid #ccc"}
                                    onClick={() => setSelectedWeight(weight)}
                                    _hover={{ backgroundColor: (weight == selectedWeight) ? "#e0e0e0" : "#f0f0f0" }}
                                    _active={{ backgroundColor: "#e0e0e0" }}
                                >
                                    {weight < 1 ? (weight * 1000).toString() + "g" : weight.toString() + "kg"}
                                </Button>
                            ))}
                        </HStack>

                        <HStack display="flex" justifyContent="space-between">
                            <Counter count={selectedQuantity} updateCount={setSelectedQuantity} />
                            <Button onClick={() => updateCart()}>Add to Cart</Button>
                        </HStack>
                    </Box>
                </VStack>
            </VStack>
        </HStack >
    )
}