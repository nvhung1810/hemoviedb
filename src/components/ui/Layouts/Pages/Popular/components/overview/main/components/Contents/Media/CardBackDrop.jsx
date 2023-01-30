import classNames from 'classnames/bind';
import styles from './../../../Main.module.scss';
const cx = classNames.bind(styles);

function CardBackDrop({ srcImg, altImg }) {
    return (
        <div className={cx('media__backdrop')}>
            <img loading="lazy" className={cx('media__backdrop')} src={srcImg} alt={altImg} />
        </div>
    );
}

export default CardBackDrop;
