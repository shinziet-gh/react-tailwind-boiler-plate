import { useState } from 'react'
import { HStack, Text, Button } from '@chakra-ui/react'

export default function Counter({ count, updateCount }: Readonly<{ count: number; updateCount: (count: number) => void }>) {
    const [quantity, setQuantity] = useState<number>(count ?? 0);

    const handleUpdateCount = (newCount: number) => {
        if (newCount >= 0) {
            setQuantity(newCount);
            updateCount(newCount);
        }
    };

    return (
        <HStack>
            <Button data-testid="decrement-button" onClick={() => handleUpdateCount(quantity - 1)}>
                -
            </Button>
            <Text data-testid="counter-value"> {quantity} </Text>
            <Button data-testid="increment-button" onClick={() => handleUpdateCount(quantity + 1)}>
                +
            </Button>
        </HStack>
    )
}