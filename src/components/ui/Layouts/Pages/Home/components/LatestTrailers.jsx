import CardStyles2 from '~/components/ui/components/CardStyles/CardStyles2';
import CardStylesHeader from '~/components/ui/components/Header/HeaderStyles1';
import classNames from 'classnames/bind';
import styles from './../Home.module.scss';

const cx = classNames.bind(styles);
function LatestTrailers() {
    return (
        <div className={cx('trailer')}>
            <div className={cx('trailer__wrap')}>
                <div className={cx('trailer__header')}>
                    <CardStylesHeader selectorLight />
                </div>
                <div className={cx('trailer__content')}>
                    <CardStyles2 />
                </div>
            </div>
        </div>
    );
}

export default LatestTrailers;
