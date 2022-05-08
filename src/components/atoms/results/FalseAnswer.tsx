import { Button } from '@chakra-ui/react';
import { memo, VFC } from 'react';

export const FalseAnswer: VFC = memo(() => {
    return (
        <>
            <Button colorScheme="red">不正解！！</Button>
        </>
    )
})