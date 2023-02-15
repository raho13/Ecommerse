import './navigation.html'
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
Template.navigation.helpers({
    getUserName: function() {
      return Meteor.user().username
    }
});
Template.navigation.events({ 
    'click .btn': function(event, template) { 
        Meteor.logout();
        FlowRouter.go('/login');
    } 
});