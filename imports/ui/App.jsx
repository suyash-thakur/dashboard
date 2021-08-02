import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Posts } from './Posts.jsx';
import { PostForm } from './PostForm';
import { LoginForm } from './LoginForm';
import { Head } from './Header';

import { useTracker } from 'meteor/react-meteor-data';
import { PostCollection } from '/imports/api/post';
export const App = () => {
  const posts = useTracker(() => PostCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  const user = useTracker(() => Meteor.user());
  console.log(posts);
  return (
    <div>
      {user ? (
        <div>
          <Head />
          <br></br>
          <PostForm authorName={user.username} />
          <br></br>
          {posts.map(posts => <Posts key={posts._id} postsText={posts.text} authorName={posts.authorName} date={posts.createdAt }  />)}
          </div>

      ): ( <LoginForm />)}
    </div>
  );

};
