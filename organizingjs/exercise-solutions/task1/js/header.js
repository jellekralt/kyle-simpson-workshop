$(document).ready(function(){
	var $modal = $("[rel=js-modal]");

	$("[rel=js-header] > [rel=js-controls]").on("click","> [rel*=js-]",function(evt){
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		var url = $(evt.target).attr("href");

		$.ajax(url,{
			dataType: "text",
			success: function(contents){
				$modal.html(contents).show();
			}
		});
	});
});
