import { FavoritesCol } from "./collections";

Meteor.methods({
    addFavorite: function (data) {
        return FavoritesCol.insert({
            productId: data.productId,
            userId: data.userId
        })
    }
});

