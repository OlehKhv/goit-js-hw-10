import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
    'live_boJNQn3Slg7cwkz688gYFph6RgjT7n6xAh7DSIoYsl0forLrPApDURKhlODZW3dF';
const BASE_URL = 'https://api.thecatapi.com/v1/';
const END_POINT_BREEDS = 'breeds';
const END_POINT_INFO = 'images/search';

export const fetchBreeds = () => {
    return fetch(`${BASE_URL}${END_POINT_BREEDS}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
};

export const fetchCatByBreed = breedId => {
    return fetch(`${BASE_URL}${END_POINT_INFO}?breed_ids=${breedId}`).then(
        response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        }
    );
};
