import classNames from 'classnames/bind';
import styles from './PieChart.module.scss';
import React from 'react';
// import 'react-circular-progressbar/dist/styles.css';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
// import 'react-sweet-progress/lib/style.css';

const cx = classNames.bind(styles);

function PieChart({ vote_average, big = false, small = false, medium = false }) {
    const classes = cx('wrapper', {
        big,
        small,
        medium,
    });

    return (
        <div className={classes}>
            <div className={cx('user_comp')}>
                <div className={cx('action_class')}>
                    <div className={cx('user_comp_step')}>
                        {vote_average === undefined || null ? (
                            ''
                        ) : (
                            <div className={cx('progressbar')}>
                                <CircularProgressbar
                                    className={cx('progressbar__circular')}
                                    value={vote_average * 10}
                                    styles={
                                        vote_average < 7
                                            ? buildStyles({ pathColor: 'rgb(210,213,49)' })
                                            : buildStyles({ pathColor: 'rgb(33,208,122)' })
                                    }
                                />
                                <div className={cx('progressbar_inside')}>
                                    <span className={cx('value__percent')}>{Math.floor(vote_average * 10)}</span>
                                    <span className={cx('percent')} style={{ fontSize: 'xx-small', color: 'white' }}>
                                        %
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PieChart;
