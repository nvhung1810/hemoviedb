import classNames from 'classnames/bind';
import { dataSrcMedium, dataSrcSetMedium, srcMedium, srcSetMedium } from '~/components/logic/linkOverviewMovie';
import styles from './../../Main.module.scss';

const cx = classNames.bind(styles);

function Poster({ poster, title }) {
    return (
        <div className={cx('poster')}>
            <div className={cx('poster__image')}>
                <img
                    className={cx('poster__img')}
                    src={srcMedium(poster)}
                    data-src={dataSrcMedium(poster)}
                    data-srcset={dataSrcSetMedium(poster)}
                    alt={title}
                    srcSet={srcSetMedium(poster)}
                    data-loaded="true"
                />
            </div>
        </div>
    );
}

export default Poster;
