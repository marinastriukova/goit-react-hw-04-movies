const BASE_URL = 'https://api.themoviedb.org/3';
const key = '?api_key=bced3deba157b7a4ef8a82d039df929c';

async function fetchApi(url){
    const response = await fetch(url);
    return response.ok ? await response.json() : Promise.reject(new Error('not found'))
}

function fetchTrending(){
    return fetchApi(`${BASE_URL}/trending/movie/day${key}`)
}

function fetchSearchMovies(name){
    return fetchApi(`${BASE_URL}/search/movie${key}&query=${name}`)
}

function fetchMovieDetailsPage(id) {
    return fetchApi(`${BASE_URL}/movie/${id}${key}`)
}

function fetchCast(id) {
    return fetchApi(`${BASE_URL}/movie/${id}/credits${key}`)
}

function fetchReviews(id){
    return fetchApi(`${BASE_URL}/movie/${id}/reviews${key}`)
}

export {fetchTrending, fetchSearchMovies, fetchMovieDetailsPage, fetchCast, fetchReviews}


// API Key: bced3deba157b7a4ef8a82d039df929c

// https://api.themoviedb.org/3/movie/550?api_key=bced3deba157b7a4ef8a82d039df929c