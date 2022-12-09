import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <li key={this.props.card._id} id="container" className="cards__item">
        <a href="#" className="cards__foto-button">
          <img className="cards__image" src={this.props.card.link} alt="Изображение места" />
        </a>
        <div className="cards__info">
          <h2 className="cards__title">{this.props.card.name}</h2>
          <div className="cards__like-container">
            <button type="button"
              aria-label="Кнопка нравится место - поставить и убрать лайк"
              className="cards__like-button">
            </button>
            <div className="cards__number-likes">{this.props.card.likes.length}</div>
          </div>
          <button type="button"
            aria-label="Кнопка удаления карточки"
            className="cards__trash-button cards__trash-button_active">
          </button>
        </div>
      </li>
    );
  }
}

export default Card;
