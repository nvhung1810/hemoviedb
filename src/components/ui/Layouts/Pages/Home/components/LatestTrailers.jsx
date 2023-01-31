import CardStyles2 from '~/components/ui/components/CardStyles/CardStyles2';
import classNames from 'classnames/bind';
import styles from './../Home.module.scss';
import TabUI from '~/components/ui/components/Tab/_index';
import HeaderStyles1 from '~/components/ui/components/Header/HeaderStyles1';

const cx = classNames.bind(styles);
function LatestTrailers() {
    return (
        <div className={cx('trailer')}>
            <div className={cx('trailer__wrap')}>
                <TabUI
                    header="Trending"
                    border="hasBorder"
                    themeTab="activeTabLight"
                    list={[
                        {
                            title: <HeaderStyles1 title="Latest Trailers" />,
                            content: (
                                <div className={cx('trailer__content')}>
                                    <CardStyles2 />
                                </div>
                            ),
                        },
                        {
                            title: <HeaderStyles1 title="This Week" />,
                            content: (
                                <div className={cx('trailer__content')}>
                                    <CardStyles2 />
                                </div>
                            ),
                        },
                    ]}
                />
            </div>
        </div>
    );
}

export default LatestTrailers;
