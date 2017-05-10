function editImg(prodImg) {
	$("#prodImg").attr('src', '../dist/img/'+prodImg+'.jpg');
}

function closed(divId){
	$('#'+divId).hide();
}
function opened(divId){
	$('#'+divId).show();
}

$(function () {
	//Initialize Select2 Elements
	$(".select2").select2();
});

function parentRefresh(location) {
	parent.location.href = location;
}
