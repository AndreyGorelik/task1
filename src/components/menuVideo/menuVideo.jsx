import { menuVideoIcons } from "../../assets/images"
import "./menuvideo.css"

const {homeIcon, trendingIcon, subscriptionsIcon, libraryIcon, historyIcon, watchLaterIcon, 
       favouritesIcon, likedVideosIcon, musicIcon, gamesIcon, showMoreIcon} = menuVideoIcons

const menu = [
    { label: "Home", img: homeIcon, id: 100 },
    { label: "Trending", img: trendingIcon, id: 101 },
    { label: "Subscriptions", img: subscriptionsIcon, id: 102 },
    { label: "Library", img: libraryIcon, id: 103 },
    { label: "History", img: historyIcon, id: 104 },
    { label: "Watch later", img: watchLaterIcon, id: 105 },
    { label: "Favourites", img: favouritesIcon, id: 106 },
    { label: "Liked videos", img: likedVideosIcon, id: 107 },
    { label: "Music", img: musicIcon, id: 108 },
    { label: "Games", img: gamesIcon, id: 109 },
    { label: "Show more", img: showMoreIcon, id: 110 }
]

const MenuVideo = ({itemsCount}) => {

    const menuItems = menu.map( (item) => {
        return (
            <li tabIndex={0} key={item.id}><div className="menu-img">{item.img}</div>{item.label}</li>
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