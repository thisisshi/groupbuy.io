Template.Groupbuy.helpers({
  momentFormat: function(time) {
    return moment(time).format('MM/DD/YYYY');
  },
  divide: function(progress, MOQ){
    return progress/MOQ * 100;
  }
});
