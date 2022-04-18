import { Button } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";

export const Home: VFC = memo(() => {
    const history = useHistory();
    const onClickQuizStart = useCallback(() => history.push("/home/quiz"), []);
    const onClickHikiyamaList = useCallback(() => history.push("/home/hikiyama_list"), []);
    return (
        <>
            <Button colorScheme="blue" onClick={onClickQuizStart}>クイズスタート</Button>
            <Button colorScheme="green" onClick={onClickHikiyamaList}>曳山一覧</Button>
        </>
    )
})