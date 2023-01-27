import classNames from 'classnames/bind';
import ColumnChart from '~/components/ui/components/Chart/ColumnChart/CloumnChart';
import CloumnChartHeader from '~/components/ui/components/Chart/ColumnChart/CloumnChartHeader';
import styles from './../Home.module.scss';

const cx = classNames.bind(styles);

function LeaderBoard() {
    return (
        <div className={cx('wrapper__leaderboard')}>
            <CloumnChartHeader />
            <div className={cx('wrapper__chart')}>
                <div className={cx('chart')}>
                    <ColumnChart />
                </div>
                <div className={cx('chart')}>
                    <ColumnChart />
                </div>
                <div className={cx('chart')}>
                    <ColumnChart />
                </div>
                <div className={cx('chart')}>
                    <ColumnChart />
                </div>
                <div className={cx('chart')}>
                    <ColumnChart />
                </div>
                <div className={cx('chart')}>
                    <ColumnChart />
                </div>
            </div>
        </div>
    );
}

export default LeaderBoard;
