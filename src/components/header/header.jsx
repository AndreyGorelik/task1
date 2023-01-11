import "./header.css"
import { headerIcons } from "../../assets/images";

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar__menu">
                <div className="menu-btn">
                    <button type="button">
                        <img src={headerIcons.menuIcon} alt="menu" />
                    </button>
                </div>
                <div className="logo">
                    <button type="button">
                        <img src={headerIcons.logoBlack} alt="logo" />
                    </button>
                </div>
            </div>

            <div className="navbar__search">
                <input type="search" placeholder="Search" className="search__input" />
                <button type="submit">
                    {headerIcons.search}
                </button>
            </div>

            <div className="navbar__account-menu">
                <button type="button">
                    <img src={headerIcons.addVideoBtn} alt="add video" />
                </button>
                <button type="button">
                    <img src={headerIcons.accountBtn} alt="account" />
                </button>
                <button type="button">
                    <img src={headerIcons.notificationBtn} alt="notification" />
                    <span className="label success">3</span>
                </button>
                <button type="button">
                    <img src={headerIcons.userPic} alt="userpic" />
                </button>
            </div>
        </div>
    )
}

export default Header;