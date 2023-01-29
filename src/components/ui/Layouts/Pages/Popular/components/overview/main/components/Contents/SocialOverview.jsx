import * as React from 'react';

import classNames from 'classnames/bind';
import styles from './../../Main.module.scss';
import TabUI from '~/components/ui/components/Tab/TabUI';

const cx = classNames.bind(styles);

function SocialOverview() {
    return (
        <div className={cx('social')}>
            <TabUI
                header="Social"
                listTitle={[
                    {
                        id: 1,
                        label: 'review',
                        valueTab: '1',
                        totalResult: 0,
                        content: <div>We don't have any reviews for Mèo Đi Hia: Điều Ước Cuối Cùng.</div>,
                    },
                    {
                        id: 2,
                        label: 'Discussions',
                        valueTab: '2',
                        totalResult: 4,
                        content: (
                            <div>There are no discussions for Mèo Đi Hia: Điều Ước Cuối Cùng. Login to be first!</div>
                        ),
                    },
                ]}
            />
        </div>
    );
}

export default SocialOverview;
