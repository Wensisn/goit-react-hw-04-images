import api from './Api';

const API_OPTIONS = {
  per_page: 12,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export const FetchImages = async (searchQuery, page) => {
  const config = {
    params: {
      ...API_OPTIONS,
      q: searchQuery,
      page,
    },
  };
  const response = await api.request(config);
  return response.data;
};

export default FetchImages;
