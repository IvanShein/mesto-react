import React from 'react';

class ImagePopup extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={`popup popup_type_foto ${this.props.card ? "popup_opened" : ""}`}>
        <div className="popup__container-foto">
          <img src={this.props.card ? this.props.card.link : ""} className="popup__foto" alt={`Увеличенное изображение из карточки ${this.props.card ? this.props.card.name : ""}`} />
          <p className="popup__figcaption">{this.props.card ? this.props.card.name : ""}</p>
          <button
            onClick={this.props.onClose}
            type="button"
            aria-label="Кнопка закрыть окно просмотра фотографии"
            className="popup__close-button popup__close-button_type_foto">
          </button>
        </div>
      </div>

    );
  }
}

export default ImagePopup;
