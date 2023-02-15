import { Accounts } from 'meteor/accounts-base'
Meteor.methods({
    'addUser': function (data) {
        let res = Accounts.createUser({
            username: data.username,
            email: data.email,
            password: data.password
        })
        return res
    }
})

