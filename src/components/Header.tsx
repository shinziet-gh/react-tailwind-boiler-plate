import { Box, HStack, Text, IconButton } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router";
import { FiShoppingBag } from "react-icons/fi";
import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import useStateWithSessionStorage from "../hooks/useStateWithSessionStorage";

export default function Header() {
    const [quantity, setQuantity] = useState<number>(0);

    useEffect(() => {
        const onCartUpdated = () => {
            const [cart, _] = useStateWithSessionStorage('cart');
            const nextQuantity = cart.cartList.length;

            setQuantity(nextQuantity);
        };

        window.addEventListener("cartUpdated", onCartUpdated);
        return () => window.removeEventListener("cartUpdated", onCartUpdated);
    }, []);

    return (
        <Box width="100%">
            <HStack display="flex" fontSize="md" gap="32" marginY="5">
                <Text fontWeight="bold">MyShop</Text>
                <Box flex="1">
                    <NavBar /></Box>

                <RouterLink to="/checkout">
                    <Box display="flex" justifyContent="flex-end">
                        <IconButton aria-label="Cart" padding="2">
                            <FiShoppingBag />
                            <Text fontWeight="bold">{quantity ?? 0}</Text>
                        </IconButton>
                    </Box>
                </RouterLink>
            </HStack>
        </Box>
    );
}