import classNames from 'classnames/bind';
import styles from './../../Main.module.scss';

const cx = classNames.bind(styles);

function Tooltip() {
    return (
        <li className={cx('tooltip')} title="Add to list" data-role="tooltip">
            <div className={cx('no_click')}>
                <i className={cx('fa-solid fa-list')}></i>
            </div>
        </li>
    );
}

export default Tooltip;
