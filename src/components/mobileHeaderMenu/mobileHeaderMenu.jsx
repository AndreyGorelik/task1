import React from 'react'
import "./mobileheadermenu.css"
import { mobileHeaderIcons } from '../../assets/images'
import { mobiledHeaderMenuConstants } from './constans'

const MobileHeaderMenu = ({ pageType }) => {

const {homePage, channelPage, videoPage, headerChannelTitle} = mobiledHeaderMenuConstants;

    if (pageType === homePage) {
        return (
            <div className="mobile-header-menu">
                <div className="mobile-header-menu__left">
                    <div className="logo-mobile">
                        <img src={mobileHeaderIcons.logoBlack} alt="logo" />
                    </div>

                </div>

                <div className="mobile-header-menu__right">
                    <div className="search-mobile">
                       {mobileHeaderIcons.searchMobile}
                    </div>

                    <div className="user-icon-mobile">
                        <button type="button">
                            <img src={mobileHeaderIcons.userPic} alt="userpic" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    if (pageType === channelPage) {
        return (
            <div className="mobile-header-menu">
                <div className="mobile-header-menu__left">
                    <div className="logo-mobile">
                        {mobileHeaderIcons.logoMobile}
                        <span className="header-channel-title">{headerChannelTitle}</span>
                    </div>
                </div>

                <div className="mobile-header-menu__right">
                    <div className="search-mobile">
                    {mobileHeaderIcons.search}
                    </div>

                    <div className="user-menu-mobile">
                        <button type="button">
                        {mobileHeaderIcons.menuMobile}
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    if (pageType === videoPage)
        return (
            <div className="mobile-header-menu">
                <div className="mobile-header-menu__left">
                    <div className="logo-mobile">
                        <img src={mobileHeaderIcons.logoBlack} alt="logo" />
                    </div>
                </div>

                <div className="mobile-header-menu__right">
                    <div className="search-mobile">
                        <button type="button">
                            {mobileHeaderIcons.search}
                        </button>
                    </div>

                    <div className="user-menu-mobile">
                        <button type="button">
                            {mobileHeaderIcons.menuMobile}
                        </button>
                    </div>
                </div>
            </div>
        )

    return null;
}

export default MobileHeaderMenu;