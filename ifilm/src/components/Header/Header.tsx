import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="logo">IFilm</div>
            <div className="search">
                <input className="search_input" type="text" />
                <div className="search_icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
            <div className="menu">Menu</div>
        </div>
    );
};

export default Header;
