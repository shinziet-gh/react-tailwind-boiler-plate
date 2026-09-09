import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CartType } from "../schema/product.ts";

type ReturnType = [CartType, Dispatch<SetStateAction<CartType>>, number];

export default function useStateWithSessionStorage(
    storageKey: string, // Needs to be unique
): ReturnType {
    const [cart, setCart] = useState<CartType>(JSON.parse(sessionStorage.getItem(storageKey) ?? '{"cartQuantity": 0, "cartList": []}'));
    const cartQuantity = cart.cartList.length ?? 0;

    useEffect(() => {
        sessionStorage.setItem(storageKey, JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated")); // Notify other tabs about the change

        console.log("Cart updated in useStateWithSessionStorage:", cart.cartList.length);

    }, [cart, storageKey]);

    return [cart, setCart, cartQuantity];
}