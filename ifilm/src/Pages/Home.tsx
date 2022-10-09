import { useEffect, useState, useRef } from "react";

import FilmContainer from "..//components/FilmContainer/FilmContainer";
import FilmItems from "../components/FilmItems/FilmItems";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import { listFilm, filmDetail } from "../services/filmAPI";

import Pagination from "@mui/material/Pagination";
import { Film, Films } from "../interface";

import "./Home.scss";

const Home = () => {
    const [films, setFilms] = useState<any>(undefined);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const filmContainerRef: any = useRef(null);

    useEffect(() => {
        const getListFilm = async (page: number) => {
            const filmsData: Films = await listFilm(page);
            setTotalPages(filmsData.pagination.totalPages);
            setFilms([...filmsData.items]);
        };

        getListFilm(page);
    }, [page]);

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scrollTo(0, 0);
        if (filmContainerRef && filmContainerRef.current) filmContainerRef.current.scrollTo(0, 0);
    };
    return (
        <div className="container">
            <Header />

            <div className="main">
                <Sidebar />
                <FilmContainer ref={filmContainerRef} className={"content"}>
                    {films &&
                        films.map((film: any, index: number) => {
                            return <FilmItems key={index} film={film} />;
                        })}
                </FilmContainer>
            </div>
            <div className="pagination-page">
                <Pagination count={totalPages} page={page} onChange={handleChangePage} />
            </div>

            <Footer />
        </div>
    );
};

export default Home;
