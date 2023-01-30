import classNames from 'classnames/bind';
import styles from './../SideBar.module.scss';

const cx = classNames.bind(styles);
// cdIcon: cardIcon
function CardIcon({ background }) {
    return (
        <div className={cx('cdIcon')}>
            <a
                className={cx('cdIcon__link')}
                title="Visit Facebook"
                href="https://www.facebook.com/Pussinboots"
                target="_blank"
                rel="noopener noreferrer"
                data-role="tooltip"
            >
                <span className={cx('cdIcon__icon')} style={{ backgroundImage: `url(${background})` }}></span>
            </a>
        </div>
    );
}

export default CardIcon;
