import SubscribeBtn from "../components/subscribeBtn/subscribeBtn";
import SwitchBtn from "../components/switchBtn/switchBtn";
import VideoList from "../components/videoList/videoList";
import VideoPlayer from "../components/videoPlayer/videoPlayer";
import MobileHeaderMenu from "../components/mobileHeaderMenu/mobileHeaderMenu";
import { videoPageImages } from "../assets/images";
import { constans } from "../constans/constans";

const videoInfo = {
    channelName: "Food & Drink",
    channelIcon: videoPageImages.channelIconVideo,
    subscribers: "245k",
    url: "https://dump.video/i/nGZsAH.mp4",
    poster: videoPageImages.bigPreview,
    title: "Dude You Re Getting A Telescope",
    views: "123k",
    likes: "958k",
    dislikes: "123k",
    publishedDate: "14 Jun 2019",
    description: "A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad."
}

const recommendedVideo = {
    videos: [
        { channel: "Dollie Blair", title: "Baby Monitor Technology", views: "123k", date: "4 months", duration: "8:00", image: videoPageImages.pic41, id: 300 },
        { channel: "Dollie Blair", title: "A Good Autoresponder", views: "123k", date: "4 months", duration: "8:00", image: videoPageImages.pic42, id: 301 },
        { channel: "Dollie Blair", title: "Selecting The Right Hotel", views: "123k", date: "4 months", duration: "8:00", image: videoPageImages.pic43, id: 302 }
    ]
}

const VideoPage = () => {
    return (
        <>
            <MobileHeaderMenu pageType={"videoPage"} />

            <div className="video-page-wrapper">
                <div className="video-content">
                    <VideoPlayer videoUrl={videoInfo.url} poster={videoInfo.poster} />

                    <div className="video-info">
                        <div className="video-info__title">
                            <h1>{videoInfo.title}</h1>
                            <div className="fullscreen-hide">
                            {videoPageImages.arrow}
                            </div>
                        </div>

                        <div className="video-info__stat">
                            <div className="views-count gray-text">
                                {videoInfo.views} views
                            </div>
                            <div className="like-share-btns">
                                <button className="feedback-btn like">
                                   {videoPageImages.like}
                                    {videoInfo.likes}
                                </button>

                                <button className="feedback-btn dislike">
                                    {videoPageImages.dislike}
                                    {videoInfo.dislikes}
                                </button>

                                <button className="feedback-btn share">
                                  {videoPageImages.share}
                                    Share
                                </button>

                                <button className="more-btn">
                                    {videoPageImages.more}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="video-description">
                        <div className="video-description__text">
                            <div className="video-description__text-left-col">
                                <img src={videoInfo.channelIcon} alt={videoInfo.channelName} />
                            </div>
                            <div className="video-description__text-right-col">
                                <h3>{videoInfo.channelName}</h3>
                                <span className="fullscreen-hide gray-text">{videoInfo.subscribers} {constans.subscribeText}</span>
                                <span className="published">Published on {videoInfo.publishedDate}</span>
                                <p>{videoInfo.description}</p>
                                <button className="gray-text mobile-hide">{constans.showMoreBtnText}</button>
                            </div>
                        </div>

                        <SubscribeBtn subscribers={videoInfo.subscribers} />

                        <div className="clas">
                            <button className="subscribe-light">{constans.subscribeText}</button>
                        </div>
                    </div>
                </div>
                <div className="next-video">
                    <div className="next-video__header">
                        <h2>{constans.nextText}</h2>

                        <div className="next-video__header__switcher">
                            {constans.autoplayBtnText}
                            <SwitchBtn />
                        </div>
                    </div>
                    <VideoList
                        data={recommendedVideo}
                        hideHeader={true}
                        hideDate={true}
                        secondClassName={"vertical-list"} />
                </div>
            </div>
        </>
    )
}

export default VideoPage;