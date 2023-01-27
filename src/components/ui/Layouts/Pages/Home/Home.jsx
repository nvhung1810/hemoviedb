import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Introduce from './components/Introduce';
import LatestTrailers from './components/LatestTrailers';
import LeaderBoard from './components/Leaderboard';
import TheBestMovie from './components/TheBest';
import Trending from './components/Trending';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('home')}>
            <Introduce />
            <TheBestMovie />
            <Trending />
            <LatestTrailers />
            <LeaderBoard />
        </div>
    );
}

export default Home;
