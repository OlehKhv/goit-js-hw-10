import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] =
    'live_boJNQn3Slg7cwkz688gYFph6RgjT7n6xAh7DSIoYsl0forLrPApDURKhlODZW3dF';

const END_POINTS = {
    breeds: 'breeds',
    info: 'images/search',
};

export const fetchBreeds = () => {
    return axios(`${END_POINTS.breeds}`);
};

export const fetchCatByBreed = breedId => {
    return axios(`${END_POINTS.info}?breed_ids=${breedId}`);
};
