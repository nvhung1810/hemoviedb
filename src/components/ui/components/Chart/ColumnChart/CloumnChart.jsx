import classNames from 'classnames/bind';
import styles from './CloumnChart.module.scss';
const cx = classNames.bind(styles);

function ColumnChart() {
    return (
        <div className={cx('column_wrapper')}>
            <div className={cx('content_wrapper')}>
                <div className={cx('column')}>
                    <div className={cx('column_content')}>
                        <ol className={cx('leaderboard')}>
                            <li className={cx('leaderboard__item')}>
                                <span className={cx('avatar')}>
                                    <a className={cx('avatar__link')} href="/u/marsters">
                                        <span className={cx('round')}>m</span>
                                    </a>
                                </span>

                                <div className={cx('data')}>
                                    <h3 className={cx('data__name')}>
                                        <a href="/u/marsters">marsters</a>
                                    </h3>
                                    <div className={cx('meter__all')}>
                                        <div className={cx('gauge')}></div>
                                        <h4 className={cx('number')}>91975</h4>
                                    </div>
                                    <div className={cx('meter__this--week')}>
                                        <div className={cx('gauge1')}></div>
                                        <h4 className={cx('number')}>47712</h4>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColumnChart;
