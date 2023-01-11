import MenuVideo from "../menuVideo/menuVideo";
import "./sidebar.css"
import { sidebarIcons } from "../../assets/images";

const userpics = [
    { label: "Gussie Singleton", img: sidebarIcons.pic1, id: 200 },
    { label: "Nora Francis", img: sidebarIcons.pic2, id: 201 },
    { label: "Belle Briggs", img: sidebarIcons.pic3, id: 202 },
    { label: "Eunice Cortez", img: sidebarIcons.pic4, id: 203 },
    { label: "Emma Hanson", img: sidebarIcons.pic5, id: 204 },
    { label: "Leah Berryr", img: sidebarIcons.pic6, id: 205 }
]

const Sidebar = () => {
    return (
        <div className="sidebar">
            <MenuVideo />

            <div className="sidebar__subscriptions">
                <h2>Subscriptions</h2>
                <ul>
                    {
                        userpics.map((item) => {
                            return (
                                <li className="sidebar-subscription-list"
                                    tabIndex={0}
                                    key={item.id}>
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
                    <li className="sidebar-subscription-list" tabIndex={0}><img src={sidebarIcons.settingsIcon} alt="settngs"/>Settings</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;