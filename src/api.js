import axios from 'axios';

const ghastlyGamesApi = axios.create({
    baseURL: 'http://localhost:9090/api',
});

export function fetchReviews() {
    return ghastlyGamesApi.get(`/reviews`).then(res => {
        return res.data;
    });
}