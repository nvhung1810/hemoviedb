import classNames from 'classnames/bind';
import styles from './../SideBar.module.scss';

const cx = classNames.bind(styles);

function CardDescription({ header, description }) {
    return (
        <p className={cx('cdDescription')}>
            <strong className={cx('cdDescription__strong')}>{header}</strong>
            {description}
        </p>
    );
}

export default CardDescription;
