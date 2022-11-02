import { useEffect, useState } from 'react';
import FetchImages from './FetchImages/FetchImages';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
export function OldApp() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('idle');
  const [totalPictures, setTotalPictures] = useState(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }

    async function fetchPicture() {
      setIsLoading(true);
      setStatus('pending');
      try {
        const newPicture = await FetchImages(searchQuery, page);
        setStatus('resolved');
        setPhotos(prevPictures => [...prevPictures, ...newPicture.hits]);
        setTotalPictures(newPicture.totalHits);
        setTimeout(() => {
          window.scrollBy({
            top: document.body.clientHeight,
            behavior: 'smooth',
          });
        }, 100);

        if (newPicture.totalHits === 0) {
          setStatus('rejected');
          return;
        }
      } catch (error) {
        console.error(error);
        setStatus('rejected');
      } finally {
        setIsLoading(false);
      }
    }
    fetchPicture();
  }, [searchQuery, page]);

  const OnHandleForSubmit = values => {
    if (searchQuery === values.name) {
      return;
    }
    setSearchQuery(values.name);
    setPhotos([]);
    setPage(1);
  };

  const openImage = id => {
    setShowModal(photos.find(item => item.id === id));
  };

  const closeImage = () => {
    setShowModal(null);
  };

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar setSearchQuery={OnHandleForSubmit} />

      {photos && (
        <ImageGallery photos={photos} page={page} onOpenImage={openImage} />
      )}

      {photos.length > 0 && totalPictures !== photos.length && (
        <Button onSubmit={setSearchQuery} onClick={onLoadMore}>
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
