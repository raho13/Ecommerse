import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import '../../ui/layout/mainLayout'
import "../../ui/pages/home/home"
import "../../ui/components/post/post"
import "../../ui/components/navigation/navigation"
import '../../ui/pages/notFound/notFound'
import "../../ui/pages/login/login"
import "../../ui/pages/register/register"
import '../../ui/pages/favorites/favorites'
import "../..//ui/pages/admin/admin"
FlowRouter.route('/', {
    action() {
        FlowRouter.go('/home');
    }
})
FlowRouter.route('/home', {
    name: 'home',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'home'
        })
    }
})

FlowRouter.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'login'
        })
    }
})
FlowRouter.route('/register', {
    name: 'register',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'register'
        })
    }
})
FlowRouter.route('/favorites', {
    name: 'favorites',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'favorites'
        })
    }
})
FlowRouter.route('/admin', {
    name: 'admin',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'admin'
        })
    }
})
function trackRouteEntry(context, redirect) {
    if (!Meteor.userId() && !Meteor.loggingIn()) {
        redirect('/login');
    }
}
FlowRouter.triggers.enter([trackRouteEntry], {
    except: ['login','register'] 

});

FlowRouter.route('*', {
    action: function () {
        BlazeLayout.render('mainLayout', {
            main: 'notFound'
        });
    }
});