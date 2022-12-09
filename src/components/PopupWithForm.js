import React from 'react';

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={`popup popup_type_${this.props.name} ${this.props.isOpen ? "popup_opened" : ""}`}>
        <div className={`popup__container popup__container_type_${this.props.name}`}>
          <h2 className="popup__title">{this.props.title}</h2>
          <form name={this.props.title} action="#" className={`popup__form popup__form_type_${this.props.name}`} noValidate>
            {this.props.children}
            <button type="submit" className={`popup__button popup__button_type_${this.props.name}`}>
              {this.props.buttonText}
            </button>
          </form>
          <button onClick={this.props.onClose} type="button" aria-label="Кнопка - закрыть окно" className={`popup__close-button popup__close-button_type_${this.props.name}`}>
          </button>
        </div>
      </div>

    );
  }
}

export default PopupWithForm;
