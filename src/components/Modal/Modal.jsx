import { useModal } from 'hooks/useModal';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ onClose, children }) => {
  const [handleBackdpropClick] = useModal(onClose);

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdpropClick}>
      <div className={css.Modal}>{children}</div>
    </div>,
    modalRoot
  );
};
