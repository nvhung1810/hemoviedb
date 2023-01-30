import classNames from 'classnames/bind';
import styles from './../SideBar.module.scss';

const cx = classNames.bind(styles);

function CardProFile() {
    return (
        <div className={cx('cdProfile')}>
            <div className={cx('cdProfile__avatar')}>
                <a href="https://www.themoviedb.org/u/Sheigutn">
                    <img
                        loading="lazy"
                        className={cx('cdProfile__avatar')}
                        src="https://www.themoviedb.org/t/p/w90_and_h90_face/5BvxGhRE7yjtbHCXgrTxPk9hBXp.jpg"
                        alt="Sheigutn"
                    />
                </a>
            </div>
            <div className={cx('cdProfile__info')}>
                <p className={cx('cdProfile__edit')}>
                    719
                    <br />
                    <a href="https://www.themoviedb.org/u/Sheigutn">
                        <span className={cx('cdProfile__name')}>Sheigutn</span>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default CardProFile;
