import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { listFilm, filmDetail } from "../services/filmAPI";

import Pagination from "@mui/material/Pagination";
import FilmContainer from "..//components/FilmContainer/FilmContainer";
import { Film, Films } from "../interface";
import FilmItems from "../components/FilmItems/FilmItems";

import "./Home.scss";

const Home = () => {
    const [films, setFilms] = useState<any>(undefined);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

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
    };
    return (
        <div>
            <Header />

            <FilmContainer className={"content"}>
                {films &&
                    films.map((film: any, index: number) => {
                        return <FilmItems key={index} film={film} />;
                    })}
            </FilmContainer>

            <div className="pagination-page">
                <Pagination count={totalPages} page={page} onChange={handleChangePage} />
            </div>

            <Footer />
        </div>
    );
};

export default Home;
