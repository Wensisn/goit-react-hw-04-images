import { useEffect } from 'react';

export const useModal = onClose => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdpropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return [handleBackdpropClick];
};
