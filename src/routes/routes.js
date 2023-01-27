import Home from '~/components/ui/Layouts/Pages/Home/Home';
import MainPopularOverview from '~/components/ui/Layouts/Pages/Popular/components/overview/main/Main';
import Popular from '~/components/ui/Layouts/Pages/Popular/Popular';
import { handleRoutesPopular } from '~/configs/popular';

const PublicRouters = () => {
    const routesPopular = handleRoutesPopular();
    const newArray = [];
    routesPopular.forEach((item) => {
        newArray.push({ path: `/movie/${item}`, component: MainPopularOverview });
    });

    const publicRouter = [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/movie',
            component: Popular,
        },
        ...newArray,
    ];
    return publicRouter;
};

export default PublicRouters;
