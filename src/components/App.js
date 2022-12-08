import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />

      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        buttonText="Сохранить"
        children={<>
          <input className="popup__input popup__input_type_name" id="name" name="name" type="text" placeholder="Имя" minLength="2" maxLength="40" required />
          <span className="popup__error popup__error_visible name-error"></span>
          <input className="popup__input popup__input_type_description" id="about" name="about" type="text" placeholder="Вид деятельности" minLength="2" maxLength="200" required />
          <span className="popup__error popup__error_visible about-error"></span> </>} />

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        children={<>
          <input className="popup__input popup__input_type_avatar" id="avatar" name="avatar" type="url" placeholder="Ссылка на новое фото профиля" required />
          <span className="popup__error popup__error_visible avatar-error"></span> </>} />


      <PopupWithForm
        name="add"
        title="Новое место"
        buttonText="Создать"
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

      <template id="card">
        <li id="container" className="cards__item">
          <a href="#" className="cards__foto-button">
            <img className="cards__image" src="<%=require('./images/no_foto.jpg')%>" onError="this.src='<%=require('./images/no_foto.jpg')%>'" alt="Изображение места" />
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
