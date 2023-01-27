import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import Button from '~/components/ui/components/Button/Button';
import styles from './../Home.module.scss';

const cx = classNames.bind(styles);

function Introduce() {
    const welcomeImage = useRef();

    useEffect(() => {
        // window.location.reload();
    }, []);

    return (
        <section className={cx('inner_content')} ref={welcomeImage}>
            <div className={cx('media')}>
                <div className={cx('column_wrapper')}>
                    <div className={cx('content_wrapper')}>
                        <div className={cx('title')}>
                            <h2 className={cx('welcome')}>Welcome.</h2>
                            <h3 className={cx('description')}>
                                Millions of movies, TV shows and people to discover. Explore now.
                            </h3>
                        </div>

                        <div className={cx('search')}>
                            <form className={cx('inner_search_form')}>
                                <label>
                                    <input
                                        placeholder="Search for a movie, tv show, person......"
                                        className={cx('input')}
                                    />
                                </label>
                                <div className={cx('btn__search')}>
                                    <Button primary rounded big>
                                        Search
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduce;
