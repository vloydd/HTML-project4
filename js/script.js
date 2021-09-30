//Validation of our feedback form;
const form = document.getElementById('form');
form.addEventListener('submit', formSend);
//func for options for sending a form;
async function formSend(e) {
    let error = formValidate(form);
    //Для виведення кстi помилок у формi, взаємодія з класом error;
    //document.getElementById("error").innerHTML = error;

    //if we have errors, we don't move;
    if (error > 0) {
        e.preventDefault();
    }
    //if we haven't eroors, we keep going;
    if (error === 0) {
        return true;
    }


}

//looking for errors in our form and return its amount;
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
        }/*if (document.querySelector('#agree:checked') !== null) {
            formAddError(input);
            error++;
        }*/
        
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


const slider= document.querySelector('.siteb-slider');
/*let mySwiper;

function mobile() {
    if (window.innerWidth < 850) {
        mySwiper =  new Swiper(slider,  {
            slidersPerView: 2,
            spaceBetween: 50,
            loop: true,
            slideClass: 'siteb-slider__slide',
        });  
    }
    if (window.innerWidth >= 850) {
        mySwiper.destroy();
    }
}
mobile();
window.addEventListener('resize', () => {
    mobile();   
});*/


//REQUIred;
/*let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 800 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 2,
			spaceBetween: 20,
			loop: true,
			slideClass: 'siteb-slider__slide',
			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 800) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});*/

new Swiper('.siteb-slider', {
    slidesPerView: 3,
    //width: 1220,
    loop: true,
    initalSlide: 1,
    slideToClickedSlide: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
});





new Swiper('.review__slider', {
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
    //spaceBetween: 50,
    //initialSlide: 0,
    //init: false,    
    //width: 1220,
    /*breakpoints: {
        851: {
            slidesPerView: 3,
            spaceBetween: 50,
            init: false,
            grabCursor: false,
            touchRatio: 0, 
            loop: false,  
        },
        601: {
            loop: false,
            slidesPerView: 2,
            grabCursor: true,
            spaceBetween: 10,
            touchRatio: 2,

        },
        0: {
            loop: false,
            slidesPerView: 1,
            grabCursor: true,
            touchRatio: 3,
        }
    },*/


    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    slideToClickedSlide: true,
    centeredSlides: true,
    paginationClickable: true,

    //a11y: true,
    //keyboardControl: true,
        // pagination: '.swiper-pagination',
    //paginationClickable: true,
        /*mousewheel: {
        sensitivity: 5,
        eventntsTarget: ".image-slider",
    },*/


    /*grabCursor: true,

    touchRatio: 1,
    freeMode: true,
    pagination: false,
    scrollContainer: false,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    slidesPerView: 3,
    watchOverflow: true,
    initialSlide: 0,*/

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
    //spaceBetween: 50,
    //initialSlide: 0,
    //init: false,    
    //width: 1220,
    /*breakpoints: {
        851: {
            slidesPerView: 3,
            spaceBetween: 50,
            init: false,
            grabCursor: false,
            touchRatio: 0, 
            loop: false,  
        },
        601: {
            loop: false,
            slidesPerView: 2,
            grabCursor: true,
            spaceBetween: 10,
            touchRatio: 2,

        },
        0: {
            loop: false,
            slidesPerView: 1,
            grabCursor: true,
            touchRatio: 3,
        }
    },*/


    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    slideToClickedSlide: true,
    centeredSlides: true,
    paginationClickable: true,

    //a11y: true,
    //keyboardControl: true,
        // pagination: '.swiper-pagination',
    //paginationClickable: true,
        /*mousewheel: {
        sensitivity: 5,
        eventntsTarget: ".image-slider",
    },*/


    /*grabCursor: true,

    touchRatio: 1,
    freeMode: true,
    pagination: false,
    scrollContainer: false,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    slidesPerView: 3,
    watchOverflow: true,
    initialSlide: 0,*/

    /*autoplay: {
        delay: 10000,
        stopOnLastSlide: false,
        diasbleOnInteraction: false,
    },*/
    speed: 800,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },  
});