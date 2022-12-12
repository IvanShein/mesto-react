import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInformation(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setCurrentUser(userData);
        setCards(initialCards);
        console.log('данные юзера', userData);
        console.log('данные карточек', initialCards);
      })
      .catch((error) => {
        console.log(`К сожалению, возникла ошибка: ${error}`);
      });
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card)
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
        />

        <Footer />

        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input className="popup__input popup__input_type_name" id="name" name="name" type="text" placeholder="Имя" minLength="2" maxLength="40" required />
          <span className="popup__error popup__error_visible name-error"></span>
          <input className="popup__input popup__input_type_description" id="about" name="about" type="text" placeholder="Вид деятельности" minLength="2" maxLength="200" required />
          <span className="popup__error popup__error_visible about-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input className="popup__input popup__input_type_avatar" id="avatar" name="avatar" type="url" placeholder="Ссылка на новое фото профиля" required />
          <span className="popup__error popup__error_visible avatar-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="add"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input className="popup__input popup__input_type_place" id="place" name="name" type="text" placeholder="Место" minLength="2" maxLength="30" required />
          <span className="popup__error popup__error_visible place-error"></span>
          <input className="popup__input popup__input_type_foto-link" id="foto-link" name="link" type="url" placeholder="Ссылка на картинку" required />
          <span className="popup__error popup__error_visible foto-link-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="delete-confirmation"
          title="Вы уверены?"
          buttonText="Да"
          children={<></>} />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

      </div >
    </CurrentUserContext.Provider>
  )
};

export default App;
