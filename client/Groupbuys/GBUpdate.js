Template.GBUpdate.onCreated(function() {
  var self = this;
  this.autorun(function() {
    var id = FlowRouter.getParam('_id');
    self.subscribe('GBSingle', id);
  });
});

Template.GBUpdate.helpers({
  getGB: function(){
    var id = FlowRouter.getParam('_id');
    var gb = Groupbuys.findOne({_id: id});
    console.log("hello");
    return gb;
  }
});
