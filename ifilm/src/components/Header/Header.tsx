import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGear, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="logo">IFilm</div>
            <div className="header_content">
                <div className="search">
                    <input className="search_input" type="text" />
                    <div className="search_icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <button className="search_btn">Search</button>
                </div>
                <div className="settings">
                    <span className="setting_icon">
                        <FontAwesomeIcon icon={faGear} />
                    </span>
                    <span className="setting_icon">
                        <FontAwesomeIcon icon={faBell} />
                    </span>
                </div>
                <div className="user">
                    <img src="./logo512.png" alt="" className="avatar" />
                    <span className="name">Quan</span>
                    <span className="user_icon">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
