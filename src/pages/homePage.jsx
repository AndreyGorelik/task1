import Sidebar from "../components/sidebar/sidebar"
import VideoList from "../components/videoList/videoList"
import MobileHeaderMenu from "../components/mobileHeaderMenu/mobileHeaderMenu"
import { homePageImages } from "../assets/images"

const contentInfo = {
    "dollie": {
        name: "Dollie Blair",
        avatar: homePageImages.dolliePhoto,
        recommended: false,
        videos: [
            {title: "A brief history of creation", views: "80k", date: "3 days", duration: "4:15", image: homePageImages.pic21, id: 400},
            {title: "Selecting the right Hotel", views: "123k", date: "1 months", duration: "8:00", image: homePageImages.pic22, id: 401},
            {title: "Asteroids", views: "43k", date: "12 days", duration: "5:32", image: homePageImages.pic23, id: 402},
            {title: "Telescopes 101", views: "11k", date: "6 months", duration: "6:40", image: homePageImages.pic24, id: 403},
            {title: "Medical care is just", views: "18k", date: "2 days", duration: "1:45", image: homePageImages.pic25, id: 404},
            {title: "Moon gazing", views: "67k", date: "4 months", duration: "2:12", image: homePageImages.pic26, id: 405}
        ]
    },
    "foodAndDrink": {
        name: "Food & Drink",
        avatar: homePageImages.foodAndDrinkPhoto,
        subscribersCount: 2.3,
        recommended: true,
        videos: [
            {title: "Astronomy or astrology", views: "80k", date: "4 months", duration: "7:36", image: homePageImages.pic27, id: 406},
            {title: "Advertising outdoors", views: "123k", date: "15 days", duration: "2:19", image: homePageImages.pic28, id: 407 },
            {title: "Radio astronomy", views: "43k", date: "11 months", duration: "9:05", image: homePageImages.pic29, id: 408},
            {title: "A good autoresponder", views: "11k", date: "2 months", duration: "3:40", image: homePageImages.pic30, id: 409},
            {title: "Baby monitor technology", views: "18k", date: "7 days", duration: "1:56", image: homePageImages.pic31, id: 410},
            {title: "Asteroids", views: "67k", date: "4 months", duration: "4:15", image: homePageImages.pic32, id: 411}
        ]
    },
    "recommended": {
        name: "Recommended",
        recommended: false,
        videos: [
            {title: "Dude you re getting a telescope", views: "34k", date: "5 months", duration: "3:40", channel: "Gussie French", image: homePageImages.pic33, id: 412},
            {title: "Moon gazing", views: "54k", date: "11 months", duration: "2:12", channel: "Edward Osborne", image: homePageImages.pic34, id: 413},
            {title: "Moon gazing", views: "125k", date: "11 months", duration: "2:12", channel: "Dollie Blair", image: homePageImages.pic35, id: 414},
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