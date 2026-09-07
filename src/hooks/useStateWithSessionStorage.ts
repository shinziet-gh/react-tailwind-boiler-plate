import { Dispatch, SetStateAction, useEffect, useState } from "react";

type ReturnType = [number, Dispatch<SetStateAction<number>>];

export default function useStateWithSessionStorage(
    storageKey: string, // Needs to be unique
): ReturnType {
    const [cartQuantity, setCartQuantity] = useState<number>(Number.parseInt(sessionStorage.getItem(storageKey) ?? "0"));

    useEffect(() => {
        sessionStorage.setItem(storageKey, cartQuantity.toString());
        window.dispatchEvent(new Event("cartQuantityUpdated")); // Notify other tabs about the change
    }, [cartQuantity, storageKey]);

    return [cartQuantity, setCartQuantity];
}