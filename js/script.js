//Validation of our feedback form;
const form = document.getElementById('form');
form.addEventListener('submit', formSend);
async function formSend(e) {
    let error = formValidate(form);
    if (error > 0) {
        e.preventDefault();
    }
    if (error === 0) {
        return true;
    }


}

function formValidate(form) {
    let error = 0;
    let freq = document.querySelectorAll('._req');

    for (let index = 0; index < freq.length; index++) {
        const input = freq[index];
        formRemoveError(input);

        if (input.classList.contains('_email')) {
            if (emailTest(input)) {
                formAddError(input);
                error++;
                if (input.value === '') {
                    input.value = 'Поле необхідно заповнити';
                }
                else {
                    input.value = 'Невірний формат email';
                }
            }
        } else if (input.classList.contains('_tel')) {
            if (telTest(input)) {
                formAddError(input);
                error++;
                if (input.value === '') {
                    input.value = 'Поле необхідно заповнити';
                }
                else {
                    input.value = 'Невірний формат номеру телефону';
                }
            }
        } else if (input.classList.contains('_spec')) {
            if (input.value === '') {
                formAddError(input);
                error++;
                input.value = 'Поле необхідно заповнити';
            }
            else if (input.value !== 'developer' && input.value !== '' && input.value !== 'QA') {
                formAddError(input);
                error++;
                input.value = 'Невірно вибрана спеціальність';
            }
        } else if  (input.classList.contains('_check') && input.checked === false) {
            formAddError(input);
            error++;
        } else {
            if (input.value === 'Поле необхідно заповнити') {
                formAddError(input);
                error++;
                input.value = 'Поле необхідно заповнити';
            }
            if (input.value === '') {
                formAddError(input);
                error++;
                input.value = 'Поле необхідно заповнити';
            }
        }
    }
    return error;
}

//works with errors;
function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}

function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}

function emailTest(input) {
    //email format;
    const res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
    return !res.test(input.value);
}

function telTest(input) {
    //const res = /^[0-9]+$/ //just a numbers;

    //different formats (the best way is just 10 numbers);
    const res = /^\(?[+ ]?(\d{2})\)?[- ]?(\d{3})?[- ]?(\d{2})?[- ]?(\d{2})[- ]?(\d{3})$/;
    return !res.test(input.value);
}





//Reviews slider
new Swiper('.review__slider', {
    loop: true,
    slidesPerView: 1,
    //autoHeight: true,

    
    scrollbar: {
        el: '.swiper-scrollbar',
        dragable: true
    },

    
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    
        effect: 'slide',

    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    slideToClickedSlide: true,
    centeredSlides: true,
    paginationClickable: true,

    autoplay: {
        delay: 10000,
        stopOnLastSlide: false,
        diasbleOnInteraction: false,
    },
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },  
});

//Mentors slider
new Swiper('.mentors__slider', {
    loop: true,
    slidesPerView: 1,

    
    scrollbar: {
        el: '.swiper-scrollbar',
        dragable: true
    },

    
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    
        effect: 'slide',

    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    slideToClickedSlide: true,
    centeredSlides: true,
    paginationClickable: true,

    autoplay: {
        delay: 10000,
        stopOnLastSlide: false,
        diasbleOnInteraction: false,
    },
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },  
});

const menu = document.querySelector('#mobile-menu');
const links = document.querySelector('.menu');
menu.addEventListener('click', function () {
    if (links.classList.contains("act")) {
        links.classList.remove("act");
    } else {
        links.classList.add("act");
    }

});




//Sitebuilding slider
const slider = document.querySelector('.siteb-container');

var SameClassName = slider.getElementsByClassName("card");
const bulletsType = document.querySelector('.siteb__pagination');
//alert (SameClassName.length);

let mySwiper;

function mobileSlider() {
   /* if (SameClassName.length > 6) {
        mySwiper = new Swiper(slider, {
			slidesPerView: 5,
			spaceBetween: 10,
			initialSlide: 0,
			loop: true,
			slideClass: 'card',
		});
    }
	else*/ if (window.innerWidth <= 850 && slider.dataset.mobile == 'false') {
		//bulletsType.classList.add("swiper-pagination");
        mySwiper = new Swiper(slider, {
			slidesPerView: 2,
			spaceBetween: 10,
			initialSlide: 0,
			loop: true,
			slideClass: 'card',
						breakpoints: {
				601: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				0: {
					slidesPerView: 1,
					spaceBetween: 40,
				},
                
			},
            pagination: {
                el: '.swiper-pagination',
                clickable:true,
                type: "bullets",
            },
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 850) {
        //bulletsType.classList.remove("swiper-pagination");
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-initialized')) {
			mySwiper.destroy();
			//alert("destroy");
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});
