import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import Counter from './Counter';


describe("Counter", () => {
    it("renders a default count", () => {
        render(
            <ChakraProvider value={defaultSystem}>
                <Counter />
            </ ChakraProvider>
        );
        expect(screen.getByText("1")).toBeInTheDocument();
    });
});