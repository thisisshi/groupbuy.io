Meteor.publish(null, function() {
  return Meteor.users.find({
    _id: this.userId
  }, {
    fields: {
      emails: 1,
      profile: 1
    }
  });
});
Meteor.publish(null, function() {
  return Meteor.users.find({
    _id: Meteor.userId()
  });
});

Meteor.users.allow({
  update: function(userId, doc){
    return !!userId;
  }
});

Meteor.publish('Groupbuys', function(){
  return Groupbuys.find({});
});
