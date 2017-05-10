$.ajax({
  url:"/api/product/all",
  type:"POST",
  success: function (d) {
    var prodList = [];
    for(var i in d){
      var obj = d[i];
      var item = [
        "<tr>",
          "<td>", Number(i+1) ,"</td>",
          "<td>", obj.prodId ,"</td>",
          "<td>", obj.name ,"</td>",
          "<td>", obj.category ,"</td>",
          "<td>", obj.clothingType ,"</td>",
          "<td>", obj.sizeAvailability ,"</td>",
          "<td>", obj.colorAvailability ,"</td>",
          "<td>", obj.stockAvailable ,"</td>",
          "<td>", obj.stockOrdered ,"</td>",
          "<td>", 1 ,"</td>",
          "<td>", (obj.stockAvailable-obj.stockOrdered) ,"</td>",
          "<td>", "Visible", "<a class='btn btn-default' href='product-details.html#", obj._id ,"'>View</a>" ,"</td>",
        "</tr>"
      ].join('');
      $("#prodList").append(item);
    }
  }
})
