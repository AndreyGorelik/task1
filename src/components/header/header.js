
import "./header.css"
import MenuIcon from "../../assets/menu-icon.svg"
import LogoBlack from "../../assets/logo-black.svg"
import AddVideoBtn from "../../assets/add-video-btn.svg"
import NotificationBtn from "../../assets/notification-btn.svg"
import UserPic from "../../assets/user-pic.svg"
import SearchBtn from "../../assets/search-btn.svg"
import AccountBtn from "../../assets/account-btn.svg"

const Header = () => {
    return (
        <div className="navbar">

            <div className="navbar__menu">
                <div className="menu-btn">
                    <button type="button">
                        <img src={MenuIcon} alt="menu" />
                    </button>
                </div>
                <div className="logo">
                    <button type="button">
                        <img src={LogoBlack} alt="logo" />
                    </button>
                </div>
            </div>

            <div className="navbar__search">
                <input type="search" placeholder="Search" className="search__input" />
                {/* <button type="submit"><img src={SearchBtn} alt="search button" /></button> */}
                <button type="submit">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.9005 16.4865L14.3205 12.9065L14.3195 12.9055C16.9095 9.569 16.4594 4.79387 13.2916 2.00007C10.1238 -0.793727 5.32983 -0.643497 2.34317 2.34317C-0.643497 5.32983 -0.793727 10.1238 2.00007 13.2916C4.79387 16.4594 9.569 16.9095 12.9055 14.3195L16.4855 17.8995C16.7364 18.1596 17.1081 18.2642 17.4578 18.1729C17.8075 18.0816 18.0808 17.8088 18.1725 17.4592C18.2643 17.1097 18.1603 16.7378 17.9005 16.4865ZM13.1967 11.0005C12.1249 12.8569 10.1441 14.0005 8.00052 14.0005C4.68681 14.0005 2.00052 11.3142 2.00052 8.00052C2.00052 4.68681 4.68681 2.00052 8.00052 2.00052C10.1441 2.00052 12.1249 3.14411 13.1967 5.00052C14.2685 6.85693 14.2685 9.14411 13.1967 11.0005Z" fill="black" />
                    </svg>
                </button>
            </div>

            <div className="navbar__account-menu">
                <button type="button">
                    <img src={AddVideoBtn} alt="add video" />
                </button>
                <button type="button">
                    <img src={AccountBtn} alt="account" />
                </button>
                <button type="button">
                    <img src={NotificationBtn} alt="notification" />
                    <span className="label success">3</span>
                </button>
                <button type="button">
                    <img src={UserPic} alt="userpic" />
                </button>
            </div>

        </div>
    )
}

export default Header;