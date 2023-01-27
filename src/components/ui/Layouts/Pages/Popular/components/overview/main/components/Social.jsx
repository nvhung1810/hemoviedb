import classNames from 'classnames/bind';
import HeaderStyles3 from '~/components/ui/components/Header/HeaderStyles3';
import styles from './../Main.module.scss';

const cx = classNames.bind(styles);
function Social() {
    return (
        <div className={cx('social')}>
            <HeaderStyles3 />
            <div className={cx('social__description')}>
                Want to be notified when someone makes the first post? Yes, notify me!
            </div>
        </div>
    );
}

export default Social;
