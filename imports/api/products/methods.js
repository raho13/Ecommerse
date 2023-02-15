import { ProductsCol } from "./collections";

Meteor.methods({
    addProducts: function ({ productName, productPrice, productImage }) {
       return ProductsCol.insert({
            productName,
            productPrice,
            productImage
        })
    }
});