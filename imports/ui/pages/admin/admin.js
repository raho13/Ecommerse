import './admin.html'
import { ImagesCol, ProductsCol } from '../../../api/products/collections'
Template.admin.onCreated(function () {

    this.fileName = new ReactiveVar(false);
})

Template.admin.helpers({
    showState: function () {
        return Template.instance().fileName.get()
    }
});

Template.admin.events({
    'submit #productForm': function (e, temp) {
        e.preventDefault()
        const file = e.target[0].files[0]
        const upload = ImagesCol.insert({
            file,
            chunkSize: 'dynamic'
        }, false)
        upload.on('start', () => {

        })
        upload.on('end', (err, file) => {
            if (err) console.log(err)
            else {
                let data = {
                    productName: e.target[1].value,
                    productPrice: e.target[2].value,
                    productImage: file._id
                }
                Meteor.call('addProducts', data, (err, res) => {
                    if (err) throw err
                    else {
                        e.target[1].value = ''
                        e.target[2].value = ''
                        temp.fileName.set("product image")
                    }
                })

            }
        })

        upload.start()
    },
    'change #productImage': function (e, temp) {
        temp.fileName.set(temp.lastNode[0].files[0].name)
    }

});
