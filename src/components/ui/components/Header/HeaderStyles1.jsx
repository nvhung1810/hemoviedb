import classNames from 'classnames/bind';
import styles from './HeaderStyles.module.scss';

const cx = classNames.bind(styles);

function HeaderStyles1({ selectorDark, selectorLight, className }) {
    const classes = cx('wrapper', {
        selectorDark,
        selectorLight,
        [className]: className,
    });

    return (
        <div className={cx('hdstyles1')}>
            <h2>Trending</h2>
            <div className={cx('hdstyles1__wrapper')}>
                <div className={classes}>
                    <div className={cx('hdstyles1__wrap')}>
                        <div className={cx('hdstyles1__anchor')}>
                            <h3 className={cx('hdstyles1__change')}>
                                <div
                                    href="#"
                                    className={cx('hdstyles1__link')}
                                    data-panel="trending_scroller"
                                    data-group="today"
                                >
                                    Today <span className={cx('hdstyles1__name')}></span>
                                </div>
                            </h3>
                            <div className={cx('hdstyles1__background')}></div>
                        </div>

                        <div className={cx('hdstyles1__anchor')}>
                            <h3 className={cx('hdstyles1__change')}>
                                <div
                                    href="#"
                                    className={cx('hdstyles1__link')}
                                    data-panel="trending_scroller"
                                    data-group="this-week"
                                >
                                    This Week <span className={cx('hdstyles1__name')}></span>
                                </div>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderStyles1;
