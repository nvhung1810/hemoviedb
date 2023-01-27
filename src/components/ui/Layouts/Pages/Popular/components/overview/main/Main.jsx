import axios from 'axios';
import { useEffect, useState } from 'react';
import Cast from './components/Cast';
import Collection from './components/Collection';
import HeaderMainOverview from './components/Header';
import Media from './components/Media';
import NavbarOverview from './components/NavbarOverview';
import Recommendations from './components/Recommendations';
import Social from './components/Social';

function MainPopularOverview() {
    let local = window.localStorage.getItem('idMovies');

    const dataLocal = JSON.parse(local);
    const idMovies = Number(dataLocal);
    const [isAPIMoviePopular, setIsAPIMoviePopular] = useState([]);
    const [isAPIMovieCast, setIsAPIMovieCast] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${idMovies}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`,
            )
            .then(function (response) {
                setIsAPIMoviePopular(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios
            .get(`http://api.themoviedb.org/3/movie/${idMovies}/casts?api_key=e9e9d8da18ae29fc430845952232787c`)
            .then(function (response) {
                setIsAPIMovieCast(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <NavbarOverview />
            <HeaderMainOverview listData={isAPIMoviePopular} listCast={isAPIMovieCast} />
            {isAPIMovieCast === undefined || null ? '' : <Cast listData={isAPIMovieCast} />}
            <Social />
            <Media />
            <Collection />
            <Recommendations />
        </div>
    );
}

export default MainPopularOverview;
