Template.Home.helpers({
  groupbuys: () => {
    return Groupbuys.find({});
  }
});
Template.Home.onRendered(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('Groupbuys');
  });
});
