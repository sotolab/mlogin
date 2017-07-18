import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.header.helpers({
   // console.log(Meteor.user().username);  
});

Template.leaderboard.helpers({
  firstName: function() {
    return Meteor.user().username;
  }
});
