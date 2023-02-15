import { FavoritesCol } from '../../../api/favorites/collections'
import './favorites.html'

Template.favorites.onCreated(function () {

    this.autorun(() => {
        if (Meteor.user()?._id) {
            let query = {
                userId: Meteor.user()._id
            }
            this.subscribe('getFavorites', query)
        }

    })
})

Template.favorites.helpers({
    getFavorites() {
        return FavoritesCol.find({ userId: Meteor.user()._id })
    },

})