import { Button, Center, VStack } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";

export const Home: VFC = memo(() => {
    const history = useHistory();
    const onClickQuizStart = useCallback(() => history.push("/home/quiz"), []);
    const onClickHikiyamaList = useCallback(() => history.push("/home/hikiyama_list"), []);
    return (
        <>
            <Center>
                <div>
                    <VStack 
                        h={200} 
                        justify='center'
                        
                    >
                        <Button 
                            colorScheme="blue" 
                            onClick={onClickQuizStart}
                            p='10'
                            width='40'
                        >
                            クイズスタート
                        </Button>
                    </VStack>
                    <VStack h={10} justify='center'>
                        <Button
                            colorScheme="green" 
                            onClick={onClickHikiyamaList}
                            p='10'
                            width='40'
                        >
                            曳山達
                        </Button>
                    </VStack>
                </div>
            </Center>
        </>
    )
})