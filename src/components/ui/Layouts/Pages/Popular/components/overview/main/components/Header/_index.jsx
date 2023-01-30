import PieChart from '~/components/ui/components/Chart/PieChart/PieChart';
import classNames from 'classnames/bind';
import styles from './../../Main.module.scss';

import { useState } from 'react';
import VideoModal from '~/components/ui/components/Modal/modalVideo/VideoModal';
import Poster from './Poster';
import Tooltip from './Tooltip';
import moment from 'moment/moment';
import Profile from './Profile';

const cx = classNames.bind(styles);

function HeaderMainOverview({ listData, listCast }) {
    const [isOpen, setOpen] = useState(false);
    const [isVideos, setIsVideos] = useState('');

    const handleShowVideo = () => {
        setOpen(!isOpen);
    };

    const getVideoTrailer = () => {
        const listVideoMovies = listData.videos;
        const listVideoTrailer = [];
        if (listVideoMovies === undefined) return;
        else {
            const listVideos = listVideoMovies.results;
            listVideos.forEach((item) => {
                const b = item.name.toLowerCase().includes('Trailer'.toLowerCase());
                if (b === true) listVideoTrailer.push(item);
                else return;
            });
        }
        const timeTotal = [];
        listVideoTrailer.forEach((item) => {
            timeTotal.push({
                timeCompareWithCurrentTime: Number(
                    moment(item.published_at, 'YYYYMDD')
                        .fromNow()
                        .replace(/[^0-9]/g, ''),
                ),
                value: item,
            });
        });
        const minTime = Math.min(...timeTotal.map((element) => element.timeCompareWithCurrentTime));
        let resultsDataTime;

        timeTotal.forEach((item) => {
            if (item.timeCompareWithCurrentTime === minTime) resultsDataTime = item.value;
            else return;
        });
        return resultsDataTime;
    };

    const videoTrailerNearCurrentTime = getVideoTrailer();

    const linkBackDropPath = (backdrop_path) => {
        return `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`;
    };
    return (
        <div
            className={cx('hdoverview')}
            style={{ backgroundImage: `url(${linkBackDropPath(listData.backdrop_path)})` }}
        >
            <div className={cx('hdoverview__keyboard')}>
                <div className={cx('hdoverview__column')}>
                    <section className={cx('images')}>
                        <div className={cx('poster_wrapper')}>
                            <Poster poster={listData.poster_path} title={listData.original_title} />
                        </div>

                        <div className={cx('header_poster_wrapper ')}>
                            <section className={cx('header__poster')}>
                                <div className={cx('title')} dir="auto">
                                    <h2 className={cx('name__header')}>
                                        <a
                                            className={cx('link__name')}
                                            href="/movie/315162-puss-in-boots-the-last-wish"
                                        >
                                            {listData.original_title}
                                        </a>
                                        <span className={cx('tag')}>({moment(listData.release_date).year()})</span>
                                    </h2>

                                    <div className={cx('facts')}>
                                        <span className={cx('certification')}>PG</span>

                                        <span className={cx('release')}>{listData.release_date} (US)</span>

                                        {/* {listData.genres.map((item) => (
                                            <span className={cx('genres')} key={item.id}>
                                                <a href="/genre/16-animation/movie">{item.name}</a>,&nbsp;
                                            </span>
                                        ))} */}

                                        <span className={cx('runtime')}>1h 43m</span>
                                    </div>
                                </div>

                                <ul className={cx('auto')}>
                                    <li className={cx('chart')}>
                                        <div className={cx('pie')}>
                                            <PieChart vote_average={listData.vote_average} big />
                                        </div>
                                        <div className={cx('text')}>
                                            User
                                            <br />
                                            Score
                                        </div>
                                    </li>
                                    <Tooltip />
                                    <li className={cx('video')} onClick={handleShowVideo}>
                                        <div className={cx('no_click--play')}>
                                            <i className={cx('fa-solid fa-play')}></i>
                                        </div>
                                        <span
                                            className={cx('play')}
                                            onClick={() => {
                                                setIsVideos(videoTrailerNearCurrentTime.key);
                                            }}
                                        >
                                            Play Trailer
                                        </span>
                                    </li>
                                </ul>

                                <div className={cx('header_info')}>
                                    <h3 className={cx('tagline')} dir="auto">
                                        {listData.tagline}
                                    </h3>
                                    <h3 dir="auto">Overview</h3>
                                    <div className={cx('overview')} dir="auto">
                                        <p>{listData.overview}</p>
                                    </div>

                                    <ol className={cx('people')}>
                                        <Profile />
                                    </ol>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
            <div>
                {isVideos === '' ? '' : <VideoModal isOpen={isOpen} close={handleShowVideo} keyVideo={isVideos} />}
            </div>
        </div>
    );
}

export default HeaderMainOverview;
