import { Button } from '@chakra-ui/react';
import React from 'react';
import ReactPlayer from 'react-player';
import { useState } from 'react';

export const PlaybackYoutube = () => {
    const [playing, setPlaying] = useState(false);
    return (
        <>
            <ReactPlayer
                style={{display:"none"}}
                progressInterval={200}
                controls={false}
                url="https://www.youtube.com/watch?v=FyCHB8HTEaA"
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
    )
}