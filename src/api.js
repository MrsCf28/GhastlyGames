import axios from 'axios';

const ghastlyGamesApi = axios.create({
    baseURL: 'https://ghastly-games-reviews.herokuapp.com/api/',
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

export function fetchReviewById(review_id) {
    return ghastlyGamesApi.get(`/reviews/${review_id}`).then(res => {
        return res.data;
    })
}
