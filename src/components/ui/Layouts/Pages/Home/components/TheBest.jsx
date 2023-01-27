import classNames from 'classnames/bind';
import Button from '~/components/ui/components/Button/Button';
import styles from './../Home.module.scss';

const cx = classNames.bind(styles);

function TheBestMovie() {
    return (
        <section className={cx('taw_2023')}>
            <div id="media_v4" className={cx('media')}>
                <div className={cx('column_wrapper')}>
                    <div className={cx('content_wrapper')}>
                        <div className={cx('header')}>
                            <h2 className={cx('taw')}>
                                That's A<br />
                                Wrap 2022
                            </h2>
                        </div>

                        <div>
                            <p className={cx('description')}>The best (and worst) from 2022.</p>
                            <h4>
                                <Button rounded borderWhite large>
                                    Check it out
                                </Button>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TheBestMovie;
