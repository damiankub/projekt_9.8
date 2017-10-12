$(function(){
	//this code will execute after the DOM is loaded
	var iphoneColorChangeNumber = 1;
	var iphonColorBlue = ['#028c71', '#50b8a4'];
	var iphonColorGreen = ['#00cb00', '#00ff26'];
	var iphonColorYellow = ['#ff9c1d', '#ffd51d'];
	var iphonColorRed = ['#eb5959', '#ff9292'];
	var iphonColorWhite = ['#dcdcdc', '#f4f4f4'];
	var iphonCololrButtons = $('.iphone-button-left, .iphone-button-left-second, .iphone-button-left-third, .iphone-button-top');
	var iphonColor = $('.iphone');
	var iphonWallPaper = $('.iphone-screen');



	function ChangeColorIphon() {
		if(iphoneColorChangeNumber == 1) {
			iphonCololrButtons.css({'border-color': iphonColorBlue[0], 'background-color': iphonColorBlue[0] });	
			iphonColor.css('border-color', iphonColorBlue[1]);
			iphonWallPaper.css('background-image', 'url(https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)');
			
		}
		else if(iphoneColorChangeNumber == 2) {
			iphonCololrButtons.css({'border-color': iphonColorGreen[0], 'background-color': iphonColorGreen[0] });
			
			iphonColor.css('border-color', iphonColorGreen[1]);
			iphonWallPaper.css('background-image', 'url(https://images.pexels.com/photos/212324/pexels-photo-212324.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)');
		}
		else if(iphoneColorChangeNumber == 3) {
			iphonCololrButtons.css({'border-color': iphonColorYellow[0], 'background-color': iphonColorYellow[0] });
			iphonColor.css('border-color', iphonColorYellow[1]);
			iphonWallPaper.css('background-image', 'url(https://images.pexels.com/photos/383640/pexels-photo-383640.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)');

		}
		else if(iphoneColorChangeNumber == 4) {
			iphonCololrButtons.css({'border-color': iphonColorRed[0], 'background-color': iphonColorRed[0] });
			iphonColor.css('border-color', iphonColorRed[1]);
			iphonWallPaper.css('background-image', 'url(https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)');

		}
		else if(iphoneColorChangeNumber == 5) {
			iphonCololrButtons.css({'border-color': iphonColorWhite[0], 'background-color': iphonColorWhite[0] });
			iphonColor.css('border-color', iphonColorWhite[1]);
			iphonWallPaper.css('background-image', 'url(https://images.pexels.com/photos/4620/snow-landscape-trees-winter.jpg?w=1260&h=750&auto=compress&cs=tinysrgb)');

		}
		$('#js-changeColorNumber').text(iphoneColorChangeNumber+' / 5');

	}
	ChangeColorIphon();

		$('#js-changeColorArrowLeft').click(function(){
		if(iphoneColorChangeNumber== 1) {
			iphoneColorChangeNumber = 5;
		}
		else {
			--iphoneColorChangeNumber;
		}
			ChangeColorIphon();
		});

	$('#js-changeColorArrowRight').click(function(){
		if(iphoneColorChangeNumber== 5) {
			iphoneColorChangeNumber = 1;
		}
		else {
			++iphoneColorChangeNumber;
		}
			ChangeColorIphon();
		});
// SHOW IPHONE-------------------
	if ($(window).width() > 747) {
		$("#show-iphone-button").click(function() {
			$("#iphon-hidden").animate({maxHeight: "630px"});
		});
		$("#js-changeColorArrowLeft").click(function() {
			$("#iphon-hidden").animate({maxHeight: "630px"});
		});
		$("#js-changeColorArrowRight").click(function() {
			$("#iphon-hidden").animate({maxHeight: "630px"});
		});
	}
	else {

	}


// GALLERY ---------------------


	var galleryIamge = [$('.gallery-image-first'), $('.gallery-image-second')];
	var galleryArrayNumber = 0;
	var galleryImageUrl = [
			'url(https://images.pexels.com/photos/4620/snow-landscape-trees-winter.jpg?w=1260&h=750&auto=compress&cs=tinysrgb)',
			'url(https://images.pexels.com/photos/575102/pexels-photo-575102.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)',
			'url(https://images.pexels.com/photos/586688/pexels-photo-586688.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)',
			'url(https://images.pexels.com/photos/417239/pexels-photo-417239.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)',
			'url(https://images.pexels.com/photos/161947/greece-mykonos-breasts-aphrodite-161947.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)',
			'url(https://images.pexels.com/photos/586134/pexels-photo-586134.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb)',
	];
	 
	$('#js-changeImageArrowLeft').click(function(){
			if(galleryArrayNumber == 0 || galleryArrayNumber == 1 ) {
				galleryArrayNumber = galleryImageUrl.length-2;
			}
			else if (galleryArrayNumber == 2 || galleryArrayNumber == 3 ) {
				galleryArrayNumber = 0;
			}
			else {
				galleryArrayNumber = galleryImageUrl.length-4;
			}
				ChangeImageGallery();
		});
	$('#js-changeImageArrowRight').click(function(){
			if(galleryArrayNumber == galleryImageUrl.length-1) {
				galleryArrayNumber = 0;
			}
			else
			{
				++galleryArrayNumber;
			}
				ChangeImageGallery();
		});

	function ChangeImageGallery() {
		galleryIamge[0].css('background-image', galleryImageUrl[galleryArrayNumber]);
		galleryIamge[1].css('background-image', galleryImageUrl[++galleryArrayNumber]);
	}
	
	ChangeImageGallery();
	
});
