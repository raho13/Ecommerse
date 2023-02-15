import "./login.html"
import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
Template.login.events({
    "submit #login": function (e, temp) {
        e.preventDefault()
        let username = $('#inputUsername').val(),
            password = $('#inputPassword').val()      
        Meteor.loginWithPassword(username, password, function (err) {
            if (err) {
                console.log(err)
            }
            else{
                FlowRouter.go('/home');
            }
        })

    }
})