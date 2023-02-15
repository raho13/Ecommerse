import { ProductsCol, ImagesCol } from "./collections";

Meteor.publishComposite("getProducts", function(query = {}, limit = 10, skip = 0) {
 
    return {
        find() {
            return ProductsCol.find(query, limit, skip)
        },
        children: [{
            find(product) {
                if (product.productImage) {
                    return ImagesCol.find({ _id: product.productImage }).cursor
                }
            }
        }]
    }
})