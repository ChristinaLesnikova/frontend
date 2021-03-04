$(function(){
	// Main slider
	$('.main_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    	$(this).find('.slick-active').addClass('animated-out')

    	$(this).find('.slick-slide:eq('+ nextSlide +')').addClass('animated-in')
	})

	$('.main_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$(this).find('.slick-slide').removeClass('animated-out animated-in')
	})

	$('.main_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		arrows: false,
		dots: false,
		infinite: true,
		fade: true,
		autoplay: true,
  		autoplaySpeed: 5000,
  		pauseOnFocus: false,
  		pauseOnHover: false,
	  	touchThreshold: 10
	})

	$('.slider_img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		arrows: true,
		dots: false,
		infinite: true,
		touchThreshold: 10,
		lazyLoad: 'progressive',
		centerMode: true,
		centerPadding: '21.7%',
		focusOnSelect: true,
		responsive: [
			{
			breakpoint: 1025,
				settings: {
					centerPadding: '15%',
				}
			}
		]
	})


	// Изменение количества товара
    $('body').on('click', '.amount .minus', function(e) {
	    e.preventDefault()

	    let parent = $(this).closest('.amount')
	    let input = parent.find('input')
	    let inputVal = parseFloat( input.val() )
	    let minimum = parseFloat( input.data('minimum') )
	    let step = parseFloat( input.data('step') )

	    if( inputVal > minimum ){
	    	input.val( inputVal-step )
	    }
	})

	$('body').on('click', '.amount .plus', function(e) {
	    e.preventDefault()

	    let parent = $(this).closest('.amount')
	    let input = parent.find('input')
	    let inputVal = parseFloat( input.val() )
	    let maximum = parseFloat( input.data('maximum') )
	    let step = parseFloat( input.data('step') )

	    if( inputVal < maximum ){
	    	input.val( inputVal+step )
	    }
	})


	//Календарь
	$('.datepicker-js1').datepicker({
		position: "bottom center",
		toggleSelected: false,
		autoClose: true,
		onSelect: function(formattedDate, date, inst){
			inst.$el.closest('.main_filter').find('.datepicker-js2').data('datepicker').update('minDate', date)
		}
	})

	$('.datepicker-js2').datepicker({
		position: "bottom center",
		toggleSelected: false,
		autoClose: true,
		onSelect: function(formattedDate, date, inst){
			inst.$el.closest('.main_filter').find('.datepicker-js1').data('datepicker').update('maxDate', date)
		}
	})
})

$(window).load(function(){
	$planMap = $('#plan').mapster({
		image: '100%',
        stroke: true,
		fillOpacity: 0.3,
        strokeWidth: 1,
        strokeColor: '004872',
		fillColor: '004872',
		clickNavigate: true,
        isSelectable: false,
        showToolTip: true,
		scaleMap: true,
		onMouseover: function (e) {
            var href = $(e.e.currentTarget).data('name')

			// console.log(e.e.clientY)

            $(href).css({
                'top': e.e.clientY,
                'left': e.e.clientX,
            }).addClass('show')

            // if( e.e.offsetX + 150 > 700 ){
            //     $(href).css({
            //         'left': e.e.pageX,
            //     })
            // }
        },
        onMouseout: function () {
            $('.name_plan').removeClass('show')
        }
    })

	
	$('body').on('click', 'header .map_link, header .map_linkMob', function(e) {
	    e.preventDefault()

	    $('.modal_map').addClass('active')
	    $('body').addClass('lock_map')
	})


	$('body').on('click', '.overlay_plan, .plan_close', function(e) {
	    e.preventDefault()

	    $('.modal_map').removeClass('active')
	    $('body').removeClass('lock_map')
	})


	if ( $(window).width() > 1024 ) {
		// Анимации
		AOS.init({
			offset: 90,
			delay: 200,
			duration: 1000,
			once: true
		})
	}

	if( $(window).width() > 1024 && $('.parallax_el').length ){
		//init
		var controller = new ScrollMagic.Controller()

		var imgAnimation = new TimelineMax()
		.fromTo('.information_anim1 .img > *', 1, {y: '10%'}, {y: '-10%'})

		new ScrollMagic.Scene({
			triggerElement: ".information_anim1 .img",
			duration: $(window).height()*1.8,
			triggerHook: "onEnter",
			offset: '50%'
		})
		.setTween(imgAnimation)
		.addTo(controller)


		var imgAnimation2 = new TimelineMax()
		.fromTo('.information_anim2 .img > *', 1, {y: '10%'}, {y: '-10%'})

		new ScrollMagic.Scene({
			triggerElement: ".information_anim2 .img",
			duration: $(window).height()*1.8,
			triggerHook: "onEnter",
			offset: '50%'
		})
		.setTween(imgAnimation2)
		.addTo(controller)

		var imgAnimation3 = new TimelineMax()
		.fromTo('.information_anim3 .img > *', 1, {y: '10%'}, {y: '-10%'})

		new ScrollMagic.Scene({
			triggerElement: ".information_anim3 .img",
			duration: $(window).height()*1.8,
			triggerHook: "onEnter",
			offset: '50%'
		})
		.setTween(imgAnimation3)
		.addTo(controller)


		var imgAnim1 = new TimelineMax()
		.fromTo('.main_banner1 .img img', 1, {y: '10%'}, {y: '-10%'})

		new ScrollMagic.Scene({
			triggerElement: ".main_banner1",
			duration: $(window).height()*1.8,
			triggerHook: "onEnter",
			offset: '50%'
		})
		.setTween(imgAnim1)
		.addTo(controller)

		var imgAnim2 = new TimelineMax()
		.fromTo('.main_banner2 .img img', 1, {y: '10%'}, {y: '-10%'})

		new ScrollMagic.Scene({
			triggerElement: ".main_banner2",
			duration: $(window).height()*1.8,
			triggerHook: "onEnter",
			offset: '50%'
		})
		.setTween(imgAnim2)
		.addTo(controller)

		var imgAnim3 = new TimelineMax()

		.fromTo('.main_banner3 .img img', 1, {y: '10%'}, {y: '-10%'})

		new ScrollMagic.Scene({
			triggerElement: ".main_banner3 .img",
			duration: $(window).height()*1.8,
			triggerHook: "onEnter",
			offset: '50%'
		})
		.setTween(imgAnim3)
		.addTo(controller)
	}


	if( $('.main_filter').length && $('.main_filter').offset().top/2 < $(window).scrollTop() ) {
		$('.main_filter').removeClass('topAll')
	} else {
		if($(window).width() > 1024){
			$('.main_filter').addClass('topAll')
		}
	}


	// Выравнивание элементов в сетке
	$('.advantages .grid').each(function() {
		advantagesHeight($(this), parseInt($(this).css('--advantages_count')))
	})

	$('.specials .grid').each(function() {
		specialsHeight($(this), parseInt($(this).css('--specials_count')))
	})


	sliderPhotos()

	sliderRooms()
})


$(window).resize(function () {
	sliderPhotos()

	sliderRooms()

	// Выравнивание элементов в сетке
	$('.advantages .grid').each(function() {
		advantagesHeight($(this), parseInt($(this).css('--advantages_count')))
	})

	$('.specials .grid').each(function() {
		specialsHeight($(this), parseInt($(this).css('--specials_count')))
	})
})


$(window).on("scroll", function () {
	if( $('.main_filter').length && $('.main_filter').offset().top/2 < $(window).scrollTop() &&  $(window).width() > 1024 ) {
		$('.main_filter').removeClass('topAll')
	} else {
		$('.main_filter').addClass('topAll')
	}
})


function sliderPhotos() {
	if ( $(window).width() > 767 ) {
		$('.main_rooms .room .photos:not(.slick-initialized)').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500,
			arrows: false,
			dots: true,
			infinite: true,
			fade: true,
			touchThreshold: 10
		})
	} else{
		$('.main_rooms .room .photos.slick-initialized').slick('unslick');
	}
}

function sliderRooms() {
	if ( $(window).width() < 768 ) {
		$('.main_rooms .grid').on('init', function(event, slick){
			let thisEl = $(this)

			setTimeout(function(){
				let posArrow = thisEl.find('.photos').height()

				thisEl.find('.slick-arrow').css('top' , posArrow/2)
			}, 100)
		})

		$('.main_rooms .grid').on('setPosition', function(event, slick){
			let posArrow = $(this).find('.photos').height()

			$(this).find('.slick-arrow').css('top' , posArrow/2)
		})

		$('.main_rooms .grid:not(.slick-initialized)').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500,
			arrows: true,
			dots: false,
			infinite: true,
			touchThreshold: 10,
			centerMode: true,
			centerPadding: '10%',
			focusOnSelect: true
		})
	} else{
		$('.main_rooms .grid.slick-initialized').slick('unslick');
	}
}

// Выравнивание
function advantagesHeight(context, step) {
	let start    = 0
	let finish   = step
	let advantages = context.find('.item')

	advantages.find('.name').height('auto')

	for (let i = 0; i < advantages.length; i++) {
		setHeight(advantages.slice(start, finish).find('.name'))

		start  = start + step
		finish = finish + step
	}
}


function specialsHeight(context, step) {
	let start    = 0
	let finish   = step
	let specials = context.find('.offer')

	specials.find('.name').height('auto')

	for (let i = 0; i < specials.length; i++) {
		setHeight(specials.slice(start, finish).find('.name'))

		start  = start + step
		finish = finish + step
	}
}