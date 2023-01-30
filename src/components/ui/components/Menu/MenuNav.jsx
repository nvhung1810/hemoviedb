import classNames from 'classnames/bind';
import styles from './MenuNav.module.scss';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

function MenuNav() {
    return (
        <div className={cx('nav__item--menu')}>
            <ul className={cx('menu__list')}>
                <li className={cx('menu__item')}>
                    <NavLink to={'/movie'}>Popular</NavLink>
                </li>
                <li className={cx('menu__item')}>Now playing</li>
                <li className={cx('menu__item')}>Upcoming</li>
                <li className={cx('menu__item')}>Top Rate</li>
            </ul>
        </div>
    );
}

function ShowMenuPlus() {
    return (
        <div className={cx('show__plus')}>
            <div className={cx('card')}></div>
            <span className={cx('discription')}>Can't find a movie or TV show? Login to create it.</span>
        </div>
    );
}

export default ShowMenuPlus;

export { MenuNav, ShowMenuPlus };
