import classNames from 'classnames/bind';
import styles from './../../Main.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <li className={cx('profile')}>
            <p className={cx('profile__name')}>
                <a href="/person/12965-tommy-swerdlow">Tommy Swerdlow</a>
            </p>
            <p className={cx('profile__character')}>Screenplay, Story</p>
        </li>
    );
}

export default Profile;
