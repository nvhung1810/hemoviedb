import * as React from 'react';

import classNames from 'classnames/bind';
import styles from './../../Main.module.scss';
import TabUI from '~/components/ui/components/Tab/_index';

const cx = classNames.bind(styles);

function SocialOverview() {
    return (
        <div className={cx('social')}>
            <TabUI
                header="Social"
                border="noBorder"
                list={[
                    {
                        title: <div className={cx('header__tabOverview')}>Reviews 0 </div>,
                        content: (
                            <div className={cx('social__title')}>
                                We don't have any reviews for Mèo Đi Hia: Điều Ước Cuối Cùng.
                            </div>
                        ),
                    },
                    {
                        title: <div className={cx('header__tabOverview')}>Discussions 4</div>,
                        content: (
                            <div className={cx('social__title')}>
                                There are no discussions for Mèo Đi Hia: Điều Ước Cuối Cùng. Login to be first!
                            </div>
                        ),
                    },
                ]}
            />
        </div>
    );
}

export default SocialOverview;
