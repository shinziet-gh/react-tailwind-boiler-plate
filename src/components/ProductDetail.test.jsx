import React from 'react';
import '@testing-library/jest-dom/vitest';
import { act, render, screen, cleanup, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import ProductDetail from './ProductDetail';
import { BrowserRouter } from 'react-router';

describe("ProductDetail", () => {

    let product = {
        prodId: 1,
        prodName: "Product 1",
        prodDesc: "Product 1 description",
        prodPrice: 8,
        quantity: 1,
        prodWeights: ["500g", "1kg"],
        prodImageUrl: "product1.jpg"
    };

    afterEach(() => {
        cleanup();
    });

    it("renders product details", () => {
        render(
            <BrowserRouter>
                <ChakraProvider value={defaultSystem}>
                    <ProductDetail product={product} />
                </ ChakraProvider>
            </BrowserRouter>
        );

        expect(screen.getByTestId("product-name")).toHaveTextContent("Product 1");
        expect(screen.getByTestId("product-price")).toHaveTextContent("8.00");
        expect(screen.getByTestId("product-description")).toHaveTextContent("Product 1 description");
        expect(screen.getByTestId("weight-button-500g")).toBeInTheDocument();
        expect(screen.getByTestId("weight-button-1kg")).toBeInTheDocument();
        expect(screen.getByAltText("Product 1")).toHaveAttribute("src", "product1.jpg");
    });

    it("updates the cart when the 'Add to Cart' button is clicked", async () => {
        render(
            <BrowserRouter>
                <ChakraProvider value={defaultSystem}>
                    <ProductDetail product={product} />
                </ ChakraProvider>
            </BrowserRouter>
        );

        const addToCartButton = screen.getByTestId("add-to-cart-button");

        await userEvent.click(addToCartButton);

        // Access the cart from sessionStorage and verify its contents
        let cart = sessionStorage.getItem("cart");

        expect(cart).not.toBeNull();
        cart = JSON.parse(cart);
        expect(cart.cartList).toHaveLength(1);
        expect(cart.cartList[0].prodName).toBe("Product 1");
        expect(cart.cartList[0].quantity).toBe(1);

        // Simulate clicking the "Add to Cart" button again
        await userEvent.click(addToCartButton);

        // Access the cart from sessionStorage and verify its contents again
        cart = sessionStorage.getItem("cart");
        expect(cart).not.toBeNull();
        cart = JSON.parse(cart);

        // Assert that the cart quantity has been updated to 2
        expect(cart.cartList[0].quantity).toBe(2);
    });
});