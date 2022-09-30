import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

import "./FilmItems.scss";

interface Props {
    film: any;
}

const FilmItems: React.FC<Props> = (props) => {
    const { film } = props;
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    const imgElement = useRef<any>();

    const handleOnclick = (slug: string) => {
        return navigate(`/film/${slug}`);
    };

    const handleLoading = () => {
        imgElement.current.classList.remove("hide");
        setLoading(false);
    };

    return (
        <div className="film-items" onClick={() => handleOnclick(film.slug)}>
            <img
                className="image hide"
                src={film.thumb_url}
                alt={film.name}
                onLoad={() => {
                    handleLoading();
                }}
                onError={() => {
                    handleLoading();
                }}
                ref={imgElement}
            />

            {loading && <Skeleton className="image" variant="rectangular" animation="wave" />}
            <div className="content">
                <p className="name">{film.name}</p>
                <p className="year">{film.year}</p>
            </div>
        </div>
    );
};

export default FilmItems;
