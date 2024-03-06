import React from 'react'
import { Ref } from 'react'
import './VideoPlayer.css'
import Video from '../../assets/Collage-video.mp4'
import { useRef } from 'react'

const VideoPlayer = ({ PlayState, setPlayState }) => {
    const player = useRef(null);

    const ClosePlayer = (e) => {
        if (e.target === player.current) {
            setPlayState(false);

        }

    }
    return (
        <div className={`video-player ${PlayState ? ' ' : 'hide'}`}
            ref={player}
            onClick={ClosePlayer}
        >
            <video src={Video} autoPlay controls muted></video>

        </div>
    )
}

export default VideoPlayer
