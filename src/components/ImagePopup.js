import React from 'react';

class ImagePopup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="popup popup_type_foto">
        <div className="popup__container-foto">
          <img src="#" className="popup__foto" alt="Изображение места" />
          <p className="popup__figcaption"></p>
          <button type="button"
            aria-label="Кнопка закрыть окно просмотра фотографии"
            className="popup__close-button popup__close-button_type_foto">
          </button>
        </div>
      </div>

    );
  }
}

export default ImagePopup;
