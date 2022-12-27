import React from 'react'
import LogoBlack from "../../assets/logo-black.svg"
import UserPic from "../../assets/user-pic.svg"
import "./mobileheadermenu.css"

const MobileHeaderMenu = ({ pageType }) => {

    if (pageType === "homePage") {
        return (
            <div className="mobile-header-menu">
                <div className="mobile-header-menu__left">
                    <div className="logo-mobile">
                        <img src={LogoBlack} alt="logo" />
                    </div>

                </div>

                <div className="mobile-header-menu__right">
                    <div className="search-mobile">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.9005 16.4865L14.3205 12.9065L14.3195 12.9055C16.9095 9.569 16.4594 4.79387 13.2916 2.00007C10.1238 -0.793727 5.32983 -0.643497 2.34317 2.34317C-0.643497 5.32983 -0.793727 10.1238 2.00007 13.2916C4.79387 16.4594 9.569 16.9095 12.9055 14.3195L16.4855 17.8995C16.7364 18.1596 17.1081 18.2642 17.4578 18.1729C17.8075 18.0816 18.0808 17.8088 18.1725 17.4592C18.2643 17.1097 18.1603 16.7378 17.9005 16.4865ZM13.1967 11.0005C12.1249 12.8569 10.1441 14.0005 8.00052 14.0005C4.68681 14.0005 2.00052 11.3142 2.00052 8.00052C2.00052 4.68681 4.68681 2.00052 8.00052 2.00052C10.1441 2.00052 12.1249 3.14411 13.1967 5.00052C14.2685 6.85693 14.2685 9.14411 13.1967 11.0005Z" fill="black" />
                        </svg>
                    </div>

                    <div className="user-icon-mobile">
                        <button type="button">
                            <img src={UserPic} alt="userpic" />
                        </button>
                    </div>
                </div>

            </div>

        )
    }


    if (pageType === "channelPage") {
        return (

            <div className="mobile-header-menu">

                <div className="mobile-header-menu__left">
                    <div className="logo-mobile">
                        <svg width="37" height="25" viewBox="0 0 37 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.6734 24.8231L19.1906 24.9587C19.2026 24.9587 19.2265 24.9587 19.2265 24.9764C23.4126 25.0531 27.4912 24.8113 31.6654 24.5106C34.9964 24.2807 35.7858 21.8986 36.1984 19.0566C36.7127 15.625 36.8263 12.1521 36.5572 8.69693C36.5444 8.53379 36.5319 8.36919 36.5194 8.20355C36.2692 4.89713 35.9879 1.1803 32.0242 0.49528C31.181 0.347874 30.3198 0.218157 29.4646 0.194572C21.3674 -0.0648618 13.1984 -0.12972 5.08321 0.424525C2.67915 0.577827 1.12429 1.98113 0.729591 4.33372C0.029903 8.52594 -0.113623 12.8302 0.257152 17.0578C0.26178 17.1095 0.266403 17.1614 0.271041 17.2134C0.536104 20.1873 0.845832 23.6623 4.41342 24.3809C6.3341 24.7748 8.28965 24.7905 10.2489 24.8063C10.7237 24.8101 11.1987 24.8139 11.6734 24.8231ZM18.7294 15.5231C17.4155 16.2676 16.0987 17.0139 14.7712 17.7653V7.16391C16.2009 7.9725 17.6206 8.77738 19.0418 9.58308C20.7295 10.5399 22.4193 11.4979 24.1303 12.4646C22.3225 13.487 20.5288 14.5035 18.7294 15.5231Z" fill="#FF0000" />
                        </svg>
                        <span className="header-channel-title">Margaret Phelps </span>
                    </div>
                </div>

                <div className="mobile-header-menu__right">
                    <div className="search-mobile">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.9005 16.4865L14.3205 12.9065L14.3195 12.9055C16.9095 9.569 16.4594 4.79387 13.2916 2.00007C10.1238 -0.793727 5.32983 -0.643497 2.34317 2.34317C-0.643497 5.32983 -0.793727 10.1238 2.00007 13.2916C4.79387 16.4594 9.569 16.9095 12.9055 14.3195L16.4855 17.8995C16.7364 18.1596 17.1081 18.2642 17.4578 18.1729C17.8075 18.0816 18.0808 17.8088 18.1725 17.4592C18.2643 17.1097 18.1603 16.7378 17.9005 16.4865ZM13.1967 11.0005C12.1249 12.8569 10.1441 14.0005 8.00052 14.0005C4.68681 14.0005 2.00052 11.3142 2.00052 8.00052C2.00052 4.68681 4.68681 2.00052 8.00052 2.00052C10.1441 2.00052 12.1249 3.14411 13.1967 5.00052C14.2685 6.85693 14.2685 9.14411 13.1967 11.0005Z" fill="black" />
                        </svg>
                    </div>

                    <div className="user-menu-mobile">
                        <button type="button">
                            <svg width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.5 0C3.88071 0 5 1.11929 5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0ZM5 9.5C5 8.11929 3.88071 7 2.5 7C1.11929 7 0 8.11929 0 9.5C0 10.8807 1.11929 12 2.5 12C3.88071 12 5 10.8807 5 9.5ZM5 16.5C5 15.1193 3.88071 14 2.5 14C1.11929 14 0 15.1193 0 16.5C0 17.8807 1.11929 19 2.5 19C3.88071 19 5 17.8807 5 16.5Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>



            </div>

        )
    }

    if (pageType === "videoPage")
        return (
            <div className="mobile-header-menu">

                <div className="mobile-header-menu__left">
                    <div className="logo-mobile">
                        <img src={LogoBlack} alt="logo" />
                    </div>
                </div>

                <div className="mobile-header-menu__right">

                    <div className="search-mobile">
                        <button type="button">
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.9005 16.4865L14.3205 12.9065L14.3195 12.9055C16.9095 9.569 16.4594 4.79387 13.2916 2.00007C10.1238 -0.793727 5.32983 -0.643497 2.34317 2.34317C-0.643497 5.32983 -0.793727 10.1238 2.00007 13.2916C4.79387 16.4594 9.569 16.9095 12.9055 14.3195L16.4855 17.8995C16.7364 18.1596 17.1081 18.2642 17.4578 18.1729C17.8075 18.0816 18.0808 17.8088 18.1725 17.4592C18.2643 17.1097 18.1603 16.7378 17.9005 16.4865ZM13.1967 11.0005C12.1249 12.8569 10.1441 14.0005 8.00052 14.0005C4.68681 14.0005 2.00052 11.3142 2.00052 8.00052C2.00052 4.68681 4.68681 2.00052 8.00052 2.00052C10.1441 2.00052 12.1249 3.14411 13.1967 5.00052C14.2685 6.85693 14.2685 9.14411 13.1967 11.0005Z" fill="black" />
                            </svg>
                        </button>
                    </div>

                    <div className="user-menu-mobile">
                        <button type="button">
                            <svg width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.5 0C3.88071 0 5 1.11929 5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0ZM5 9.5C5 8.11929 3.88071 7 2.5 7C1.11929 7 0 8.11929 0 9.5C0 10.8807 1.11929 12 2.5 12C3.88071 12 5 10.8807 5 9.5ZM5 16.5C5 15.1193 3.88071 14 2.5 14C1.11929 14 0 15.1193 0 16.5C0 17.8807 1.11929 19 2.5 19C3.88071 19 5 17.8807 5 16.5Z" fill="black" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        )

    return null;
}

export default MobileHeaderMenu;