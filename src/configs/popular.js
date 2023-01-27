import { GetApiPopular } from '~/components/logic/getApi';
import LinkOverViewMovie from '~/components/logic/linkOverviewMovie';

function handleRoutesPopular() {
    const TOTAL_ROUTES_POPULAR = GetApiPopular();
    const results = [];
    TOTAL_ROUTES_POPULAR.forEach((item) => {
        results.push(LinkOverViewMovie(item.id, item.title));
    });

    return results;
}
export { handleRoutesPopular };
