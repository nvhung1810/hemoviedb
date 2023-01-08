import Header from './Header/header';
import SideBar from './SideBar/sideBar';
import Footer from './Footer/footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="contents">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
