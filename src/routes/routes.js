import Home from '~/components/ui/Layouts/Pages/Home/Home';
import MainPopularOverview from '~/components/ui/Layouts/Pages/Popular/components/overview/main/_index';
import Popular from '~/components/ui/Layouts/Pages/Popular/Popular';
import { handleRoutesPopular } from '~/configs/popular';

const PublicRouters = () => {
    const routesPopular = handleRoutesPopular();
    const listRoutesPopular = [];
    const listRoutesPopularHaveMovies = [];
    routesPopular.forEach((item) => {
        listRoutesPopular.push({ path: `${item}`, component: MainPopularOverview });
        listRoutesPopularHaveMovies.push({ path: `/movie/${item}`, component: MainPopularOverview });
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
        ...listRoutesPopular,
        ...listRoutesPopularHaveMovies,
    ];
    return publicRouter;
};

export default PublicRouters;
