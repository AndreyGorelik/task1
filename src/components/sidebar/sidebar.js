import MenuVideo from "../menuVideo/menuVideo";
import "./sidebar.css"

import Pic1 from "../../assets/userpics/1.svg"
import Pic2 from "../../assets/userpics/2.svg"
import Pic3 from "../../assets/userpics/3.svg"
import Pic4 from "../../assets/userpics/4.svg"
import Pic5 from "../../assets/userpics/5.svg"
import Pic6 from "../../assets/userpics/6.svg"
import SettingsIcon from "../../assets/settings.svg"


const userpics = [
    { label: "Gussie Singleton", img: Pic1 },
    { label: "Nora Francis", img: Pic2 },
    { label: "Belle Briggs", img: Pic3 },
    { label: "Eunice Cortez", img: Pic4 },
    { label: "Emma Hanson", img: Pic5 },
    { label: "Leah Berryr", img: Pic6 }
]

const Sidebar = () => {
    return (
        <div className="sidebar">
            <MenuVideo />

            <div className="sidebar__subscriptions">
                <h2>Subscriptions</h2>
                <ul>
                    {
                        userpics.map((item, index) => {
                            return (
                                <li className="sidebar-subscription-list"
                                    tabIndex={0}
                                    key={index}>
                                    <img src={item.img} alt={item.label} />
                                    {item.label}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="settings-btn">
                <ul>
                    <li className="sidebar-subscription-list" tabIndex={0}><img src={SettingsIcon} alt={SettingsIcon} />Settings</li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar;