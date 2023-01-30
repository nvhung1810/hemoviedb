import classNames from 'classnames/bind';
import styles from './CardStyles.module.scss';

const cx = classNames.bind(styles);

function CardStyles4() {
    // cdstyle4 --> card styles 4
    return (
        <div className={cx('cdstl4')}>
            <div className={cx('cdstl4__content')}>
                <div>
                    <img
                        loading="lazy"
                        className={cx('cdstl4__backdrop')}
                        src="https://www.themoviedb.org/t/p/w250_and_h141_face/c1bz69r0v065TGFA5nqBiKzPDys.jpg"
                        // srcset="/t/p/w250_and_h141_face/c1bz69r0v065TGFA5nqBiKzPDys.jpg 1x, /t/p/w500_and_h282_face/c1bz69r0v065TGFA5nqBiKzPDys.jpg 2x"
                        alt="Lyle, Lyle, Crocodile"
                    />
                </div>
            </div>
            <div className={cx('cdstl4__movie')}>
                <div
                    className={cx('cdstl4__title')}
                    href="/movie/830784"
                    title="Lyle, Lyle, Crocodile"
                    alt="Lyle, Lyle, Crocodile"
                >
                    <bdi>Lyle, Lyle, Crocodile</bdi>
                </div>
                <span className={cx('cdstl4__voteAverage')}>77%</span>
            </div>
        </div>
    );
}

export default CardStyles4;
