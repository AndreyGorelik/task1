import menuIcon from "./menu-icon.svg"
import logoBlack from "./logo-black.svg"
import addVideoBtn from "./add-video-btn.svg"
import notificationBtn from "./notification-btn.svg"
import userPic from "./user-pic.svg"
import accountBtn from "./account-btn.svg"
import { ReactComponent as Search } from "./search.svg"

import { ReactComponent as HomeIcon } from "./icons/home.svg"
import { ReactComponent as TrendingIcon } from "./icons/trending.svg"
import { ReactComponent as SubscriptionsIcon } from "./icons/subscriptions.svg"
import { ReactComponent as LibraryIcon } from "./icons/library.svg"
import { ReactComponent as HistoryIcon } from "./icons/history.svg"
import { ReactComponent as WatchLaterIcon } from "./icons/watch-later.svg"
import { ReactComponent as FavouritesIcon } from "./icons/favorites.svg"
import { ReactComponent as LikedVideosIcon } from "./icons/liked.svg"
import { ReactComponent as MusicIcon } from "./icons/music.svg"
import { ReactComponent as GamesIcon } from "./icons/games.svg"
import { ReactComponent as ShowMoreIcon } from "./icons/show-more.svg"

import { ReactComponent as SearchMobile } from "./mobileheader/searchmobile.svg"
import { ReactComponent as LogoMobile } from "./mobileheader/logomobile.svg"
import { ReactComponent as MenuMobile } from "./mobileheader/menumobile.svg"

import pic1 from "../../assets/images/userpics/1.svg"
import pic2 from "../../assets/images/userpics/2.svg"
import pic3 from "../../assets/images/userpics/3.svg"
import pic4 from "../../assets/images/userpics/4.svg"
import pic5 from "../../assets/images/userpics/5.svg"
import pic6 from "../../assets/images/userpics/6.svg"
import settingsIcon from "../../assets/images/settings.svg"

import arrowLeft from "../../assets/images/arrow-left.svg"
import arrowRight from "../../assets/images/arrow-right.svg"


import { ReactComponent as Timebar } from "../../assets/images/videoplayer/timebar.svg"
import { ReactComponent as Pause } from "../../assets/images/videoplayer/pause.svg"
import { ReactComponent as Next } from "../../assets/images/videoplayer/next.svg"
import { ReactComponent as Mute } from "../../assets/images/videoplayer/mute.svg"
import { ReactComponent as VolumeBar } from "../../assets/images/videoplayer/volumebar.svg"
import { ReactComponent as Subtitles } from "../../assets/images/videoplayer/subtitles.svg"
import { ReactComponent as Settings } from "../../assets/images/videoplayer/settings.svg"
import { ReactComponent as Widescreen } from "../../assets/images/videoplayer/widescreen.svg"
import { ReactComponent as Fullscreen } from "../../assets/images/videoplayer/fullscreen.svg"
import { ReactComponent as PlayMobile } from "../../assets/images/videoplayer/playmobile.svg"
import { ReactComponent as TimebarMobile } from "../../assets/images/videoplayer/timebarmobile.svg"
import { ReactComponent as MuteMobile } from "../../assets/images/videoplayer/mutemobile.svg"

import channelCover from "./channel-info/cover.png";
import channelIcon from "./channel-info/channel-icon.svg";
import previewImage from "./channel-info/top-video.png"
import searchBtn from "./search-btn.svg"

import pic7 from "./previews/7.png"
import pic8 from "./previews/8.png"
import pic9 from "./previews/9.png"
import pic10 from "./previews/10.png"
import pic11 from "./previews/11.png"
import pic12 from "./previews/12.png"

import r1 from "./userpics/r1.png"
import r2 from "./userpics/r2.png"
import r3 from "./userpics/r3.png"

import pic21 from "./previews/1.png"
import pic22 from "./previews/2.png"
import pic23 from "./previews/3.png"
import pic24 from "./previews/4.png"
import pic25 from "./previews/5.png"
import pic26 from "./previews/6.png"
import pic27 from "./previews/7.png"
import pic28 from "./previews/8.png"
import pic29 from "./previews/9.png"
import pic30 from "./previews/10.png"
import pic31 from "./previews/11.png"
import pic32 from "./previews/12.png"
import pic33 from "./previews/13.png"
import pic34 from "./previews/14.png"
import pic35 from "./previews/15.png"
import dolliePhoto from "./userpics/dollie.svg"
import foodAndDrinkPhoto from "./userpics/fd.svg"

import pic41 from "./previews/r1.png"
import pic42 from "./previews/r2.png"
import pic43 from "./previews/r3.png"
import bigPreview from "./bigPreviewExample.png"
import channelIconVideo from "./userpics/v4.png"
import { ReactComponent as Arrow } from "./videopage/arrow.svg"
import { ReactComponent as Like } from "./videopage/like.svg"
import { ReactComponent as Dislike } from "./videopage/like.svg"
import { ReactComponent as Share } from "./videopage/share.svg"
import { ReactComponent as More } from "./videopage/more.svg"

const videoPageImages = {
    arrow: <Arrow />,
    like: <Like />,
    dislike: <Dislike />,
    share: <Share />,
    more: <More />,
    pic41,
    pic42,
    pic43,
    bigPreview,
    channelIconVideo
}

const homePageImages = {
    pic21,
    pic22,
    pic23,
    pic24,
    pic25,
    pic26,
    pic27,
    pic28,
    pic29,
    pic30,
    pic31,
    pic32,
    pic33,
    pic34,
    pic35,
    dolliePhoto,
    foodAndDrinkPhoto
}

const headerIcons = {
    menuIcon,
    logoBlack,
    addVideoBtn,
    notificationBtn,
    userPic, accountBtn,
    search: <Search />
}

const menuVideoIcons = {
    homeIcon: <HomeIcon />,
    trendingIcon: <TrendingIcon />,
    subscriptionsIcon: <SubscriptionsIcon />,
    libraryIcon: <LibraryIcon />,
    historyIcon: <HistoryIcon />,
    watchLaterIcon: <WatchLaterIcon />,
    favouritesIcon: <FavouritesIcon />,
    likedVideosIcon: <LikedVideosIcon />,
    musicIcon: <MusicIcon />,
    gamesIcon: <GamesIcon />,
    showMoreIcon: <ShowMoreIcon />
}

const mobileHeaderIcons = {
    searchMobile: <SearchMobile />,
    logoMobile: <LogoMobile />,
    search: <Search />,
    menuMobile: <MenuMobile />,
    userPic,
    logoBlack,
}

const sidebarIcons = {
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    settingsIcon
}

const videoListIcons = {
    arrowLeft,
    arrowRight
}

const videoPlayerIcons = {
    timebar: <Timebar />,
    pause: <Pause />,
    next: <Next />,
    mute: <Mute />,
    volumeBar: <VolumeBar />,
    subtitles: <Subtitles />,
    settings: <Settings />,
    widescreen: <Widescreen />,
    fullscreen: <Fullscreen />,
    playMobile: <PlayMobile />,
    timebarMobile: <TimebarMobile />,
    muteMobile: <MuteMobile />
}

const channelPageImages = {
    channelCover,
    channelIcon,
    notificationBtn,
    previewImage,
    searchBtn,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    pic12,
    r1,
    r2,
    r3
}

export {
    headerIcons,
    menuVideoIcons,
    mobileHeaderIcons,
    sidebarIcons,
    videoListIcons,
    videoPlayerIcons,
    channelPageImages,
    homePageImages,
    videoPageImages
}