import { ProductsCol } from '../../../api/products/collections';
import './home.html'


Template.home.onCreated(function () {
    this.autorun(() => {
        this.subscribe('getProducts');
    });
});

Template.home.helpers({
    Products(){
        return ProductsCol.find()
    }
})