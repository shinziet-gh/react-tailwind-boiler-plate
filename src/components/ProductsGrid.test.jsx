import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router';
import ProductsGrid from './ProductsGrid';

describe("ProductsGrid", () => {

    it("renders a list of products", () => {
        render(
            <BrowserRouter>
                <ChakraProvider value={defaultSystem}>
                    <ProductsGrid />
                </ ChakraProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Laptop")).toBeInTheDocument();
        expect(screen.getByText("Phone")).toBeInTheDocument();
        expect(screen.getByText("Chair")).toBeInTheDocument();
        expect(screen.getByText("Window")).toBeInTheDocument();
        expect(screen.getByText("Glass")).toBeInTheDocument();
        expect(screen.getByText("Bag")).toBeInTheDocument();
    });
});