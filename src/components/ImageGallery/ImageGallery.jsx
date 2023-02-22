import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
// import { CeantrModal } from './CeantrModal'
export function ImageGallery({ page, onOpenImage, photos }) {
  return (
    <main className={css.main}>
      <ul className={css.ImageGallery}>
        {photos.map(photo => (
          <ImageGalleryItem
            key={photo.id}
            id={photo.id}
            imageURL={photo.webformatURL}
            tags={photo.tags}
            onClickOpen={onOpenImage}
          />
        ))}
      </ul>
      {/* <CeantrModal /> */}
    </main>
  );
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  page: PropTypes.number.isRequired,
  onOpenImage: PropTypes.func.isRequired,
};


