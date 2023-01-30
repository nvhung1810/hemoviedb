import classNames from 'classnames/bind';
import styles from './../../../Main.module.scss';
const cx = classNames.bind(styles);

function CardPoster({ srcImg, altImg }) {
    return (
        <div className={cx('media__poster')}>
            <img className={cx('media__poster')} src={srcImg} alt={altImg} />
        </div>
    );
}

export default CardPoster;
