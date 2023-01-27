import classNames from 'classnames/bind';
import styles from './HeaderStyles.module.scss';

const cx = classNames.bind(styles);

function HeaderStyles2({ title }) {
    return (
        <h3 dir="auto" className={cx('hdstyles2')}>
            {title}
        </h3>
    );
}

export default HeaderStyles2;
