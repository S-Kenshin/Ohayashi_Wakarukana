import { memo, VFC } from "react";
import { SelectAnswer } from "../atoms/select/SelectAnswer";


export const Quiz: VFC = memo(() => {
    return (
        <>
            <p>クイズ画面です</p>
            <SelectAnswer />
        </>
    )
})