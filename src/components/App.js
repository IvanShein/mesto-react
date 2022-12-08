import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

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
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />

      <Footer />

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={<>
          <input className="popup__input popup__input_type_name" id="name" name="name" type="text" placeholder="Имя" minLength="2" maxLength="40" required />
          <span className="popup__error popup__error_visible name-error"></span>
          <input className="popup__input popup__input_type_description" id="about" name="about" type="text" placeholder="Вид деятельности" minLength="2" maxLength="200" required />
          <span className="popup__error popup__error_visible about-error"></span> </>} />

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={<>
          <input className="popup__input popup__input_type_avatar" id="avatar" name="avatar" type="url" placeholder="Ссылка на новое фото профиля" required />
          <span className="popup__error popup__error_visible avatar-error"></span> </>} />


      <PopupWithForm
        name="add"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={<>
          <input className="popup__input popup__input_type_place" id="place" name="name" type="text" placeholder="Место" minLength="2" maxLength="30" required />
          <span className="popup__error popup__error_visible place-error"></span>
          <input className="popup__input popup__input_type_foto-link" id="foto-link" name="link" type="url" placeholder="Ссылка на картинку" required />
          <span className="popup__error popup__error_visible foto-link-error"></span> </>} />


      <PopupWithForm
        name="delete-confirmation"
        title="Вы уверены?"
        buttonText="Да"
        children={<></>} />

      <ImagePopup />


      <template id="card">
        <li id="container" className="cards__item">
          <a href="#" className="cards__foto-button">
            <img className="cards__image" src="../images/no_foto.jpg" alt="Изображение места" />
          </a>
          <div className="cards__info">
            <h2 className="cards__title"></h2>
            <div className="cards__like-container">
              <button type="button"
                aria-label="Кнопка нравится место - поставить и убрать лайк"
                className="cards__like-button">
              </button>
              <div className="cards__number-likes">0</div>
            </div>
            <button type="button"
              aria-label="Кнопка удаления карточки"
              className="cards__trash-button">
            </button>
          </div>
        </li>
      </template>

    </div>
  )
};

export default App;
