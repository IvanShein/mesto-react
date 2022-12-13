import React from 'react';
import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input ref={avatarRef} className="popup__input popup__input_type_avatar" id="avatar" name="avatar" type="url" placeholder="Ссылка на новое фото профиля" required />
      <span className="popup__error popup__error_visible avatar-error"></span>
    </PopupWithForm>

  );
}

export default EditAvatarPopup;
