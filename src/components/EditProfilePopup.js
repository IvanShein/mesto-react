import React from 'react';
import { useEffect, useState, useContext } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');


  const handleNameChange = (e) => {
    setName(e.target.value)
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  };

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input className="popup__input popup__input_type_name" value={name || ''} onChange={handleNameChange} id="name" name="name" type="text" placeholder="Имя" minLength="2" maxLength="40" required />
      <span className="popup__error popup__error_visible name-error"></span>
      <input className="popup__input popup__input_type_description" value={description || ''} onChange={handleDescriptionChange} id="about" name="about" type="text" placeholder="Вид деятельности" minLength="2" maxLength="200" required />
      <span className="popup__error popup__error_visible about-error"></span>
    </PopupWithForm>

  );
}

export default EditProfilePopup;
