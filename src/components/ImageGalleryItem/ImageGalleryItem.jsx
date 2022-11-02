import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ onClickOpen, id, imageURL, tags }) => {
  const handleImgaheClick = id => {
    onClickOpen(id);
  };
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => handleImgaheClick(id)}
      key={id}
    >
      <img className={css.ImageGalleryItem_image} src={imageURL} alt={tags} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClickOpen: PropTypes.func.isRequired,
};
