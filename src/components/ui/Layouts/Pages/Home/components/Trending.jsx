import classNames from 'classnames/bind';
import { GetApiPopular } from '~/components/logic/getApi';
import CardStyles1 from '~/components/ui/components/CardStyles/CardStyles1';
import CardStylesHeader from '~/components/ui/components/Header/HeaderStyles1';
import styles from './../Home.module.scss';

const cx = classNames.bind(styles);

function Trending() {
    const results = GetApiPopular();

    return (
        <div className={cx('trending')}>
            <div className={cx('trending__header')}>
                <CardStylesHeader selectorDark />
            </div>

            <div className={cx('trending__content')}>
                <CardStyles1 size="small" list={results} small />
                <div className={cx('shadow')}></div>
            </div>
        </div>
    );
}

export default Trending;
