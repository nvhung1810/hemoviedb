import classNames from 'classnames/bind';
import styles from './Popular.module.scss';
import React from 'react';
const cx = classNames.bind(styles);

function SlidebarPopular() {
    // SlidebarPopular => sp
    return (
        <div className={cx('sp__wrapper')}>
            <div className={cx('sp__wrap')}>
                <span className={cx('sp__name')}>Sort</span>
                <div className={cx('sp__icon')}>
                    <span className={cx('glyphicons_v2')}></span>
                </div>
                {/* <ul>
                    <li></li>
                </ul> */}
            </div>
        </div>
    );
}

export default SlidebarPopular;
