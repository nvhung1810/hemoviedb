function LinkOverViewMovie(id, title) {
    return `${id}-${title.replace(':', '')}`.replace(/\s/g, '-').toLowerCase();
}

export default LinkOverViewMovie;

const srcImgLinkDefault = (backdrop_path) => {
    const result = `https://www.themoviedb.org/t/p/w220_and_h330_face${backdrop_path}`;
    return result;
};
const srcImgSetDefault = (backdrop_path) => {
    const result = `https://www.themoviedb.org/t/p/w220_and_h330_face${backdrop_path} 1x,
    /t/p/w440_and_h660_face/${backdrop_path} 2x`;
    return result;
};

const linkPageThemoviedb = 'https://www.themoviedb.org';

const srcMedium = (poster) => {
    return `${linkPageThemoviedb}/t/p/w300_and_h450_bestv2/${poster}`;
};

const dataSrcMedium = (poster) => {
    return `/t/p/w300_and_h450_bestv2/${poster}`;
};

const dataSrcSetMedium = (poster) => {
    return `/t/p/w300_and_h450_bestv2/${poster} 1x, ${linkPageThemoviedb}/t/p/w600_and_h900_bestv2/${poster} 2x`;
};

const srcSetMedium = (poster) => {
    return `${linkPageThemoviedb}/t/p/w300_and_h450_bestv2/${poster} 1x, ${linkPageThemoviedb}/t/p/w600_and_h900_bestv2/${poster} 2x`;
};

const srcImgSmall = (poster) => {
    return `${linkPageThemoviedb}/t/p/w138_and_h175_face/${poster}`;
};

const srcSetImgSmall = (poster) => {
    return `${linkPageThemoviedb}/t/p/w138_and_h175_face/${poster} 1x, ${linkPageThemoviedb}/t/p/w276_and_h350_face/${poster} 2x`;
};

export {
    srcImgLinkDefault,
    srcImgSetDefault,
    srcMedium,
    dataSrcMedium,
    dataSrcSetMedium,
    srcSetMedium,
    srcImgSmall,
    srcSetImgSmall,
};
