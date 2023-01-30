import classNames from 'classnames/bind';
import styles from './../../../Main.module.scss';

const cx = classNames.bind(styles);

function CardMedia({ dataID, dataTitle, handleShowVideo }) {
    return (
        <div className={cx('media__video')} onClick={handleShowVideo}>
            <div className={cx('media__wrapper')}>
                <div className={cx('media__play_trailer')} data-site="YouTube" data-id={dataID} data-title={dataTitle}>
                    <div className={cx('media__background')}>
                        <span className={cx('media__play')}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardMedia;
