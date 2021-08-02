import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { Accounts } from 'meteor/accounts-base';
import { PostCollection } from '/imports/api/post';

const insertPost = (postText,authorName ) => PostCollection.insert({ text: postText, authorName: authorName });

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

});
