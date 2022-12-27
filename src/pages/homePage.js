import Sidebar from "../components/sidebar/sidebar"
import VideoList from "../components/videoList/videoList"
import MobileHeaderMenu from "../components/mobileHeaderMenu/mobileHeaderMenu"
import Pic1 from "../assets/previews/1.png"
import Pic2 from "../assets/previews/2.png"
import Pic3 from "../assets/previews/3.png"
import Pic4 from "../assets/previews/4.png"
import Pic5 from "../assets/previews/5.png"
import Pic6 from "../assets/previews/6.png"
import Pic7 from "../assets/previews/7.png"
import Pic8 from "../assets/previews/8.png"
import Pic9 from "../assets/previews/9.png"
import Pic10 from "../assets/previews/10.png"
import Pic11 from "../assets/previews/11.png"
import Pic12 from "../assets/previews/12.png"
import Pic13 from "../assets/previews/13.png"
import Pic14 from "../assets/previews/14.png"
import Pic15 from "../assets/previews/15.png"

import DolliePhoto from "../assets/userpics/dollie.svg"
import FoodAndDrinkPhoto from "../assets/userpics/fd.svg"

const contentInfo = {
    "dollie": {
        name: "Dollie Blair",
        avatar: DolliePhoto,
        recommended: false,
        videos: [
            {title: "A brief history of creation", views: "80k", date: "3 days", duration: "4:15", image: Pic1},
            {title: "Selecting the right Hotel", views: "123k", date: "1 months", duration: "8:00", image: Pic2},
            {title: "Asteroids", views: "43k", date: "12 days", duration: "5:32", image: Pic3},
            {title: "Telescopes 101", views: "11k", date: "6 months", duration: "6:40", image: Pic4},
            {title: "Medical care is just", views: "18k", date: "2 days", duration: "1:45", image: Pic5},
            {title: "Moon gazing", views: "67k", date: "4 months", duration: "2:12", image: Pic6}
        ]
    },
    "foodAndDrink": {
        name: "Food & Drink",
        avatar: FoodAndDrinkPhoto,
        subscribersCount: 2.3,
        recommended: true,
        videos: [
            {title: "Astronomy or astrology", views: "80k", date: "4 months", duration: "7:36", image: Pic7},
            {title: "Advertising outdoors", views: "123k", date: "15 days", duration: "2:19", image: Pic8 },
            {title: "Radio astronomy", views: "43k", date: "11 months", duration: "9:05", image: Pic9},
            {title: "A good autoresponder", views: "11k", date: "2 months", duration: "3:40", image: Pic10},
            {title: "Baby monitor technology", views: "18k", date: "7 days", duration: "1:56", image: Pic11},
            {title: "Asteroids", views: "67k", date: "4 months", duration: "4:15", image: Pic12}
        ]
    },
    "recommended": {
        name: "Recommended",
        recommended: false,
        videos: [
            {title: "Dude you re getting a telescope", views: "34k", date: "5 months", duration: "3:40", channel: "Gussie French", image: Pic13},
            {title: "Moon gazing", views: "54k", date: "11 months", duration: "2:12", channel: "Edward Osborne", image: Pic14},
            {title: "Moon gazing", views: "125k", date: "11 months", duration: "2:12", channel: "Dollie Blair", image: Pic15},
            {title: "Moon gazing", views: "125k", date: "11 months", duration: "2:12", channel: "Dollie Blair", image: Pic15}
        ]
    }
}

const HomePage = () => {
    return (
        <>
        <Sidebar/>
        <MobileHeaderMenu pageType={"homePage"}/>
        <div className="wrapper">
             <VideoList data={contentInfo.dollie}/>
             <VideoList data={contentInfo.recommended} secondClassName={"big-screen"}/>
             <VideoList data={contentInfo.foodAndDrink}/>
        </div>
        </>
       
    )
}

export default HomePage;