import { memo, VFC } from "react";
import { SelectAnswer } from "../atoms/select/SelectAnswer";
import { PlaybackYoutube } from "../atoms/youtube/PlaybackYoutube";


export const Quiz: VFC = memo(() => {
    return (
        <>
            <p>クイズ画面です</p>
            <PlaybackYoutube />
            <SelectAnswer />
        </>
    )
})