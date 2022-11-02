import FetchImages from '../components/FetchImages/FetchImages';
import { ifEmptySearchAlert } from '../components/Notiflix/Notiflix';
import { useState } from 'react';

const useImageFetch = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [IsVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getImages = async searchQuery => {
    if (searchQuery.trim() === '') {
      ifEmptySearchAlert();
      return;
    }

    setIsLoading(true);

    try {
      const data = await FetchImages(searchQuery, page);

      setPhotos(prevState => {
        const state = [...prevState, ...data.hits];
        if (state.length === data.totalHits) {
          setIsVisible(true);
        }
        return state;
      });

      setPage(prevState => prevState + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeSearchQuery = () => {
    setPhotos([]);
    setPage(1);
    setIsVisible(false);
    setError(null);
  };

  return [
    photos,
    page,
    IsVisible,
    isLoading,
    error,
    getImages,
    onChangeSearchQuery,
  ];
};

export default useImageFetch;
