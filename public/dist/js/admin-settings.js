$("#addCategory").click(function () {
  $("#categoryList").append([
    "<tr>",
      '<td><img src="" class="img-thumb"><br/><br/><input class="img" type="file"/></td>',
      "<td>",
         '<input type="text" class="form-control name" value="" placeholder="Add Category Description">',
      '</td>',
      '<td>',
        '<textarea class="form-control description" rows="5"></textarea>',
      '</td>',
      '<td><input type="button" class="remove" value="remove"></td>',
    "</tr>"
  ].join(""));
  addFileBindEvents();
});

function addFileBindEvents() {
  $('[type="file"]').on("change",function(e){
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      var self = this;
      reader.onload = function (e) {
        $(self).prev().prev().prev().attr('src', e.target.result);
        $(self).prev().prev().prev().attr('alt', $(self).val().split(".").pop());
      }
      reader.readAsDataURL(this.files[0]);
    }
  });
  $(".remove").click(function () {
    $(this).parent().parent().remove();
  })
}

$("#save").on("click",onSave);

function onSave() {
  var data = [];
  $("#categoryList tr").each(function () {
    data.push({
        "name" : $(this).find(".name").val(),
        "description" : $(this).find(".description").val(),
        "img" : {
          file : $(this).find(".img-thumb").attr("src"),
          ext : $(this).find(".img-thumb").attr("alt")
        }
    });
  });


  $.ajax({
    url:"/api/category",
    type:"POST",
    data:{"categories":data},
    success: function (d) {
      //
    },
    error: function (d) {
      errorNotification(d.error);
    }
  })
}


$.ajax({
  url:"/api/category/all",
  type:"POST",
  data:{},
  success: function (d) {
    if(!d[0]) return 0;
    for(var i in d[0].categories){
      var elm = d[0].categories[i];
      $("#categoryList").append([
        "<tr>",
          '<td><img src="'+ elm.img.file +'" alt="'+ elm.img.ext +'" class="img-thumb"><br/><br/><input class="img" type="file"/></td>',
          "<td>",
             '<input type="text" class="form-control name" value="'+ elm.name +'" placeholder="Add Category Description">',
          '</td>',
          '<td>',
            '<textarea class="form-control description" rows="5">'+ elm.description +'</textarea>',
          '</td>',
          '<td><input type="button" class="remove" value="remove"></td>',
        "</tr>"
      ].join(""));
    }
    addFileBindEvents();
  },
  error: function (d) {
    errorNotification(d.error);
  }
})
