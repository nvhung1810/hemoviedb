import classNames from 'classnames/bind';
import styles from './../../Main.module.scss';

// ----------------------------------------------------------------
import CardStyles4 from '~/components/ui/components/CardStyles/CardStyles4';
import HeaderStyles2 from '~/components/ui/components/Header/HeaderStyles2';

const cx = classNames.bind(styles);

function Recommendations() {
    return (
        <div className={cx('recommendations')}>
            <HeaderStyles2 title="Recommendations" />
            <CardStyles4 />
        </div>
    );
}

export default Recommendations;
