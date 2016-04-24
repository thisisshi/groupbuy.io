Groupbuys = new Mongo.Collection("groupbuys");

Groupbuys.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return author == userId;
  },
  remove: function(userId, doc) {
    return author == userId;
  }
});

GroupbuySchema = new SimpleSchema({
  name: {
    type: String,
    label: "Groupbuy Name"
  },
  description: {
    type: String,
    label: "Description",
    autoform:{
      afFieldInput:{
        type: "textarea",
        rows: 4
      }
    }
  },
  status: {
    type: String,
    label: "Status",
    allowedValues: ['Interest Check', 'In Progress', 'Deadline Passed', 'In Production', 'Shipping', 'Completed'],
    autoform:{
      options:[
        {label: 'Interest Check', value: 'Interest Check'},
        {label: 'In Progress', value: 'In Progress'},
        {label: 'Deadline Passed', value: 'Deadline Passed'},
        {label: 'In Production', value: 'In Production'},
        {label: 'Shipping', value: 'Shipping'},
        {label: 'Completed', value: 'Complted'}
      ]
    }
  },
  gbRunner: {
    type: String,
    label: "Group Buy Runner"
  },
  gbRunnerForum:{
    type: String,
    label: "Group Buy Runner's Main Forum",
    allowedValues: ['geekhack', 'r/mechanicalkeyboards', 'Deskthority'],
    autoform:{
      options:[
        {label: 'geekhack', value: 'geekhack'},
        {label: 'r/mechanicalkeyboards', value: 'r/mechanicalkeyboards'},
        {label: 'Deskthority', value: 'Deskthority'}
      ]
    }
  },
  gbRunnerContact:{
    type: String,
    label: "Group Buy Runner Contact"
  },
  gbRunnerLocation:{
    type: String,
    label: "Groupbuy Runner Location",
    autoform:{
      type:"map",
      afFieldInput:{
        geolocation: true
      }
    }
  },
  manufacturer:{
    type:String,
    label: "Manufacturer"
  },
  gbType:{
    type:String,
    label: 'Groupbuy Type',
    allowedValues:['Cases', 'Keyboards', 'Keycap - Set', 'Keycap - Individual', 'Keyboard Sleeves', 'Keyswitches', 'Keyswich Accessories', 'Stickers', 'Other'],
    autoform:{
      options:[
        {label: 'Cases', value: 'Cases'},
        {label: 'Keyboards', value: 'Keyboards'},
        {label: 'Keyboard Sleeves', value: 'Keyboard Sleeves'},
        {label: 'Keycap - Set', value: 'Keycap - Set'},
        {label: 'Keycap - Individual', value: 'Keycap - Individual'},
        {label: 'Keyswitches', value: 'Keyswitches'},
        {label: 'Keyswitch Accessories', value: 'Keyswitch Accessories'},
        {label: 'Stickers', value: 'Stickers'},
        {label: 'Other', value: 'Other'}
      ]
    }
  },
  gbSubType:{
    type: String,
    label: 'Groupbuy Subtype',
    allowedValues:['40%', '60%', '75%', 'TKL', 'Full Size', 'GMK', 'SP - DSA', 'SP - SA', 'SP - DCS', 'JTK', 'OEM', 'BSP', 'EnjoyPBT', 'Other'],
    autoform: {
      options: function(){
        if(Meteor.isClient){
          var gbType = '';
          gbType = AutoForm.getFieldValue('gbType', 'insertGBForm');
          console.log(gbType);
          optionSet1 = [
            {label: '40%', value: '40%'},
            {label: '60%', value: '60%'},
            {label: '75%', value: '75%'},
            {label: 'TKL', value: 'TKL'},
            {label: 'Full Size', value: 'Full Size'},
            {label: 'Other', value: 'Other'}
          ];
          optionSet2 = [
            {label: 'BSP', value: 'BSP'},
            {label: 'EnjoyPBT', value: 'EnjoyPBT'},
            {label: 'GMK', value: 'GMK'},
            {label: 'JTK', value: 'JTK'},
            {label: 'OEM', value: 'OEM'},
            {label: 'SP - DSA', value: 'SP - DSA'},
            {label: 'SP - SA', value: 'SP - SA'},
            {label: 'SP - DCS', value: 'SP - DCS'},
            {label: 'Other', value: 'Other'}
          ];
          if(gbType == 'Cases' || gbType == 'Keyboards' || gbType == 'Other' || gbType == 'Keyboard Sleeves'){
            return optionSet1;
          }else if(gbType == 'Keycap - Set' || gbType == 'Keycap - Individual'){
            return optionSet2;
          }else{
            return [{label: 'Other', value: 'Other'}];
          }
        }
      }
    }
  },
  gbStartDate:{
    type: Date,
    label: 'Groupbuy Start Date',
    autoform:{
      afFieldInput: {
         type: "bootstrap-datetimepicker"
      }
    }
  },
  gbEndDate:{
    type: Date,
    label: 'Groupbuy End Date',
    autoform:{
      afFieldInput: {
         type: "bootstrap-datetimepicker"
      }
    }
  },
  estimatedShippingDate:{
    type: Date,
    label: 'Estimated Shipping Date',
    autoform:{
      afFieldInput: {
         type: "bootstrap-datetimepicker"
      }
    }
  },
  gbMOQ:{
    type: Number,
    label: 'MOQ (Minimum Order Quantity)'
  },
  progressTowardsMOQ:{
    type: Number,
    label: 'Progress Towards MOQ'
  },
  gbForumLink:{
    type: String,
    label: 'Groupbuy Forum Link'
  },
  gbBuyLink:{
    type: String,
    label: 'Purchase Link'
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return 'test';
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

Groupbuys.attachSchema(GroupbuySchema);
