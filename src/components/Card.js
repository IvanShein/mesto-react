import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

class Card extends React.Component {
  static contextType = CurrentUserContext;
  constructor(props) {
    super(props);
  };

  handleClick = () => {
    this.props.onCardClick(this.props.card);
  }

  handleLikeClick = () => {
    this.props.onCardLike(this.props.card);
  }

  render() {
    const isOwn = this.props.card.owner._id === this.context._id;
    const cardDeleteButtonClassName = (
      `cards__trash-button ${isOwn ? 'cards__trash-button_active' : ''}`
    );
    const isLiked = this.props.card.likes.some(i => i._id === this.context._id);
    const cardLikeButtonClassName = (
      `cards__like-button ${isLiked ? 'cards__like-button_active' : ''}`
    );

    return (
      <li key={this.props.card._id} id="container" className="cards__item">
        <a href="#" className="cards__foto-button" onClick={this.handleClick}>
          <img className="cards__image" src={this.props.card.link} alt={this.props.card.name} />
        </a>
        <div className="cards__info">
          <h2 className="cards__title">{this.props.card.name}</h2>
          <div className="cards__like-container">
            <button type="button"
              aria-label="Кнопка нравится место - поставить или убрать лайк"
              className={cardLikeButtonClassName}
              onClick={this.handleLikeClick}>
            </button>
            <div className="cards__number-likes">{this.props.card.likes.length}</div>
          </div>
          <button type="button"
            aria-label="Кнопка удаления карточки"
            className={cardDeleteButtonClassName}>
          </button>
        </div>
      </li>
    );
  }
}

export default Card;
