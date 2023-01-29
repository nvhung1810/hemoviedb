import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import classNames from 'classnames/bind';
import styles from './Popular.module.scss';
import SlidebarPopular from './SlideBar';
import ContentPolular from './Content';
const cx = classNames.bind(styles);

function Popular() {
    return (
        <Box sx={{ flexGrow: 1 }} className={cx('box')}>
            <h2 className={cx('box__header')}>Popular Movies</h2>
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                <Grid xs={12} sm={12} md={2.5} lg={2.5} xl={2.5} className={cx('card__infomation')}>
                    <SlidebarPopular />
                </Grid>
                <Grid xs={12} sm={12} md={9.5} lg={9.5} xl={9.5} className={cx('container')}>
                    <ContentPolular />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Popular;
