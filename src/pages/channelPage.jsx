import Sidebar from "../components/sidebar/sidebar"
import MobileHeaderMenu from "../components/mobileHeaderMenu/mobileHeaderMenu";

import SubscribeBtn from "../components/subscribeBtn/subscribeBtn";
import VideoList from "../components/videoList/videoList";
import { channelPageImages } from "../assets/images";
import { constans } from "../constans/constans";

const data = {
    name: "Margaret Phelps",
    subscribers: "245k",
    channelCover: channelPageImages.channelCover,
    channelIcon: channelPageImages.channelIcon,
    topVideo: {
        title: "Choosing The Best Audio Player Software For Your Computer",
        description: "Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. ",
        date: "6 months",
        views: "11k",
        duration: "7:36",
        previewImage: channelPageImages.previewImage
    }
}

const authorVideos = {
    name: "Margaret Phelps",
    recommended: false,
    videos: [
        { title: "Astronomy or astrology", views: "80k", date: "4 months", duration: "7:36", image: channelPageImages.pic7, id: 11 },
        { title: "Advertising outdoors", views: "123k", date: "15 days", duration: "2:19", image: channelPageImages.pic8, id: 12 },
        { title: "Radio astronomy", views: "43k", date: "11 months", duration: "9:05", image: channelPageImages.pic9, id: 13 },
        { title: "A good autoresponder", views: "11k", date: "2 months", duration: "3:40", image: channelPageImages.pic10, id: 14 },
        { title: "Baby monitor technology", views: "18k", date: "7 days", duration: "1:56", image: channelPageImages.pic11, id: 15 },
        { title: "Asteroids", views: "67k", date: "4 months", duration: "4:15", image: channelPageImages.pic12, id: 16 },
    ]
}

const recommendedChannels = [
    { name: "Flora Benson", image: channelPageImages.r1, id: 1 },
    { name: "Violet Cobb", image: channelPageImages.r1, id: 2 },
    { name: "Philip Mullins", image: channelPageImages.r2, id: 3 }
]

const ChannelPage = () => {
    return (
        <>
            <Sidebar />
            <MobileHeaderMenu pageType={"channelPage"} />
            <div className="wrapper">
                <div className="channel-cover">
                    <img src={data.channelCover} alt={data.name} />
                </div>

                <div className="channel-header">
                    <div className="channel-header__left-col">
                        <div className="channel-header__left-col__icon">
                            <img src={data.channelIcon} alt={data.name} />
                        </div>
                        <div className="channel-header__left-col__info">
                            <h1>{data.name}</h1>
                            <span className="gray-text">{data.subscribers} {constans.subscribedCountText}</span>
                        </div>
                    </div>

                    <div className="channel-header__right-col">
                        <button type="button" className="mobile-hide">
                            <img src={channelPageImages.notificationBtn} alt="notification" />
                        </button>

                        <SubscribeBtn subscribers={data.subscribers} />
                    </div>
                </div>

                <div className="channel-content">
                    <div className="channel-content__left-col">
                        <div className="channel-menu mobile-hide">
                            <ul>
                                <li className="active">Home</li>
                                <li>Videos</li>
                                <li>Playlists</li>
                                <li>Channels</li>
                                <li>Discussion</li>
                                <li>About</li>
                                <li><img src={channelPageImages.searchBtn} alt="search" /></li>
                            </ul>
                        </div>

                        <div className="channel-menu-mobile fullscreen-hide">
                            <ul>
                                <li className="active">Home</li>
                                <li>Videos</li>
                                <li>Playlists</li>
                                <li><img src={channelPageImages.searchBtn} alt="search" /></li>
                            </ul>
                        </div>

                        <div className="channel-content__top-video mobile-hide">
                            <div className="channel-content__top-video__preview">
                                <img src={data.topVideo.previewImage} alt={data.topVideo.title} />

                                <div className="video-duration">
                                    {data.topVideo.duration}
                                </div>
                            </div>

                            <div className="channel-content__top-video__text">
                                <h2>{data.topVideo.title}</h2>
                                <p>{data.topVideo.description}</p>
                                <div className="channel-content__publish-info">
                                    {data.topVideo.views} views · {data.topVideo.date} ago
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="channel-content__right_col mobile-hide">
                        <div className="channel-content__right_col__recommended">
                            <div className="recommended-title">
                                Recommended channel
                            </div>
                            <div className="recommended__list">
                                <ul>
                                    {
                                        recommendedChannels.map((item) => {
                                            return (
                                                <li key={item.id}>
                                                    <img src={item.image} alt={item.name} />
                                                    {item.name}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <VideoList data={authorVideos} />
            </div>
        </>
    )
}

export default ChannelPage;