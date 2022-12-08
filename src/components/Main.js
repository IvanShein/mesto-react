import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container" >
            <img className="profile__avatar"
              src= "../images/profile__image.png"
              alt="Фотография пользователя - Аватар"/>
            <div className="profile__avatar-edit" onClick={this.props.onEditAvatar}></div>
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button type="button" aria-label="Кнопка редактирования профиля" className="profile__edit-button" onClick={this.props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button type="button" aria-label="Кнопка добавления карточки" className="profile__add-button" onClick={this.props.onAddPlace}></button>
        </section>

        <section className="elements">
          <ul className="cards">
          </ul>
        </section>
      </main>
    );
  }
}

export default Main;
