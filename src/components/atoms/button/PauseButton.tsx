
import { Button } from '@chakra-ui/react';
import { memo, VFC } from 'react';

export const PauseButton: VFC = memo(() => {
    return (
        <>
            <Button colorScheme="red">Pause</Button>
        </>
    )
})