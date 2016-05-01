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
        _id: this.userId
    });
});

Meteor.users.allow({
    update: function(userId, doc) {
        return !!userId;
    }
});

Meteor.publish('Home', function() {
    var gbs = [];
    Meteor.users.find({
        _id: this.userId
    }, {
        fields: {
            groupbuys: 1,
            _id: 0
        }
    }).forEach(function(obj) {
        gbs = obj.groupbuys;
    });
    return Groupbuys.find({
        _id: {
            $in: gbs
        }
    });
});

Meteor.publish('Explore', function() {
    var gbs = [];
    Meteor.users.find({
        _id: this.userId
    }, {
        fields: {
            groupbuys: 1,
            _id: 0
        }
    }).forEach(function(obj) {
        gbs = obj.groupbuys;
    });
    return Groupbuys.find({
        _id: {
            $nin: gbs
        }
    });
});
