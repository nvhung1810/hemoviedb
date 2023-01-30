import classNames from 'classnames/bind';
import styles from './HeaderStyles.module.scss';

const cx = classNames.bind(styles);

function HeaderStyles1({ selectorDark, selectorLight, className, title }) {
    const classes = cx('wrapper', {
        selectorDark,
        selectorLight,
        [className]: className,
    });

    return (
        <div className={cx('hdstyles1')}>
            <h3 className={cx('hdstyles1__change')}>
                <div href="#" className={cx('hdstyles1__link')} data-panel="trending_scroller" data-group="today">
                    {title}
                </div>
                <div className={cx('hdstyles1__background')}></div>
            </h3>
        </div>
    );
}

export default HeaderStyles1;
