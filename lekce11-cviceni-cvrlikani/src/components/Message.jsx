import React from 'react';

const Message = () => {
  return (
    <article className="message">
      <div className="message__avatar">
        <img src="assets/avatars/woman1.jpg" alt="" />
      </div>
      <div className="message__content">
        <header className="message__header">
          <span className="message__name">Alena Nováková</span>
          <span className="message__handle">@novalena</span>
          <span className="message__time">2h</span>
        </header>
        <div className="message__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus accusamus eius.
        </div>
        <footer className="message__footer">
          <button type="submit" className="icon-button icon-button--red">
            <span className="icon-button__icon"><img src="assets/icons/heart.svg" alt="Miluju to" /></span>
            123
          </button>
          <button type="submit" className="icon-button icon-button--blue">
            <span className="icon-button__icon"><img src="assets/icons/bookmark.svg" alt="Uložit do záložek" /></span>
            Přidat do záložek
          </button>
          <button type="submit" className="icon-button icon-button--red">
            <span className="icon-button__icon"><img src="assets/icons/trash.svg" alt="Smazat zprávu" /></span>
            Smazat zprávu
          </button>
        </footer>
      </div>
    </article>
  );
};

export default Message;
