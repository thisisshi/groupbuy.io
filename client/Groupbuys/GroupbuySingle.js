Template.GBSingle.helpers({
    gb: () => {
        var id = FlowRouter.getParam('id');
        return Groupbuys.findOne({
            _id: id
        });
    },
    momentFormat: function(time) {
        return moment(time).format('MM/DD/YYYY');
    },
    checkAuthor: function(author){
      console.log(author);
      console.log(Meteor.userId()); 
      return Meteor.userId() === author;
    }
});

Template.GBSingle.onRendered(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('GBSingle', id);
    });
});

Template.GBSingle.events({
  'click #joinbutton': function(){
    Meteor.users.update({
        _id: Meteor.userId()
    }, {
        $addToSet: {
            groupbuys: this._id
        }
    });
  }
})
