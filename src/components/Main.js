import React from 'react';

class Main extends React.Component {
  
  handleEditAvatarClick() {
    document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
  };

  handleEditProfileClick() {
    document.querySelector('.popup_type_edit').classList.add('popup_opened');
  };

  handleAddPlaceClick() {
    document.querySelector('.popup_type_add').classList.add('popup_opened');
  };
  
  render() {
    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container" >
            <img className="profile__avatar"
              src= "<%=require('./images/profile__image.png')%>"
              alt="Фотография пользователя - Аватар"/>
            <div className="profile__avatar-edit" onClick={this.handleEditAvatarClick}></div>
          </div>
          <div className="profile__info">
            <div className="profile__name">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button type="button" aria-label="Кнопка редактирования профиля" className="profile__edit-button" onClick={this.handleEditProfileClick}></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button type="button" aria-label="Кнопка добавления карточки" className="profile__add-button" onClick={this.handleAddPlaceClick}></button>
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