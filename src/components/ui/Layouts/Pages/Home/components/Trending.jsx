import classNames from 'classnames/bind';
import { GetApiPopular } from '~/components/logic/getApi';
import CardStyles1 from '~/components/ui/components/CardStyles/CardStyles1';
import HeaderStyles1 from '~/components/ui/components/Header/HeaderStyles1';
import TabEdit from '~/components/ui/components/Tab/tabEdit';
import styles from './../Home.module.scss';

const cx = classNames.bind(styles);

function Trending() {
    const results = GetApiPopular();
    return (
        <div className={cx('trending')}>
            <TabEdit
                title={<HeaderStyles1 title="Today" />}
                content={
                    <div className={cx('trending__content')}>
                        <CardStyles1 size="small" list={results} small />
                        <div className={cx('shadow')}></div>
                    </div>
                }
            />
            {/* <TabUIPrimary
                header="Trending"
                list={[
                    {
                        label: 'Today',
                        total: 0,
                        valueData: '1',
                        content: (
                            
                        ),
                    },
                    {
                        label: 'This Week ',
                        total: 4,
                        valueData: '2',
                        content: (
                            <div className={cx('social__title')}>
                                There are no discussions for Mèo Đi Hia: Điều Ước Cuối Cùng. Login to be first!
                            </div>
                        ),
                    },
                ]}
            /> */}
        </div>
    );
}

export default Trending;
