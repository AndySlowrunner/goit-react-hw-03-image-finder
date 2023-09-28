import axios from "axios";

axios.defaults.baseURL=`https://pixabay.com/api/?q=cat&page=1&key=36730507-d69436f33261eb3b1b2a44ec5&image_type=photo&orientation=horizontal&per_page=12`

export const getImagesWithQuery = async (newQuery) => {
    const response = axios.get(`/search?query=${newQuery}`);
    return response.data;
};