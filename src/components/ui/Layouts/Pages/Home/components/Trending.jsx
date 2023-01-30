import axios from 'axios';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { GetApiPopular } from '~/components/logic/getApi';
import CardStyles1 from '~/components/ui/components/CardStyles/CardStyles1';
import HeaderStyles1 from '~/components/ui/components/Header/HeaderStyles1';
import TabUI from '~/components/ui/components/Tab/_index';
import styles from './../Home.module.scss';

const cx = classNames.bind(styles);

function Trending() {
    const [isDataDay, setIsDataDay] = useState([]);
    const [isDataThisWeek, setIsDataThisWeek] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/trending/movie/day?api_key=5805c824a6a796dd7b66b4d53e70d510')
            .then(function (response) {
                setIsDataDay(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios
            .get('https://api.themoviedb.org/3/trending/movie/week?api_key=5805c824a6a796dd7b66b4d53e70d510')
            .then(function (response) {
                setIsDataThisWeek(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const results = GetApiPopular();
    return (
        <div className={cx('trending')}>
            <TabUI
                header="Trending"
                themeTab="activeTabDark"
                list={[
                    {
                        title: <HeaderStyles1 title="Today" />,
                        content: (
                            <div className={cx('trending__content')}>
                                {isDataDay.length === 0 ? '' : <CardStyles1 size="small" list={isDataDay} small />}
                                <div className={cx('shadow')}></div>
                            </div>
                        ),
                    },
                    {
                        title: <HeaderStyles1 title="This Week" />,
                        content: (
                            <div className={cx('trending__content')}>
                                {isDataThisWeek.length === 0 ? (
                                    ''
                                ) : (
                                    <CardStyles1 size="small" list={isDataThisWeek} small />
                                )}
                                <div className={cx('shadow')}></div>
                            </div>
                        ),
                    },
                ]}
            />
        </div>
    );
}

export default Trending;
