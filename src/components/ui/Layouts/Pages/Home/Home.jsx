import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Introduce from './components/Introduce';
import LatestTrailers from './components/LatestTrailers';
import LeaderBoard from './components/Leaderboard';
import TheBestMovie from './components/TheBest';
import Trending from './components/Trending';
import PopularHome from './components/Popular';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home')}>
            <Introduce />
            <TheBestMovie />
            <div className={cx('home__content')}>
                <Trending />
                <LatestTrailers />
                <PopularHome />
                <LeaderBoard />
            </div>
        </div>
    );
}

export default Home;
