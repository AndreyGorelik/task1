import {ReactComponent as HomeIcon} from "../../assets/icons/home.svg"
import {ReactComponent as TrendingIcon} from "../../assets/icons/trending.svg"
import {ReactComponent as SubscriptionsIcon} from "../../assets/icons/subscriptions.svg"
import {ReactComponent as LibraryIcon} from "../../assets/icons/library.svg"
import {ReactComponent as HistoryIcon} from "../../assets/icons/history.svg"
import {ReactComponent as WatchLaterIcon} from "../../assets/icons/watch-later.svg"
import {ReactComponent as FavouritesIcon} from "../../assets/icons/favorites.svg"
import {ReactComponent as LikedVideosIcon} from "../../assets/icons/liked.svg"
import {ReactComponent as MusicIcon} from "../../assets/icons/music.svg"
import {ReactComponent as GamesIcon} from "../../assets/icons/games.svg"
import {ReactComponent as ShowMoreIcon} from "../../assets/icons/show-more.svg"
import "./menuvideo.css"
const menu = [
    { label: "Home", img: <HomeIcon/> },
    { label: "Trending", img: <TrendingIcon/> },
    { label: "Subscriptions", img: <SubscriptionsIcon/> },
    { label: "Library", img: <LibraryIcon/> },
    { label: "History", img: <HistoryIcon/> },
    { label: "Watch later", img: <WatchLaterIcon/> },
    { label: "Favourites", img: <FavouritesIcon/> },
    { label: "Liked videos", img: <LikedVideosIcon/> },
    { label: "Music", img: <MusicIcon/> },
    { label: "Games", img: <GamesIcon/> },
    { label: "Show more", img: <ShowMoreIcon/> }
]

const MenuVideo = ({itemsCount}) => {

    const menuItems = menu.map( (item,index) => {
        return (
            <li tabIndex={0} key={index}><div className="menu-img">{item.img}</div>{item.label}</li>
        )
    })

    return (
        <div className="menu-video">
            <ul>
                {
                    itemsCount ? menuItems.slice(0, itemsCount) : menuItems
                }
            </ul>
        </div>
            
    )
}

export default MenuVideo;