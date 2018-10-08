$(document).ready(function(){

	$('#sl-carousel').slick({
		adaptiveHeight: true,
		dots:true,
		autoplay: true,
		autoplaySpeed: 3000,
		dotsClass: 's-dots',
		arrows: false,
		responsive: [{
				breakpoint: 420,
				settings: {
					dots: false
				}
			}]
	})
	$('#artists-carousel').slick({
		slidesToScroll: 1,
		slidesToShow: 4,
		variableWidth: false,
		pauseOnHover: true,
		infinite: true,
		draggable: false,
		accessibility: false,
		touchMove: false,
		swipe: false,
		arrows: true,
		prevArrow: '<button type="button" class="artists-prev"></button>',
		nextArrow: '<button type="button" class="artists-next"></button>'
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

	function getName(picture){
		return $(picture).find('.artists-name').text();	
	}
	function getPic(picture){
		return $(picture).find('img').attr('src');
	}
		
	let artName = $('#ARTIST_NAME');
	let desc = $('#DESCRIPTION');
	let artImg = $('#ARTIST_PIC');
		
	$('.artists-item').on('click', function(){
		let thumbName = getName($(this));
		let thumbPic = getPic($(this));
		console.log(thumbPic);
		$.ajax({
			url: "src/authors.xml",
			contentType: 'xml',
			success: function(data){
				let header = $(data).find('author');
				for(let i=0; i < header.length; i++){
					let author = $(header[i]).find('name');
					let authorName = author.text();
					if(thumbName == authorName){
						$('#ARTIST_NAME, #DESCRIPTION, #ARTIST_PIC').css('opacity', '0');
						artName.text(authorName);
						let descXML = $(header[i]).find('description');
						desc.text(descXML.text());
						artImg.attr('src', thumbPic);
						$('#ARTIST_NAME, #DESCRIPTION, #ARTIST_PIC').stop()
						.animate({opacity: 1}, 'fast');
					}
					
				}
			},
			error: function(xhr, error, message){
				alert(error);
				console.log(message);
			}
		})
	})
});