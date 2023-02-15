import { ImagesCol } from '../../../api/products/collections';
import './post.html'

Template.post.onCreated(function () {
    const self = this
    self.currData = new ReactiveVar({});
    self.autorun(() => {
        self.currData.set(Template.currentData())
    })
})

Template.post.helpers({
    getImage: function () {
        // console.log(this)
        //console.log(Template.instance())
        //   console.log(Template.instance().currData.curValue.productImage)
        return ImagesCol.findOne({ _id: Template.instance().currData.curValue.productImage }).link()
    }
});

Template.post.events({
    'click .favorite': function (e, temp) {
        let data = {
            productId: Template.currentData().id,
            userId: Meteor.user()._id
        }
        Meteor.call('addFavorite', data, function (err, res) {
            if (err) throw err
            else{
                console.log(res)
            }
        })

    }
})