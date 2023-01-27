import axios from 'axios';
import { useEffect, useState } from 'react';

function GetApiPopular() {
    const [getAPI, setAPI] = useState([]);
    useEffect(() => {
        axios
            .get(
                'https://api.themoviedb.org/3/movie/popular?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1',
            )
            .then(function (response) {
                setAPI(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return getAPI;
}

export { GetApiPopular };
