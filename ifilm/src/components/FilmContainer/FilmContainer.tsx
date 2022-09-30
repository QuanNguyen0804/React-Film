import React from "react";
import "./FilmContainer.scss";

interface Props {
    className?: string;
    children: any;
}

const FilmContainer: React.FC<Props> = (props) => {
    const { children, className = "" } = props;

    const cName: string = `film-container ${className}`;

    return <div className={cName}>{children}</div>;
};

export default FilmContainer;
