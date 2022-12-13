import React from 'react';
import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [cardName, setCardName] = useState('');
  const [cardLink, seCardLink] = useState('');

  const handleCardNameChange = (e) => {
    setCardName(e.target.value)
  };

  const handleCardLinkChange = (e) => {
    seCardLink(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddPlace({
      name: cardName,
      link: cardLink,
    });
  };

  useEffect(() => {
    setCardName('');
    seCardLink('');
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input className="popup__input popup__input_type_place" value={cardName} onChange={handleCardNameChange} id="place" name="name" type="text" placeholder="Место" minLength="2" maxLength="30" required />
      <span className="popup__error popup__error_visible place-error"></span>
      <input className="popup__input popup__input_type_foto-link" value={cardLink} onChange={handleCardLinkChange} id="foto-link" name="link" type="url" placeholder="Ссылка на картинку" required />
      <span className="popup__error popup__error_visible foto-link-error"></span>
    </PopupWithForm>

  );
}

export default AddPlacePopup;
