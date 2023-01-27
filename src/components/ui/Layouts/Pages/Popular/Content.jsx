import CardStyles1 from '~/components/ui/components/CardStyles/CardStyles1';

import classNames from 'classnames/bind';
import styles from './Popular.module.scss';

const cx = classNames.bind(styles);

function ContentPolular(props) {
    let results = props.results;
    // ContentPolular -> cp
    return (
        <div className={cx('cp__wrapper')}>
            <div className={cx('cp__list')}>
                <CardStyles1 list={results} medium />
            </div>
        </div>
    );
}

export default ContentPolular;
