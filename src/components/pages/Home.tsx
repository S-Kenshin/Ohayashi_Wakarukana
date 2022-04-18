import { Button } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Home: VFC = memo(() => {
    return (
        <>
            <Button colorScheme="blue">ゲームスタート</Button>
            <Button colorScheme="green">曳山一覧</Button>
        </>
    )
})