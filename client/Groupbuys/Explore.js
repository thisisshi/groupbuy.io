Template.Explore.helpers({
    groupbuys: () => {
        return Groupbuys.find({});
    }
});
Template.Explore.onRendered(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('Explore');
    });
});
