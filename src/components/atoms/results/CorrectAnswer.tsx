import { Button } from '@chakra-ui/react';
import { memo, VFC } from 'react';

export const CorrectAnswer: VFC = memo(() => {
    return (
        <>
            <Button colorScheme="green">正解！！</Button>
        </>
    )
})