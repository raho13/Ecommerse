import './register.html'

Template.register.events({
    "submit #register": function (e, temp) {
        e.preventDefault()
        let username = $('#inputUsername').val(),
            email = $('#inputEmail').val(),
            password = $('#inputPassword').val()
        let data = {
            username,
            email,
            password
        } 
        Meteor.call('addUser', data, function (error, success) {
            if (error) { 
                console.log('error', error);
            }
            if (success) {
                console.log('success', success);
            }
        });
       

    }
})
