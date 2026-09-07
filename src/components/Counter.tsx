import { useState } from 'react'
import { HStack, Text, Button } from '@chakra-ui/react'

export default function Counter({ count, updateCount }: Readonly<{ count: number; updateCount: (count: number) => void }>) {
    const [quantity, setQuantity] = useState<number>(count ?? 1);

    const handleUpdateCount = (newCount: number) => {
        if (newCount >= 0) {
            setQuantity(newCount);
            updateCount(newCount);
        }
    };

    return (
        <HStack>
            <Button onClick={() => handleUpdateCount(quantity - 1)}>
                -
            </Button>
            <Text> {quantity} </Text>
            <Button onClick={() => handleUpdateCount(quantity + 1)}>
                +
            </Button>
        </HStack>
    )
}