import { MenuNav } from '../../components/Menu/MenuNav';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('nav')}>
                <a href="/" className={cx('link__logo')}>
                    <img
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                        alt="logo"
                        className={cx('logo')}
                    ></img>
                </a>
                <ul className={cx('nav__list')}>
                    <li className={cx('nav__item')}>
                        <span className={cx('nav__item--title')}>Movies</span>
                        <div className={cx('item__menu')}>
                            <MenuNav />
                        </div>
                    </li>

                    <li className={cx('nav__item')}>
                        <span className={cx('nav__item--title')}>TV Shows</span>
                    </li>
                    <li className={cx('nav__item')}>
                        <span className={cx('nav__item--title')}>People</span>
                    </li>
                    <li className={cx('nav__item')}>
                        <span className={cx('nav__item--title')}>More</span>
                    </li>
                </ul>
            </div>
            <div className={cx('manipulation')}>
                <div className={cx('icon__plus')}>
                    <i className={cx('fa-solid fa-plus ')}></i>
                    {/* <ShowMenuPlus /> */}
                </div>
                <div className={cx('change__languages')}>
                    <span className={cx('text')}>VI</span>
                </div>
                <div className={cx('login')}>Login</div>
                <div className={cx('register')}>Register TMDB</div>
                <div className={cx('icon__search')}>
                    <i className={cx('fa-solid fa-magnifying-glass')}></i>
                </div>
            </div>
        </header>
    );
}

export default Header;
