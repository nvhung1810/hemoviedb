import classNames from 'classnames/bind';
import styles from './../../Main.module.scss';

import { useState } from 'react';
import TabUI from '~/components/ui/components/Tab/_index';
// import VideoModal from '~/components/ui/components/Modal/modalVideo/VideoModal';
import CardMedia from './Media/CardMedia';
import CardBackDrop from './Media/CardBackDrop';
import CardPoster from './Media/CardPoster';

const cx = classNames.bind(styles);
function Media() {
    const [isOpen, setOpen] = useState(false);

    const handleShowVideo = () => {
        setOpen(!isOpen);
    };

    return (
        <div className={cx('media')}>
            <TabUI
                header="Media"
                list={[
                    {
                        label: 'Most Popular',
                        total: 0,
                        valueData: '1',
                        content: (
                            <div id="media_scroller" className={cx('media__wrap')}>
                                <div className={cx('media__content')}>
                                    {/* CARD MEDIA */}
                                    <CardMedia dataID="abv" dataTitle="title" handleShowVideo={handleShowVideo} />
                                    {/* CARD BACKDROP */}
                                    <CardBackDrop
                                        srcImg="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/tGwO4xcBjhXC0p5qlkw37TrH6S6.jpg"
                                        altImg="Puss in Boots: The Last Wish"
                                    />
                                    <CardPoster
                                        srcImg="https://image.tmdb.org/t/p/w533_and_h300_bestv2//t/p/w220_and_h330_face/kuf6dutpsT0vSVehic3EZIqkOBt.jpg"
                                        altImg="Puss in Boots: The Last Wish"
                                    />
                                </div>
                            </div>
                        ),
                    },
                    {
                        label: 'Discussions ',
                        total: 4,
                        valueData: '2',
                        content: (
                            <div className={cx('social__title')}>
                                There are no discussions for Mèo Đi Hia: Điều Ước Cuối Cùng. Login to be first!
                            </div>
                        ),
                    },
                ]}
            />

            {/* <VideoModal isOpen={isOpen} close={handleShowVideo} keyVideo="RqrXhwS33yc" /> */}
        </div>
    );
}

export default Media;
