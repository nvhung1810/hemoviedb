import classNames from 'classnames/bind';
import { useState } from 'react';
import VideoModal from '../Modal/modalVideo/VideoModal';
import styles from './CardStyles.module.scss';

const cx = classNames.bind(styles);

function CardStyles2() {
    const [isOpen, setOpen] = useState(false);

    const handleShowVideo = () => {
        setOpen(!isOpen);
    };

    return (
        <div>
            <div className={cx('cdstl2')}>
                <div className={cx('cdstl2__image')}>
                    <div className={cx('cdstl2__wrapper')} onClick={handleShowVideo}>
                        <div
                            className={cx('cdstl2__trailer')}
                            data-id="E5tSO9aR2Ds"
                            data-title="The Weeks Ahead Trailer"
                            title="Những Người Còn Sót Lại"
                        >
                            <img
                                loading="lazy"
                                className={cx('cdstl2__backdrop')}
                                src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg"
                                srcSet="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg 1x, /t/p/w710_and_h400_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg 2x"
                                alt=""
                            />

                            <div className={cx('cdstl2__play')}>
                                {/* NÚT CLICK */}
                                <span className={cx('cdstl2__glyphicons')}></span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={cx('cdstl2__options')}
                        data-id="100088"
                        data-object-id="5e614cd3357c00001631a6f4"
                        data-media-type="tv"
                        data-role="tooltip"
                    >
                        <div className={cx('cdstl2__click')} href="#">
                            <div className={cx('cdstl2__glyphiconsv3')}></div>
                        </div>
                    </div>
                </div>
                <div className={cx('cdstl2__content')}>
                    <div className={cx('cdstl2__name')}>
                        <a href="/movie/843794" title="JUNG_E">
                            Những Người Còn Sót Lại
                        </a>
                    </div>
                    <p className={cx('cdstl2__description')}>The Weeks Ahead Trailer</p>
                </div>
            </div>
            {/* <VideoModal isOpen={isOpen} close={handleShowVideo} /> */}
        </div>
    );
}

export default CardStyles2;
