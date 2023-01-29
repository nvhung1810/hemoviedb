import classNames from 'classnames/bind';
import styles from './../../Main.module.scss';

const cx = classNames.bind(styles);

function NavbarOverview() {
    return (
        <div id="shortcut_bar_scroller" className={cx('scroller_wrap')}>
            <ul className={cx('dropdown_menu')} data-role="menu" tabIndex="0" role="menubar">
                <li className={cx('k-state-default')} aria-haspopup="true" role="menuitem">
                    <span className={cx('k-link')}>
                        Overview
                        <div className={cx('k-icon')}>
                            <i className={cx('fa-solid fa-sort-down')}></i>
                        </div>
                    </span>
                </li>
                <li className={cx('k-state-default')} aria-haspopup="true" role="menuitem">
                    <span className={cx('k-link')}>
                        Media
                        <div className={cx('k-icon')}>
                            <i className={cx('fa-solid fa-sort-down')}></i>
                        </div>
                    </span>
                </li>
                <li className={cx('k-state-default')} aria-haspopup="true" role="menuitem">
                    <span className={cx('k-link')}>
                        Fandom
                        <div className={cx('k-icon')}>
                            <i className={cx('fa-solid fa-sort-down')}></i>
                        </div>
                    </span>
                </li>
                <li aria-haspopup="true" className={cx('k-state-default')} role="menuitem">
                    <span className={cx('k-link')}>
                        Share
                        <div className={cx('k-icon')}>
                            <i className={cx('fa-solid fa-sort-down')}></i>
                        </div>
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default NavbarOverview;
