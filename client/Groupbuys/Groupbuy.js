Template.Groupbuy.helpers({
    momentFormat: function(time) {
        return moment(time).format('MM/DD/YYYY');
    },
    divide: function(progress, MOQ) {
        return progress / MOQ * 100;
    }
});

Template.Groupbuy.events({
    'click #addToGBs': function() {
        Meteor.users.update({
            _id: Meteor.userId()
        }, {
            $push: {
                groupbuys: this._id
            }
        });
    }
});
