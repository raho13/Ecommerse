import { FavoritesCol } from "./collections"

Meteor.publishComposite('getFavorites', function (query = {}, limit = 10, skip = 0) {
    console.log(query.userId)
    return {
        find() {
            return FavoritesCol.find(query, limit, skip)
        },
        children: [{
            find(favorite) {
                return FavoritesCol.find({ _id: favorite.productId })
            }
        }]
    }
})