import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import useFetchPhotos from '../hooks/useFetchPhotos';
export function OldApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(null);

  const [
    photos,
    page,
    IsVisible,
    isLoading,
    error,
    getImages,
    onChangeSearchQuery,
  ] = useFetchPhotos();

  useEffect(() => {
    getImages(searchQuery);
  }, [searchQuery]);

  const changeSearchQuery = value => {
    if (value === searchQuery) {
      return;
    }

    setSearchQuery(value);
    onChangeSearchQuery();
  };

  const openImage = id => {
    setShowModal(photos.find(item => item.id === id));
  };

  const closeImage = () => {
    setShowModal(null);
  };
  return (
    <>
      <Searchbar setSearchQuery={changeSearchQuery} />

      {photos && (
        <ImageGallery photos={photos} page={page} onOpenImage={openImage} />
      )}

      {photos.length > 0 && (
        <Button
          onSubmit={setSearchQuery}
          onClick={() => getImages(searchQuery)}
        >
          Load more
        </Button>
      )}

      {isLoading && <Loader />}

      {showModal && (
        <Modal onClose={closeImage}>
          {
            <img
              src={showModal.largeImageURL}
              alt={showModal.tags}
              width="100%"
            />
          }
        </Modal>
      )}
    </>
  );
}
