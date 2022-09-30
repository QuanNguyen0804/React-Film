import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

import "./Details.scss";
// import { Film } from "../interface";
import { filmDetail } from "../services/filmAPI";
import FilmContainer from "../components/FilmContainer/FilmContainer";
import Button from "../components/Button/Button";

const Details = () => {
    const param = useParams();
    const slug: string = param.slug || "";

    const [film, setFilm] = useState<any>({});
    const [episode, setEpisode] = useState<number>(0);
    const [episodes, setEpisodes] = useState<any>({});

    useEffect(() => {
        const getFilmDetails = async () => {
            const filmDetails: any = await filmDetail(slug);
            const ep = filmDetails.episodes[0];

            setFilm(filmDetails.movie);
            setEpisodes(ep);
        };

        getFilmDetails();
    }, [slug]);

    const handleChangeEpisode = (epis: number) => {
        setEpisode(epis);
    };

    return (
        <FilmContainer>
            {film && (
                <div className="film">
                    <div className="film-image">
                        <img className="image" src={film.thumb_url} alt={film.name} />
                    </div>
                    <div className="film-info">
                        <h1 className="film-name">{film.name ? <strong>{film.name}</strong> : <Skeleton />}</h1>

                        <p className="describe" dangerouslySetInnerHTML={{ __html: film.content }} />
                        <div className="time">
                            <strong>time:</strong> {film.time}
                        </div>
                        <div className="autors">
                            <p>
                                <strong>autor: </strong>
                            </p>
                            {film.actor &&
                                film.actor.map((a: any, index: number) => {
                                    return <Button key={index}>{a}</Button>;
                                })}
                        </div>
                        <div className="status">
                            <strong>Status:</strong> {film.episode_current}
                        </div>
                        <div>
                            <strong>Type:</strong> {film.type}
                        </div>
                    </div>
                </div>
            )}

            {episodes.server_data && (
                <div className="episodes-content">
                    <div className="episodes">
                        {episodes.server_data.map((ser: any, index: number) => {
                            return (
                                <button
                                    className={index == episode ? "episode active" : "episode"}
                                    onClick={() => handleChangeEpisode(index)}
                                    key={index}
                                >
                                    episode {ser.name}
                                </button>
                            );
                        })}
                    </div>

                    <h4 className="video-name">{episodes.server_data[episode]?.filename}</h4>
                    <div className="video">
                        {episodes.server_data[episode]?.link_embed ? (
                            <iframe src={episodes.server_data[episode]?.link_embed} allowFullScreen loading="lazy" />
                        ) : (
                            <Skeleton className="video-loading" variant="rectangular" />
                        )}
                    </div>
                </div>
            )}
        </FilmContainer>
    );
};

export default Details;
