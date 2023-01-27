import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import styles from './HeaderStyles.module.scss';
const cx = classNames.bind(styles);

// hdstyles3 -> HeaderStyles3
function HeaderStyles3() {
    const [isSelect, setIsSelect] = useState(false);
    const [isItem, setIsItem] = useState();

    const handleClick = (e) => {
        setIsItem(e.target);
        setIsSelect(true);
    };

    useEffect(() => {
        if (isItem !== undefined) {
            if (isSelect === true) {
                isItem.classList.add(styles['active']);
            } else {
                isItem.classList.remove(styles['active']);
            }
        }
    });

    return (
        <div className={cx('hdstyles3')}>
            <div className={cx('hdstyles3__name')}>Social</div>
            <ul className={cx('hdstyles3__list')}>
                <li className={cx('hdstyles3__item')} onClick={handleClick}>
                    Review
                    <span className={cx('hdstyles3__number')}></span>
                </li>
                <li className={cx('hdstyles3__item')} onClick={handleClick}>
                    Discussions
                    <span className={cx('hdstyles3__number')}>0</span>
                </li>
            </ul>
        </div>
    );
}

export default HeaderStyles3;
