import axios from 'axios';

const ghastlyGamesApi = axios.create({
    baseURL: 'http://localhost:9090/api',
});

export function fetchReviews(query) {
    let queryString = `/reviews`;
    if (typeof query === 'string') {
        queryString += `?category=${query}`;
    }
    return ghastlyGamesApi.get(queryString).then(res => {
        return res.data;
    });
}

export function fetchCategories() {
    return ghastlyGamesApi.get(`/categories`).then(res => {
        return res.data;
    });
}
