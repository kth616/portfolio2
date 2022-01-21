const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	slidesPerView: 1.4,
	spaceBetween: 40,
	breakpoints: {
		// 768px以上の場合
		768: {
			slidesPerView: 2.75,
		},
	}
});


jQuery('.drawer-icon').on('click', function (e) {
	e.preventDefault();

	jQuery('.drawer-icon').toggleClass('is-active')
	jQuery('.drawer-content').toggleClass('is-active')
	jQuery('.drawer-background').toggleClass('is-active')

	return false;
});

jQuery(window).on("scroll", function ($) {
	if (jQuery(this).scrollTop() > 100) {
		jQuery('.to-top').addClass('is-show');
	} else {
		jQuery('.to-top').removeClass('is-show');
	}
});

jQuery('.to-top').click(function () {
	jQuery('body,html').animate({
		scrollTop: 0
	}, 500);
	return false;
});

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function () {
	// .headerクラスがついた要素の高さを取得
	let header = jQuery(".header").innerHeight();
	let speed = 300;
	let id = jQuery(this).attr("href");
	let target = jQuery("#" == id ? "html" : id);
	// トップからの距離からヘッダー分の高さを引く
	let position = jQuery(target).offset().top - header;
	// その分だけ移動すればヘッダーと被りません
	jQuery("html, body").animate(
		{
			scrollTop: position
		},
		speed
	);
	return false;
});

jQuery('.header__nav ul li a').on('click', function () {
	jQuery('.header__nav ul li a').removeClass('is-active');
	jQuery(this).addClass('is-active');
	return false;
});

jQuery('.qa-box-q').on('click', function(){
	jQuery(this).next().slideToggle();
	jQuery(this).toggleClass('is-open');
});


$(function(){
	let form = ( '#js-form' );
	$form.submit(function () {
		$.ajax({
			url: $form.attr('action'),
			data: $form.serialize(),
			type: "POST",
			dataType: "xml",
			statusCode: {
				0: function () {
					//送信に成功したときの処理
					$form.slideUp();
					$('#js-success').slideDown();
				},
				200: function () {
					//送信に失敗したときの処理 
					$form.slideUp();
					$('#js-error').slideDown();
				}
			}
		});

		return false;
	});
	
			// formの入力確認
			let $submit = $( '#js-submit' )
			$( '#js-form input[type="text"] , #js-form textarea').on( 'change' , function(){
				if(
					$( '#js-form input[type="text"]').val() !== "" &&
					$( '#js-form input[type="email"]').val() !== "" &&
					$( '#js-form input[name="entry.19213110"]').prop( 'checked' ) === true
				){
					$submit.prop( 'disabled' , false)
					$submit.addClass( '-active' )
				}else{
					$submit.prop( 'disabled' , true)
					$submit.removeClass( '-active' )
				}
			});
	

});
