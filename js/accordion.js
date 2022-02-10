$(document).ready(function(){
	$('.content_toggle').click(function(){
		$('.content_block').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('.orders-new__item-plus').html('+');
			} else {
				$('.orders-new__item-plus').html('–');
			}							
		});
		return false;
	});
});