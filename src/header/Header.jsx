import React from 'react';
import './header.styles.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import FourmIcon from '@material-ui/icons/ExpandMore';
import NotificationActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Header() {
    return (
        <div className="header">
            <div className="header__left">
               <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                    alt=""
                /> 
            </div>
            <div className="header__input">
                <SearchIcon />
                <input placeholder="search Facebook" type="text" />
            </div>    
            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large"/>
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>mostafa</h4>
                    <IconButton>
                        <AddIcon />
                    </IconButton>
                    <IconButton>
                        <FourmIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationActiveIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon/>
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default Header
