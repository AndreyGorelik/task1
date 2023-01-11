import "./videoplayer.css"
import { videoPlayerIcons } from "../../assets/images";
import { useState, useRef } from "react";

const VideoPlayer = ({ videoUrl, poster }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const playPause = () => {
        if (isPlaying === false) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };

    const muteSound = () => {
        if (videoRef.current.volume === 1) {
            videoRef.current.volume = 0;
        } else {
            videoRef.current.volume = 1;
        }

    };

    const fullscreenControl = () => {
        videoRef.current.requestFullscreen();
    }

    return (
        <div className="player">
            <video
                ref={videoRef}
                src={videoUrl}
                poster={poster}
                controls
            ></video>

            <div className="player-controls">
                <div className="player__video-duration">
                    <div className="player__timebar-time">
                        <span>1:34</span>
                        <span>19:00</span>
                    </div>
                    
                    <div className="player__timebar-progress">
                        {videoPlayerIcons.timebar}
                    </div>
                </div>
                <div className="player-buttons">
                    <div className="player-controls__left">
                        <button
                            className="player-controls__pause"
                            onClick={playPause}>
                           {videoPlayerIcons.pause}
                        </button>

                        <button className="player-controls__next-video">                
                        {videoPlayerIcons.next}
                        </button>

                        <button
                            className="player-controls__mute"
                            onClick={muteSound}>
                             {videoPlayerIcons.mute}
                            <div className="player-controls__volume-bar">
                            {videoPlayerIcons.volumeBar}
                            </div>
                        </button>
                    </div>

                    <div className="player-controls__right">
                        <button className="player-controls__subtitles">
                        {videoPlayerIcons.subtitles}
                        </button>

                        <button className="player-controls__settings">
                        {videoPlayerIcons.settings}
                        </button>

                        <button className="player-controls__widescreen">
                        {videoPlayerIcons.widescreen}
                        </button>

                        <button
                            className="player-controls__fullscreen"
                            onClick={fullscreenControl}>
                             {videoPlayerIcons.fullscreen}
                        </button>
                    </div>
                </div>
            </div>

            <div className="player-controls-mobile">
                <div className="player-controls-mobile-wrapper">
                    <button
                        className="player-controls__pause"
                        onClick={playPause}>
                         {videoPlayerIcons.playMobile}
                    </button>

                    <div className="player__timebar-mobile-progress">
                        <span className="mobile-time-marks">1:34</span>
                        <div className="player__timebar-progress__bar">
                        {videoPlayerIcons.timebarMobile}
                        </div>
                        <span className="mobile-time-marks">-10:00</span>
                    </div>

                    <button
                        className="player-controls__mute"
                        onClick={muteSound}>
                        {videoPlayerIcons.muteMobile}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default VideoPlayer;