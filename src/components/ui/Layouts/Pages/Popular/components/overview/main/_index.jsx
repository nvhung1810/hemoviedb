import axios from 'axios';
import { useEffect, useState } from 'react';
import HeaderMainOverview from './components/Header/_index';
import Cast from './components/Contents/Cast';
import Collection from './components/Contents/Collection';
import Media from './components/Contents/Media';
import NavbarOverview from './components/Contents/NavbarOverview';
import Recommendations from './components/Contents/Recommendations';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import SideBarMainOverviewPopular from './components/SideBar/_index';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import SocialOverview from './components/Contents/SocialOverview';

const cx = classNames.bind(styles);

function MainPopularOverview() {
    let local = window.localStorage.getItem('idMovies');

    const dataLocal = JSON.parse(local);
    const idMovies = Number(dataLocal);
    const [isDetailsMovies, setIsDetailsMovies] = useState([]);
    const [isAPIMovieCast, setIsAPIMovieCast] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/${idMovies}?api_key=e9e9d8da18ae29fc430845952232787c&append_to_response=videos`,
            )
            .then(function (response) {
                setIsDetailsMovies(response.data);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <NavbarOverview />
            {isDetailsMovies.length === 0 && isAPIMovieCast.length === 0 ? (
                ''
            ) : (
                <HeaderMainOverview listData={isDetailsMovies} listCast={isAPIMovieCast} />
            )}
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    spacing={{ xs: 1, md: 1 }}
                    columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}
                    className={cx('contents')}
                >
                    <Grid xs={12} sm={12} md={9} lg={8} xl={7.3}>
                        <div>
                            {isAPIMovieCast.length === 0 ? '' : <Cast listData={isAPIMovieCast} />}
                            <SocialOverview />
                            <Media />
                            <Collection />
                            <Recommendations />
                        </div>
                    </Grid>
                    <Grid xs={12} sm={12} md={3} lg={3} xl={3}>
                        <SideBarMainOverviewPopular />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default MainPopularOverview;
