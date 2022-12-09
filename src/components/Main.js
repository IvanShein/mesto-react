import React from 'react';
import api from '../utils/Api.js';
import Card from './Card';

class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: '',
      cards: []
    };
  }

  componentDidMount() {
    api.getUserInformation()
      .then((data) => {
        this.setState({ userName: data.name, userDescription: data.about, userAvatar: data.avatar });
      })
      .catch((error) => {
        console.log(`К сожалению, возникла ошибка: ${error}`);
      });
    api.getInitialCards()
      .then((initialCards) => {
        this.setState({ cards: initialCards });
      })
      .catch((error) => {
        console.log(`К сожалению, возникла ошибка: ${error}`);
      });
  }

  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container" >
            <img className="profile__avatar"
              src={this.state.userAvatar}
              alt="Фотография пользователя - Аватар" />
            <div className="profile__avatar-edit" onClick={this.props.onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title">{this.state.userName}</h1>
              <button type="button" aria-label="Кнопка редактирования профиля" className="profile__edit-button" onClick={this.props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{this.state.userDescription}</p>
          </div>
          <button type="button" aria-label="Кнопка добавления карточки" className="profile__add-button" onClick={this.props.onAddPlace}></button>
        </section>

        <section className="elements">
          <ul className="cards">

            {this.state.cards.map((card, i) => (
              <Card card={card} key={card._id} onCardClick={this.props.onCardClick} />
            ))}

          </ul>
        </section>
      </main>
    );
  }
}

export default Main;
