import CardIcon from './components/CardIcon';
import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import CardDescription from './components/CardDescription';
import Button from '~/components/ui/components/Button/Button';
import CardProFile from './components/CardProfile';

const cx = classNames.bind(styles);

function SideBarMainOverviewPopular() {
    return (
        <div className={cx('sideBar')}>
            <div className={cx('sideBar__iconWrap')}>
                <CardIcon background="https://www.themoviedb.org/assets/2/v4/glyphicons/social/facebook-71155d1cd369c47ce8456477833a92c324fa01e6d628cb6ece19cedea3c1c480.svg" />
                <CardIcon background="https://www.themoviedb.org/assets/2/v4/glyphicons/social/twitter-a6ff8c172b8e086f4a64578cee0a16676c1a067b47a1b1b186d58795d241a852.svg" />
                <CardIcon background="https://www.themoviedb.org/assets/2/v4/glyphicons/social/instagram-74e6299c864adc384258da3b3a8eb09282b7ccda4dd1dfa9a4158ba2ea8583b9.svg" />
                <CardIcon background="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-351-link-5f643a86c2515cb06ea08ebc798941824f76bbcea4ed571222a81f271b30c7f3.svg" />
            </div>
            <div className={cx('sideBar__Des')}>
                <CardDescription header="Original Title" description="Puss in Boots: The Last Wish" />
                <CardDescription header="Status" description="Released" />
                <CardDescription header="Original Language" description="English" />
                <CardDescription header="Budget" description="$90,000,000.00" />
                <CardDescription header="Revenue" description="$334,147,910.00" />
            </div>

            <div className={cx('keyword')}>
                <div className={cx('header__df')}>Keyword</div>
                <div className={cx('df__listButton')}>
                    <div className={cx('df__itemButton')}>
                        <Button small dark>
                            fairy tale
                        </Button>
                    </div>
                    <div className={cx('df__itemButton')}>
                        <Button small dark>
                            talking dog
                        </Button>
                    </div>

                    <div className={cx('df__itemButton')}>
                        <Button small dark>
                            spin off
                        </Button>
                    </div>

                    <div className={cx('df__itemButton')}>
                        <Button small dark>
                            aftercreditsstinger
                        </Button>
                    </div>

                    <div className={cx('df__itemButton')}>
                        <Button small dark>
                            talking cat
                        </Button>
                    </div>

                    <div className={cx('df__itemButton')}>
                        <Button small dark>
                            fear of death
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('content__score')}>
                <div className={cx('header__df')}>Content Score</div>
                <Button large black fullWidth>
                    100
                </Button>
                <small>Yes! Looking good!</small>
            </div>
            <div className={cx('cdProfile__wrap')}>
                <div className={cx('header__df')}>Top Contributors</div>
                <CardProFile />
            </div>
        </div>
    );
}

export default SideBarMainOverviewPopular;
