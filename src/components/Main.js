import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

class Main extends React.Component {
  static contextType = CurrentUserContext;
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container" >
            <img className="profile__avatar"
              src={this.context.avatar}
              alt="Фотография пользователя - Аватар" />
            <div className="profile__avatar-edit" onClick={this.props.onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title">{this.context.name}</h1>
              <button type="button" aria-label="Кнопка редактирования профиля" className="profile__edit-button" onClick={this.props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{this.context.about}</p>
          </div>
          <button type="button" aria-label="Кнопка добавления карточки" className="profile__add-button" onClick={this.props.onAddPlace}></button>
        </section>

        <section className="elements">
          <div className="cards">

            {this.props.cards.map((card) => (
              <Card card={card}
                key={card._id}
                onCardClick={this.props.onCardClick}
                onCardLike={this.props.onCardLike}
                onCardDelete={this.props.onCardDelete}
              />
            ))}

          </div>
        </section>
      </main>
    );
  }
}

export default Main;
