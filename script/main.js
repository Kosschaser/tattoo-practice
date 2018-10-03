$(document).ready(function(){

	$('#sl-carousel').slick({
		adaptiveHeight: true,
		dots:true,
		autoplay: true,
		autoplaySpeed: 3000,
		dotsClass: 's-dots',
		prevArrow: '<button type="button" class="button-gone"></button>',
		nextArrow: '<button type="button" class="button-gone"></button>',
		responsive: [{
				breakpoint: 420,
				settings: {
					dots: false
				}
			}]
	})
	$('#gallery').nanogallery2({
		thumbnailHeight:  340,
  		thumbnailWidth:   270,
  		thumbnailBorderHorizontal: 0,
  		thumbnailBorderVertical: 0,
  		thumbnailGutterHeight: 50,
  		thumbnailAlignment: 'justified',
  		fnThumbnailInit: glassInit,
  		thumbnailHoverEffect2: 'scale120|image_contrast_1_0.5',
  		items:[
  			{src: 'https://via.placeholder.com/800x600', srct: 'https://via.placeholder.com/270x340'},
  			{src: 'https://via.placeholder.com/800x600', srct: 'https://via.placeholder.com/270x340'},
  			{src: 'https://via.placeholder.com/800x600', srct: 'https://via.placeholder.com/270x340'},
  			{src: 'https://via.placeholder.com/800x600', srct: 'https://via.placeholder.com/270x340'},
  			{src: 'https://via.placeholder.com/800x600', srct: 'https://via.placeholder.com/270x340'},
  			{src: 'https://via.placeholder.com/800x600', srct: 'https://via.placeholder.com/270x340'},
  			{src: 'https://via.placeholder.com/800x600', srct: 'https://via.placeholder.com/270x340'},
  			{src: 'https://via.placeholder.com/800x600', srct: 'https://via.placeholder.com/270x340'}
  		]
	});

	function glassInit($g){
		$g.find('.nGY2GThumbnailSub').append('<i class="fas fa-search-plus thumb-glass"></i>');
	}

	$('.blogs-content').on('mouseenter', function(){
		$(this).toggleClass('blogs-content--off');
		$(this).toggleClass('blogs-content--on');
	})
	$('.blogs-content').on('mouseleave', function(){
		$(this).toggleClass('blogs-content--off');
		$(this).toggleClass('blogs-content--on');
	})
});