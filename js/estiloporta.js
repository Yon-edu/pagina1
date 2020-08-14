

$(document).ready(function(){
	$('.enlaces').click(function(){
		var valor = $(this).attr('data-nombre');
		if ( valor == 'todos') {
			$('.fitros').show('1000');
		}else{
			$('.fitros').not('.' + valor).hide('1000');
			$('.fitros').filter('.' + valor).show('1000');
		}

		$('ul.enlaces').click(function(){
			$(this).addClass('activo').siblings().removeClass('activo');
		});

	});
});