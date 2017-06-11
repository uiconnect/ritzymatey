$.ajax({
  url:"/api/category/all",
  type:"POST",
  data:{},
  success: function (d) {
    onCategorySuccess(d[0] && d[0].categories);
  },
  error: function (d) {
    errorNotification(d.error);
  }
});

function onCategorySuccess(categories) {

  for (var i in categories) {
    var category = categories[i];
    $("#topHeaderMenu1").append('<li><a href="#'+ category.name +'">'+ category.name +'</a></li>')
  }

  var category = window.location.hash ? categories.filter(function(a){return a.name==decodeURIComponent(window.location.hash).replace("#","")})[0]: categories[0]
  updateCategoryDetails(category)
}

function updateCategoryDetails(category) {
  $("#categoryImg").attr("src", category.img.file)
  $("#categoryName").html(category.name)
  $("#categoryDesc").html(category.description)
  fetchProductsByCategory(category);
}

function fetchProductsByCategory(category) {
  $.ajax({
    url:"/api/product/query",
    type:"POST",
    data:{category:category.name},
    success: function (d) {
      constructProductList(d)
    },
    error: function (d) {
      errorNotification(d.error);
    }
  });
}

function constructProductList(list) {
  for(var i in list){
    var item = list[i];
    var elm = [
      '<div class="col-md-6 col-sm-6 col-xs-12 column">',
        '<div class="box box-r">',
          '<div class="title">'+ item.name +'</div>',
          '<div class="cardy cusGuideSlider">',
            '<div class="front"> <a href="#"><img id="cat-img-1m" src="'+ getDefaultImg(item.img) +'" class="img-m" alt=""></a>',
              '<div class="price-tag" style="right:0;"><span> INR '+ getPriceByCurrency(item.pricing,'INR') +'</span></div>',
            '</div>',
            '<div class="back"> <a href="#"><img id="cat-img-1m" src="'+ getDefaultImg(item.img) +'" class="img-m" alt=""></a>',
             '<div class="price-tag" style="right:0;"><span>INR '+ getPriceByCurrency(item.pricing,'INR') +'</span></div>',
            '</div>',
          '</div>',
        '</div>',
      '</div>'
    ].join('');
    $("#catalogue").append(elm)
  }
  $('.cardx').flip({
      axis: 'x',
      reverse:true,
      trigger:'hover',
      forceWidth:'true',
      forceHeight:'true',
      speed:1000
  });
  $('.cardy').flip({
      axis: 'y',
      reverse:true,
      trigger:'hover',
      forceWidth:'true',
      forceHeight:'true',
      speed:1000
  });
}

function getDefaultImg(ar) {
  var item = ar.filter(function(a){return a.isDisplayImage =="true"})[0];
  return item && item.img.file;
}

function getPriceByCurrency(priceList,country) {
  var item = priceList.filter(function(a){return a.CurrencyType ==country})[0];
  return item && item.salePrice;
}
