import HeaderStyles2 from '../../../../../../../components/Header/HeaderStyles3';
import classNames from 'classnames/bind';
import styles from './../Main.module.scss';

import { useState } from 'react';
import VideoModal from '~/components/ui/components/Modal/modalVideo/VideoModal';

const cx = classNames.bind(styles);
function Media() {
    const [isOpen, setOpen] = useState(false);

    const handleShowVideo = () => {
        setOpen(!isOpen);
    };
    return (
        <div className={cx('media')}>
            <HeaderStyles2 />
            <div id="media_scroller" className={cx('media__wrap')}>
                <div className={cx('media__content')}>
                    <div className={cx('media__video')} onClick={handleShowVideo}>
                        <div className={cx('media__wrapper')}>
                            <div
                                className={cx('media__play_trailer')}
                                href="/video/play?key=xgZLXyqbYOc"
                                data-site="YouTube"
                                data-id="xgZLXyqbYOc"
                                data-title="Official Trailer"
                            >
                                <div className={cx('media__background')}>
                                    <span className={cx('media__play')}></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('media__backdrop')}>
                        <img
                            loading="lazy"
                            className={cx('media__backdrop')}
                            src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/tGwO4xcBjhXC0p5qlkw37TrH6S6.jpg"
                            // srcset="/t/p/w533_and_h300_bestv2/tGwO4xcBjhXC0p5qlkw37TrH6S6.jpg 1x, /t/p/w1066_and_h600_bestv2/tGwO4xcBjhXC0p5qlkw37TrH6S6.jpg 2x"
                            alt="Puss in Boots: The Last Wish"
                        />
                    </div>

                    <div className={cx('media__poster')}>
                        <img
                            className={cx('media__poster')}
                            src="https://image.tmdb.org/t/p/w533_and_h300_bestv2//t/p/w220_and_h330_face/kuf6dutpsT0vSVehic3EZIqkOBt.jpg"
                            // srcset="/t/p/w220_and_h330_face/kuf6dutpsT0vSVehic3EZIqkOBt.jpg 1x, /t/p/w440_and_h660_face/kuf6dutpsT0vSVehic3EZIqkOBt.jpg 2x"
                            alt="Puss in Boots: The Last Wish"
                        />
                    </div>
                </div>
            </div>
            <VideoModal isOpen={isOpen} close={handleShowVideo} keyVideo="RqrXhwS33yc" />
        </div>
    );
}

export default Media;
