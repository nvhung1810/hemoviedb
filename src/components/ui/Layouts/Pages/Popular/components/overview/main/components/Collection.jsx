import classNames from 'classnames/bind';
import styles from './../Main.module.scss';

const cx = classNames.bind(styles);

function Collection() {
    return (
        <section className={cx('collection')}>
            <div id="collection_waypoint" className={cx('collection__wrapper')}>
                <div className={cx('collection__header')}>
                    <div>
                        <h2 className={cx('collection__title')}>Part of the Puss in Boots Collection</h2>
                        <p className={cx('collection__description')}>
                            Includes Puss in Boots and Puss in Boots: The Last Wish
                        </p>
                        <p className={cx('collection__button')}>
                            <a href="/collection/94602-puss-in-boots-collection">View the Collection</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Collection;
