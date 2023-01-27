import classNames from 'classnames/bind';
import styles from './CloumnChart.module.scss';
const cx = classNames.bind(styles);

function CloumnChartHeader() {
    return (
        <div className={cx('column_header')}>
            <h2 className={cx('header')}>Leaderboard</h2>
            <div>
                <div>
                    <span className={cx('dot__all')}></span> All Time Edits
                </div>
                <div className={cx('mt4')}>
                    <span className={cx('this_week')}></span> Edits This Week
                </div>
            </div>
        </div>
    );
}

export default CloumnChartHeader;
