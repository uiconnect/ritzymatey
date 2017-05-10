$('[type="file"]').change(function(e){
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

function onSave(){
  var color = [];
  $("[name='colorAvailability']:checked").each(function(){
    color.push($(this).val())
  })

  var size = [];
  $("[name='sizeAvailability']:checked").each(function(){
    size.push($(this).val())
  })

  var data = {
    stockAvailable      : $("#stockAvailable").val(),
  	stockOrdered        : $("#stockOrdered").val(),
  	totalStock          : $("#totalStock").val(),
  	unclearedStockValue : $("#unclearedStockValue").val(),
  	prodId              : $("#prodId").val(),
  	name                : $("#name").val(),
  	description         : $("#description").val(),
  	details             : $("#details").val(),
  	category            : $("#category").val(),
  	clothingType        : $("#clothingType").val(),
  	colorAvailability   : color,
  	sizeAvailability    : size,
    dateOfAbilityFrom   : $("#dateOfAbilityFrom").val(),
  	dateOfAbilityTo     : $("#dateOfAbilityTo").val(),
  	img                 : [
                    					{
                    						desc : "Image 1",
                                isDisplayImage: $('[name="displayImg"]').val() ==1,
                    						img :{
                    							file :  $(".img-thumb").eq(0).attr("src"),
                    							ext :  $(".img-thumb").eq(0).attr("alt")
                    						}
                    					},
                    					{
                    						desc : "Image 2",
                                isDisplayImage: $('[name="displayImg"]').val() ==2,
                    						img :{
                    							file :  $(".img-thumb").eq(1).attr("src"),
                    							ext :  $(".img-thumb").eq(1).attr("alt")
                    						}
                    					},
                    					{
                    						desc : "Image 3",
                                isDisplayImage: $('[name="displayImg"]').val() ==3,
                    						img :{
                    							file :  $(".img-thumb").eq(2).attr("src"),
                    							ext :  $(".img-thumb").eq(2).attr("alt")
                    						}
                    					},
                    					{
                    						desc : "Image 4",
                                isDisplayImage: $('[name="displayImg"]').val() ==4,
                    						img :{
                    							file :  $(".img-thumb").eq(3).attr("src"),
                    							ext :  $(".img-thumb").eq(3).attr("alt")
                    						}
                    					},
                    					{
                    						desc : "Image 5",
                                isDisplayImage: $('[name="displayImg"]').val() ==5,
                    						img :{
                    							file :  $(".img-thumb").eq(3).attr("src"),
                    							ext :  $(".img-thumb").eq(3).attr("alt")
                    						}
                    					},
                    					{
                    						desc : "Image 6",
                                isDisplayImage: $('[name="displayImg"]').val() ==6,
                    						img :{
                    							file :  $(".img-thumb").eq(3).attr("src"),
                    							ext :  $(".img-thumb").eq(3).attr("alt")
                    						}
                    					}
                    		  ],
  	keyWords            : $("#keyWords").val().split(","),
  	pricing             : [
                            {
                              CurrencyType: "INR",
                              stockCost : $("#inrStockCost").val(),
                              mrp : $("#inrMRP").val(),
                              onSale : $('[name="inrOnSale"]:checked').val(),
                              salePrice : $("#inrSalePrice").val(),
                              saleStartDate : $("#inrSaleStartDate").val(),
                              saleEndDate : $("#inrSaleEndDate").val()
                            },
                            {
                              CurrencyType: "USD",
                              stockCost : $("#usdStockCost").val(),
                              mrp : $("#usdMRP").val(),
                              onSale : $('[name="usdOnSale"]:checked').val(),
                              salePrice : $("#usdSalePrice").val(),
                              saleStartDate : $("#usdSaleStartDate").val(),
                              saleEndDate : $("#usdSaleEndDate").val()
                            },
                            {
                              CurrencyType: "EURO",
                              stockCost : $("#euroStockCost").val(),
                              mrp : $("#euroMRP").val(),
                              onSale : $('[name="euroOnSale"]:checked').val(),
                              salePrice : $("#euroSalePrice").val(),
                              saleStartDate : $("#euroSaleStartDate").val(),
                              saleEndDate : $("#euroSaleEndDate").val()
                            },
                            {
                              CurrencyType: "SGD",
                              stockCost : $("#sgdStockCost").val(),
                              mrp : $("#sgdMRP").val(),
                              onSale : $('[name="sgdOnSale"]:checked').val(),
                              salePrice : $("#sgdSalePrice").val(),
                              saleStartDate : $("#sgdSaleStartDate").val(),
                              saleEndDate : $("#sgdSaleEndDate").val()
                            },
                            {
                              CurrencyType: "AUD",
                              stockCost : $("#audStockCost").val(),
                              mrp : $("#audMRP").val(),
                              onSale : $('[name="audOnSale"]:checked').val(),
                              salePrice : $("#audSalePrice").val(),
                              saleStartDate : $("#audSaleStartDate").val(),
                              saleEndDate : $("#audSaleEndDate").val()
                            }
                          ]
  }
  $.ajax({
  	url:"/api/product",
  	type:"POST",
  	data:data,
  	success: function (d) {
  		document.location.href='product-details.html#'+d._id;
  	},
    error: function (d) {
  		errorNotification(d.error);
  	}
  })

}
function onCancel(){

  document.location.href='product-list.html';
}
