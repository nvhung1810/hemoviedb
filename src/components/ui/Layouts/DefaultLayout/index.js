import Header from './Header';
import Footer from './Footer';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <div>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export { DefaultLayout };
