import { handleRoutesPopular } from './popular';

const config = () => {
    const routesPopular = handleRoutesPopular();

    const listConfig = {
        popular: routesPopular,
    };
    return listConfig;
};

export default config;
