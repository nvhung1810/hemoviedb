import classNames from 'classnames/bind';
import styles from './../../Main.module.scss';
import CardStyles3 from '~/components/ui/components/CardStyles/CardStyles3';
import HeaderStyles2 from '~/components/ui/components/Header/HeaderStyles2';

const cx = classNames.bind(styles);
function Cast({ listData }) {
    const listCast = listData.cast;
    return (
        <div className={cx('cast')}>
            <HeaderStyles2 title="Top Billed Cast" />
            {listCast === undefined || null ? (
                ''
            ) : (
                <div className={cx('casd__wrap')}>
                    <CardStyles3 listCast={listCast} />
                </div>
            )}
            <p>
                <a className={cx('cast__link')} href="/movie/315162-puss-in-boots-the-last-wish/cast">
                    Full Cast &amp; Crew
                </a>
            </p>
        </div>
    );
}

export default Cast;
