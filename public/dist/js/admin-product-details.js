
$.ajax({
  url:"/api/product/"+window.location.hash.replace("#",""),
  type:"POST",
  success: function (d) {
    $("#prodTitle").html(d.name+" ("+d.prodId+") / "+ d.category +" / "+ d.clothingType)
    $("#prodName").html(d.name)
    $("#prodId").html(d.prodId)
    $("#category").html(d.category)
    $("#clothingType").html(d.clothingType)
    $("#colorAvailability").html(d.colorAvailability.join(", "))
    $("#sizeAvailability").html(d.sizeAvailability.join(", "))
    $("#dateOfAbilityFrom").html(d.dateOfAbilityFrom)
    $("#dateOfAbilityTo").html(d.dateOfAbilityTo)

    var inr = d.pricing.filter(function(a){return a.CurrencyType == "INR"})[0];
    $("#inrMRP").html(inr.mrp)
    $("#inrOnSale").html(inr.onSale)
    $("#inrSalePrice").html(inr.salePrice)
    $("#inrSaleStartDate").html(inr.saleStartDate)
    $("#inrSaleEndDate").html(inr.saleEndDate)

    var usd = d.pricing.filter(function(a){return a.CurrencyType == "USD"})[0];
    $("#usdMRP").html(usd.mrp)
    $("#usdOnSale").html(usd.onSale)
    $("#usdSalePrice").html(usd.salePrice)
    $("#usdSaleStartDate").html(usd.saleStartDate)
    $("#usdSaleEndDate").html(usd.saleEndDate)

    var euro = d.pricing.filter(function(a){return a.CurrencyType == "EURO"})[0];
    $("#euroMRP").html(euro.mrp)
    $("#euroOnSale").html(euro.onSale)
    $("#euroSalePrice").html(euro.salePrice)
    $("#euroSaleStartDate").html(euro.saleStartDate)
    $("#euroSaleEndDate").html(euro.saleEndDate)

    var sgd = d.pricing.filter(function(a){return a.CurrencyType == "SGD"})[0];
    $("#sgdMRP").html(sgd.mrp)
    $("#sgdOnSale").html(sgd.onSale)
    $("#sgdSalePrice").html(sgd.salePrice)
    $("#sgdSaleStartDate").html(sgd.saleStartDate)
    $("#sgdSaleEndDate").html(sgd.saleEndDate)

    var aud = d.pricing.filter(function(a){return a.CurrencyType == "AUD"})[0];
    $("#audMRP").html(aud.mrp)
    $("#audOnSale").html(aud.onSale)
    $("#audSalePrice").html(aud.salePrice)
    $("#audSaleStartDate").html(aud.saleStartDate)
    $("#audSaleEndDate").html(aud.saleEndDate)


    $("#editBtn").attr("href", "product-edit.html#"+d._id)



    for(var i in d.img){
      var img = d.img[i];
      var elm = [
        "<div class=\"col-sm-2 box-stats\">",
  				"<img src=\"", img.img.file ,"\" class=\"img-thumb\">",
          (img.isDisplayImage == "true" ? '<i class="fa fa-check"></i> Display Image' : ""),
  			"</div>"
      ].join("")
      $("#imgList").append(elm);
    }
  }
})
