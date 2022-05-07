import { Button } from '@chakra-ui/react';
import { memo, VFC } from 'react';

export const CorrectAnswer: VFC = memo(() => {
    return (
        <>
            <Button colorScheme="red">正解！！</Button>
        </>
    )
})