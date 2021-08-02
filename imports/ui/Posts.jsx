import React, { useState } from 'react';
export const Posts = ({ postsText, authorName, date }) => {

  return (
      <div >
      <div className="post-container">
       
        <div style={{ flexGrow:1 }}>
        <p>{postsText} </p>
          <div class="author">-by {authorName}</div>
        </div>
        {
        date && <div class="date">{ date.toLocaleString()}</div>
        }
        </div>
       
   
    </div>
  );
};
