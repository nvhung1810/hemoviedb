import CardStyles1 from '~/components/ui/components/CardStyles/CardStyles1';

import classNames from 'classnames/bind';
import styles from './Popular.module.scss';
import { GetApiPopular } from '~/components/logic/getApi';

const cx = classNames.bind(styles);
// ContentPolular -> cp

function ContentPopular() {
    const listMoviesPopular = GetApiPopular();

    return (
        <div className={cx('cp__wrapper')}>
            <div className={cx('cp__list')}>
                {listMoviesPopular.length === 0 ? ' ' : <CardStyles1 list={listMoviesPopular} medium />}
            </div>
            <button className={cx('cp__button')}>Load More</button>
        </div>
    );
}

export default ContentPopular;
