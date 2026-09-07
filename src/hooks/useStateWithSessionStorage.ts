import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CartType } from "../schema/product.ts";

type ReturnType = [CartType, Dispatch<SetStateAction<CartType>>];

export default function useStateWithSessionStorage(
    storageKey: string, // Needs to be unique
): ReturnType {
    const [cartList, setCartList] = useState<CartType>(JSON.parse(sessionStorage.getItem(storageKey) ?? '{"cartQuantity": 0, "cartList": []}'));

    useEffect(() => {
        sessionStorage.setItem(storageKey, JSON.stringify(cartList));
        window.dispatchEvent(new Event("cartUpdated")); // Notify other tabs about the change
    }, [cartList, storageKey]);

    return [cartList, setCartList];
}