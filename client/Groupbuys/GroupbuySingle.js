Template.GBSingle.helpers({
    gb: () => {
        var id = FlowRouter.getParam('id');
        return Groupbuys.findOne({
            _id: id
        });
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
    gb: () => {
        var id = FlowRouter.getParam('id');
        return Groupbuys.findOne({
            _id: id
        });
    }
    location.href="{{gb.gbBuyLink}}"
  }
})
