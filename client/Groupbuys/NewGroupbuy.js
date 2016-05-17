Template.NewGroupbuy.events({
  'change #imageURL' : function(){
    var imgurl=document.getElementById("imageURL").value;
    document.getElementById("bigimg").src=imgurl;
  }
})
