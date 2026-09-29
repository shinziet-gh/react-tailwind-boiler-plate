import React from 'react';
import '@testing-library/jest-dom/vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import Counter from './Counter';

describe("Counter", () => {
    // Use mock function to simulate the updateCount prop
    const mockUpdateCount = vi.fn();

    afterEach(() => {
        cleanup();
    });

    it("renders a default count", () => {
        render(
            <ChakraProvider value={defaultSystem}>
                <Counter updateCount={mockUpdateCount} />
            </ ChakraProvider>
        );
        expect(screen.getByText("0")).toBeInTheDocument();
    });

    it("increments the count when the button is clicked", async () => {
        render(
            <ChakraProvider value={defaultSystem}>
                <Counter updateCount={mockUpdateCount} />
            </ ChakraProvider>
        );

        const incrementButton = screen.getByTestId("increment-button");
        const counterValue = screen.getByTestId("counter-value");

        await userEvent.click(incrementButton);

        expect(counterValue.textContent).toContain("1");
    });

    it("decrements the count when the button is clicked", async () => {
        render(
            <ChakraProvider value={defaultSystem}>
                <Counter updateCount={mockUpdateCount} />
            </ ChakraProvider>
        );

        const decrementButton = screen.getByTestId("decrement-button");
        const counterValue = screen.getByTestId("counter-value");

        await userEvent.click(decrementButton);

        expect(counterValue.textContent).toContain("0");
    });
});