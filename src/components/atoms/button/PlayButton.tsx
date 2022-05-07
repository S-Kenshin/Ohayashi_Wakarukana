
import { Button } from '@chakra-ui/react';
import { memo, VFC } from 'react';

export const PlayButton: VFC = memo(() => {
    return (
        <>
            <Button 
                colorScheme="teal"
            >
                Play
            </Button>
        </>
    )
})