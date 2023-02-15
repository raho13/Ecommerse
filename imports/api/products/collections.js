import { FilesCollection } from 'meteor/ostrio:files';

export const ProductsCol = new Mongo.Collection('products');

export const ImagesCol = new FilesCollection({
    collectionName: 'product_images',
    allowClientCode: false,
    storagePath: '/home/rahibrzayev/Desktop/images',
    onBeforeUpload(file) {
        if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
            return true;
        }
        return 'Please upload image, with size equal or less than 10MB';
    }
});