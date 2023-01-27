import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import classNames from 'classnames/bind';
import styles from './Popular.module.scss';
import SlidebarPopular from './SlideBar';
import ContentPolular from './Content';

import { useState, useEffect } from 'react';
import axios from 'axios';

const cx = classNames.bind(styles);

function Popular() {
    const [getAPI, setAPI] = useState([]);
    useEffect(() => {
        axios
            .get(
                'https://api.themoviedb.org/3/movie/popular?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1',
            )
            .then(function (response) {
                setAPI(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }} className={cx('box')}>
            <h2 className={cx('box__header')}>Popular Movies</h2>
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                <Grid xs={12} sm={6} md={6} lg={2.5} xl={3} className={cx('card__infomation')}>
                    <SlidebarPopular />
                </Grid>
                <Grid xs={12} sm={6} md={6} lg={9.5} xl={3} className={cx('container')}>
                    {/* cần check nếu là rỗng thì ko truyền */}
                    <ContentPolular results={getAPI} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Popular;
