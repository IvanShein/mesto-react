import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <body className="page">
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form name="editProfile" action="#" className="popup__form popup__form_type_edit" novalidate>
            <input className="popup__input popup__input_type_name" id="name" name="name" type="text" placeholder="Имя" minlength="2" maxlength="40" required />
            <span className="popup__error popup__error_visible name-error"></span>
            <input className="popup__input popup__input_type_description" id="about" name="about" type="text" placeholder="Вид деятельности" minlength="2" maxlength="200" required />
            <span className="popup__error popup__error_visible about-error"></span>
            <button type="submit" className="popup__button popup__button_type_save-profile">Сохранить</button>
          </form>
          <button type="button" aria-label="Кнопка закрыть окно редактирования профиля" className="popup__close-button popup__close-button_type_edit"></button>
        </div>
      </div>

      <div className="popup popup_type_edit-avatar">
        <div className="popup__container popup__container_type_avatar">
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="editAvatar" action="#" className="popup__form popup__form_type_edit-avatar" novalidate>
            <input className="popup__input popup__input_type_avatar" id="avatar" name="avatar" type="url" placeholder="Ссылка на новое фото профиля" required />
            <span className="popup__error popup__error_visible avatar-error"></span>
            <button type="submit" className="popup__button popup__button_type_save-avatar">Сохранить</button>
          </form>
          <button type="button" aria-label="Кнопка закрыть окно редактирования фото пользователя" className="popup__close-button popup__close-button_type_edit-avatar"></button>
        </div>
      </div>

      <div className="popup popup_type_add">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form name="newPlace" action="#" className="popup__form popup__form_type_add" novalidate>
            <input className="popup__input popup__input_type_place" id="place" name="name" type="text" placeholder="Место" minlength="2" maxlength="30" required />
            <span className="popup__error popup__error_visible place-error"></span>
            <input className="popup__input popup__input_type_foto-link" id="foto-link" name="link" type="url" placeholder="Ссылка на картинку" required />
            <span className="popup__error popup__error_visible foto-link-error"></span>
            <button type="submit" className="popup__button popup__button_type_add-card">Создать</button>
          </form>
          <button type="button" aria-label="Кнопка закрыть окно редактирования профиля" className="popup__close-button popup__close-button_type_add"></button>
        </div>
      </div>

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

      <div className="popup popup_type_delete-confirmation">
        <div className="popup__container popup__container_type_delete-confirmation">
          <h2 className="popup__title">Вы уверены?</h2>
          <form name="delete-confirmation" action="#" className="popup__form popup__form_type_delete-confirmation" novalidate>
            <button type="submit" className="popup__button popup__button_type_delete-confirmation">Да</button>
          </form>
          <button type="button" aria-label="Кнопка закрыть окно редактирования фото пользователя" className="popup__close-button popup__close-button_type_delete-confirmation"></button>
        </div>
      </div>

      <template id="card">
        <li id="container" className="cards__item">
          <a href="#" className="cards__foto-button">
            <img className="cards__image" src="<%=require('./images/no_foto.jpg')%>" onerror="this.src='<%=require('./images/no_foto.jpg')%>'" alt="Изображение места" />
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

    </body>
  )
};

export default App;
