import React, { useState } from 'react';
import { PostCollection } from '/imports/api/post';

export const PostForm = ({ authorName }) => {
    console.log(authorName)

  const [text, setText] = useState("");
  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;
    PostCollection.insert({
      text: text.trim(),
        createdAt: new Date(),
        authorName:authorName
    });

    setText("");
  };
  return (
    <form className="post-form" onSubmit={handleSubmit} id="post-register">
      <textarea rows="5"
        type="text"
              placeholder="Type to add new comment"
              value={text}
        onChange={(e) => setText(e.target.value)}
      />
 <span class="form-input-label">Message</span>
      <button type="submit" className="submit-button">Add Post</button>
    </form>
  );
};