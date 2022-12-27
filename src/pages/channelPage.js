import Sidebar from "../components/sidebar/sidebar"
import MobileHeaderMenu from "../components/mobileHeaderMenu/mobileHeaderMenu";

import SubscribeBtn from "../components/subscribeBtn/subscribeBtn";
import channelCover from "../assets/channel-info/cover.png";
import channelIcon from "../assets/channel-info/channel-icon.svg";
import NotificationBtn from "../assets/notification-btn.svg";
import PreviewImage from "../assets/channel-info/top-video.png"
import SearchBtn from "../assets/search-btn.svg"
import VideoList from "../components/videoList/videoList";

import Pic7 from "../assets/previews/7.png"
import Pic8 from "../assets/previews/8.png"
import Pic9 from "../assets/previews/9.png"
import Pic10 from "../assets/previews/10.png"
import Pic11 from "../assets/previews/11.png"
import Pic12 from "../assets/previews/12.png"

import R1 from "../assets/userpics/r1.png"
import R2 from "../assets/userpics/r2.png"
import R3 from "../assets/userpics/r3.png"

const data = {
    name: "Margaret Phelps",
    subscribers: "245k",
    channelCover: channelCover,
    channelIcon: channelIcon,
    topVideo: {
        title: "Choosing The Best Audio Player Software For Your Computer",
        description: "Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads. ",
        date: "6 months",
        views: "11k",
        duration: "7:36",
        previewImage: PreviewImage
    }
}

const authorVideos = {
    name: "Margaret Phelps",
    recommended: false,
    videos: [
        { title: "Astronomy or astrology", views: "80k", date: "4 months", duration: "7:36", image: Pic7 },
        { title: "Advertising outdoors", views: "123k", date: "15 days", duration: "2:19", image: Pic8 },
        { title: "Radio astronomy", views: "43k", date: "11 months", duration: "9:05", image: Pic9 },
        { title: "A good autoresponder", views: "11k", date: "2 months", duration: "3:40", image: Pic10 },
        { title: "Baby monitor technology", views: "18k", date: "7 days", duration: "1:56", image: Pic11 },
        { title: "Asteroids", views: "67k", date: "4 months", duration: "4:15", image: Pic12 },
    ]
}

const recommendedChannels = [
    { name: "Flora Benson", image: R1 },
    { name: "Violet Cobb", image: R2 },
    { name: "Philip Mullins", image: R3 }
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
                            <span className="gray-text">{data.subscribers} subscribed</span>
                        </div>
                    </div>

                    <div className="channel-header__right-col">
                        <button type="button" className="mobile-hide">
                            <img src={NotificationBtn} alt="notification" />
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
                                <li><img src={SearchBtn} alt="search" /></li>
                            </ul>
                        </div>

                        <div className="channel-menu-mobile fullscreen-hide">
                            <ul>
                                <li className="active">Home</li>
                                <li>Videos</li>
                                <li>Playlists</li>
                                <li><svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.7624 0.798368L9.28113 0.263702C9.11428 0.0879298 8.91953 0 8.69714 0C8.47025 0 8.27771 0.0879298 8.11937 0.263702L5 3.72814L1.88063 0.263789C1.72229 0.0880173 1.52975 8.74923e-05 1.30294 8.74923e-05C1.08047 8.74923e-05 0.885722 0.0880173 0.718866 0.263789L0.243902 0.798455C0.0813008 0.978952 0 1.19523 0 1.44712C0 1.70374 0.0813796 1.91757 0.243902 2.08862L4.42231 6.72912C4.5764 6.90971 4.76886 7 5 7C5.22681 7 5.42147 6.90971 5.58399 6.72912L9.7624 2.08862C9.92075 1.91276 10 1.69893 10 1.44712C10 1.19996 9.92075 0.983764 9.7624 0.798368Z" fill="black" />
                                </svg></li>
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
                                        recommendedChannels.map((item, index) => {
                                            return (
                                                <li key={index}>
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