import { Button } from '@chakra-ui/react';
import React, { memo, VFC } from 'react';
import ReactPlayer from 'react-player';
import { useState } from 'react';

type Props = {
    url: string;
};

export const PlaybackYoutube: VFC<Props> = memo((props) => {
    const {url} = props;
    const [playing, setPlaying] = useState(false);
    return (
        <>
            <ReactPlayer
                style={{display:"none"}}
                progressInterval={200}
                controls={false}
                url={url}
                playing={playing}
                config={{
                    file: {
                      attributes: {preload: "auto"},
                      forceAudio:true,
                    },
                  }}
            />
            {playing? (
                <Button onClick={()=>setPlaying(false)} colorScheme="red">Stop</Button>
            ):(
                <Button onClick={()=>setPlaying(true)} colorScheme="blue">Play</Button>
            )}
        </>
    );
});