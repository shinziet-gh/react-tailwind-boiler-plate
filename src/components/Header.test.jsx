import React from 'react';
import '@testing-library/jest-dom/vitest';
import { act, render, screen, cleanup, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import Header from './Header';
import { BrowserRouter } from 'react-router';

describe("Header", () => {

    /*     beforeEach(() => {
            // Mock the fetch function to return a resolved promise with a JSON response
            global.fetch = vi.fn();
        });
     */
    afterEach(() => {
        cleanup();
    });

    it("renders initial quantity count", () => {
        render(
            <BrowserRouter>
                <ChakraProvider value={defaultSystem}>
                    <Header />
                </ ChakraProvider>
            </BrowserRouter>
        );
        const cartQuantity = screen.getByTestId("cart-quantity");
        expect(cartQuantity.textContent).toBe("0");
    });

    it("triggers cart updated event", async () => {
        /*         global.fetch.mockResolvedValueOnce({
                    json: async () => ([{ prodId: 1, quantity: 5 }, { prodId: 2, quantity: 3 }]),
                });
         */

        sessionStorage.setItem(
            "cart",
            JSON.stringify({
                cartList: [
                    { prodId: 1, quantity: 5 },
                    { prodId: 2, quantity: 3 },
                ],
            })
        );

        // Render the Header component and useEffect to listen for the custom event
        render(
            <BrowserRouter>
                <ChakraProvider value={defaultSystem}>
                    <Header />
                </ ChakraProvider>
            </BrowserRouter>
        );

        // Trigger the custom event to simulate the cart update
        act(() => {
            const event = new Event("cartUpdated");
            window.dispatchEvent(event);
        });

        await waitFor(() => {
            const cartQuantity = screen.getByTestId("cart-quantity");
            expect(cartQuantity.textContent).toBe("8");
        });

    });

});