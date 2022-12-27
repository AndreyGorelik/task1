import ArrowLeft from "../../assets/arrow-left.svg"
import ArrowRight from "../../assets/arrow-right.svg"
import SubscribeBtn from "../subscribeBtn/subscribeBtn"
import "./videolist.css"
const VideoList = ({ data, hideHeader, hideDate, secondClassName }) => {
    const { avatar, name, videos, recommended, bigScreen } = data;

    return (
        <div className={secondClassName ? `channel-video-list ${secondClassName}` : "channel-video-list"}>

            {
                hideHeader ? null :

                    <div className="channel-video-list__header">

                        <div className="channel-info">
                            {
                                avatar ? <div className="channel_image"><img src={avatar} alt="name" /></div> : null
                            }

                            <div className="channel-title"><h2>{name}</h2></div>

                            {
                                recommended ? <div className="recommend__label">Recommended channel for you</div> : null
                            }


                        </div>

                        {
                            recommended ? <SubscribeBtn subscribers={"2.3m"}/> : null
                        }

                        <div className="channel-controls">
                            <div className="left-arrow">
                                <img src={ArrowLeft} alt="left" />
                            </div>
                            <div className="right-arrow">
                                <img src={ArrowRight} alt="right" />
                            </div>
                        </div>

                    </div>

            }

            <div className="channel-video-list__content">
                {
                    videos.map((item, index) => {
                        return (
                            <div className="video__card" key={index}>

                                <div className="video__card__preview">

                                    <img src={item.image} alt={item.title} />

                                    <div className="video-duration">
                                        {item.duration}
                                    </div>
                                </div>

                                <h3>{item.title.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')}</h3>

                                <div className="video__info">

                                    <div className="video__info__views">
                                        {item.views} views
                                        {
                                            hideDate ? null : <span> · {item.date} ago</span>
                                        }
                                    </div>

                                    <div className="video_info__channel__name">
                                        {
                                            item.channel ? item.channel : name
                                        }
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default VideoList;