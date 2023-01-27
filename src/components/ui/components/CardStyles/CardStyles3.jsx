import classNames from 'classnames/bind';
import { srcImgSmall, srcSetImgSmall } from '~/components/logic/linkOverviewMovie';
import styles from './CardStyles.module.scss';

const cx = classNames.bind(styles);

function CardStyles3(listData) {
    const { listCast } = listData;
    return (
        <>
            {listCast.map((item) => (
                <li className={cx('cdstl3')} key={item.id}>
                    <a className={cx('cdstl3__link')} href="/person/3131-antonio-banderas">
                        <img
                            loading="lazy"
                            className={cx('cdstl3__profile')}
                            src={srcImgSmall(item.profile_path)}
                            srcSet={srcSetImgSmall(item.profile_path)}
                            alt={item.name}
                        />
                    </a>

                    <p className={cx('cdstl3__name')}>
                        <a href="/person/3131-antonio-banderas">{item.name}</a>
                    </p>
                    <p className={cx('cdstl3__charector')}>{item.character}</p>
                </li>
            ))}
        </>
    );
}

export default CardStyles3;
