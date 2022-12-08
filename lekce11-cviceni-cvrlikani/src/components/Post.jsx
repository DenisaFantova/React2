import React from 'react';

const Post = () => {
  return (
    <div className="post">
      <form className="post__form">
        <textarea name="post-message" id="post-message" rows="4" className="post__message" placeholder="Řekni, co se děje?" />
      </form>
      <div className="post__actions">
        <button type="submit" className="button">Zacvrlikej to</button>
      </div>
    </div>
  );
};

export default Post;
