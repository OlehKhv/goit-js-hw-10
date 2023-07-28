import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] =
    'live_boJNQn3Slg7cwkz688gYFph6RgjT7n6xAh7DSIoYsl0forLrPApDURKhlODZW3dF';

// const END_POINT_BREEDS = 'breeds';
// const END_POINT_INFO = 'images/search';
const END_POINTS = {
    breeds: 'breeds',
    info: 'images/search',
};

// axios.get('/user?ID=12345');

export const fetchBreeds = () => {
    return axios.get(`${END_POINTS.breeds}`);

    // return fetch(`${BASE_URL}${END_POINT_BREEDS}`).then(response => {
    //     if (!response.ok) {
    //         throw new Error(response.status);
    //     }
    //     return response.json();
    // });
};

export const fetchCatByBreed = breedId => {
    return axios.get(`${END_POINTS.info}?breed_ids=${breedId}`);

    // return fetch(
    //     `${BASE_URL}${END_POINT_INFO}?api_key=live_boJNQn3Slg7cwkz688gYFph6RgjT7n6xAh7DSIoYsl0forLrPApDURKhlODZW3dF&breed_ids=${breedId}`
    // ).then(response => {
    //     if (!response.ok) {
    //         throw new Error(response.status);
    //     }
    //     return response.json();
    // });
};
