import { useState } from 'react'
import { HStack, Text, Button } from '@chakra-ui/react'

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <HStack>
            <Button onClick={() => { if (count > 0) setCount(count - 1) }}>
                -
            </Button>
            <Text> {count} </Text>
            <Button onClick={() => setCount(count + 1)}>
                +
            </Button>
        </HStack>
    )
}