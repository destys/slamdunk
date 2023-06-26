/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Autoplay, Thumbs, FreeMode, Pagination, Mousewheel } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице


	if (document.querySelector('.brands__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.brands__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			slidesPerGroup: 3,
			spaceBetween: 10,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			preloadImages: true,
			//centeredSlides: true,
			//lazy: true,

			// Эффекты
			//effect: 'fade',
			/* autoplay: {
				delay: 6000,
				disableOnInteraction: false,
			}, */

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 10,
					autoHeight: true,
					centeredSlides: true,
					slidesPerGroup: 1,
					initialSlide: 1,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
					initialSlide: 0,
				},
				992: {
					slidesPerView: 5,
					spaceBetween: 10,
				},
				1268: {
					slidesPerView: 7,
					spaceBetween: 10,
					freeMode: true,
					slidesPerGroup: 3,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.main-sales__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.main-sales__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay],

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 15,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: true,
			//freeMode: true,
			centeredSlides: true,
			lazy: true,

			// Эффекты
			effect: 'fade',
			/* autoplay: {
				delay: 6000,
				disableOnInteraction: false,
			}, */

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/* navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			}, */

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.subcategory__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.subcategory__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay, Navigation, FreeMode, Mousewheel],

			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 32,
			autoHeight: false,
			speed: 800,
			mousewheelControl: true,

			//touchRatio: 1,
			//simulateTouch: false,
			loop: true,
			preloadImages: true,
			freeMode: true,
			//centeredSlides: true,
			lazy: {
				loadPrevNext: true,
			},

			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
					autoHeight: false,
				},
				479: {
					slidesPerView: 2,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
					autoHeight: true,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
				1921: {
					slidesPerView: 'auto',
					spaceBetween: 30,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.gallery-card__slider') && document.querySelector('.gallery-card__slider_thumbs')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		var productThumbs = new Swiper(".gallery-card__slider_thumbs", {
			modules: [Navigation, FreeMode, Mousewheel],
			spaceBetween: 10,
			slidesPerView: 3,
			observer: true,
			observeParents: true,
			autoHeight: false,
			speed: 800,
			freeMode: true,
			mousewheel: true,

			//touchRatio: 1,
			//simulateTouch: false,
			//loop: true,
			preloadImages: true,

			lazy: true,

			breakpoints: {
				1350: {
					direction: "vertical",
				},
			},

			// Скроллбар

			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
		});
		var productImage = new Swiper(".gallery-card__slider", {
			modules: [Navigation, Thumbs, FreeMode],
			slidesPerView: 1,
			spaceBetween: 20,
			thumbs: {
				swiper: productThumbs,
			},
			//touchRatio: 0,
			//simulateTouch: false,
			lazy: true,
			freeMode: true,
			preloadImages: true,

			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 1,
					freeMode: false
				},
				1350: {
					direction: "vertical",
				},
			},
		});
	} else {
		var productImage = new Swiper(".gallery-card__slider", {
			modules: [Navigation, FreeMode],
			slidesPerView: 1,
			spaceBetween: 20,
			//touchRatio: 0,
			//simulateTouch: false,
			freeMode: true,
			lazy: true,
			preloadImages: true,

			breakpoints: {
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 1,
					freeMode: false
				},
				1350: {
					direction: "vertical",
				},
			},
		});
	}
	if (document.querySelector('.related-card__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.related-card__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay, FreeMode, Navigation],

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 16,
			autoHeight: false,
			speed: 800,

			touchRatio: 1,
			//simulateTouch: false,
			loop: true,
			preloadImages: false,
			lazy: true,
			freeMode: true,


			// Эффекты
			//effect: 'fade',
			autoplay: {
				delay: 6000,
				disableOnInteraction: false,
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 32,
				},
			},
		});
	}
	if (document.querySelector('.additional-card__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.additional-card__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay, FreeMode, Navigation],

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 16,
			autoHeight: false,
			speed: 800,

			touchRatio: 1,
			//simulateTouch: false,
			loop: true,
			preloadImages: false,
			lazy: true,
			freeMode: true,


			// Эффекты
			//effect: 'fade',
			autoplay: {
				delay: 6000,
				disableOnInteraction: false,
			},

			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 32,
				},
			},

		});
	}
	if (document.querySelector('.tags-content-blog__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.tags-content-blog__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay],

			observer: true,
			observeParents: true,
			slidesPerView: 10,
			spaceBetween: 16,
			autoHeight: false,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			preloadImages: true,
			//freeMode: true,
			centeredSlides: true,
			//lazy: true,

			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/* navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			}, */

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.related-posts__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.related-posts__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay, Navigation, FreeMode],

			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 40,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			freeMode: true,
			//lazy: true,

			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/* navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			}, */

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			},

			// События
			on: {

			}
		});
	}
	if (document.querySelector('.reviews-about__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.reviews-about__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Autoplay, Pagination, Navigation],

			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 40,
			autoHeight: false,
			speed: 800,

			//touchRatio: 1,
			//simulateTouch: false,
			loop: true,
			//freeMode: true,\
			//lazy: true,

			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			/* navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			}, */

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	// Добавление классов слайдера
	// при необходимости отключить
	bildSliders();

	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});

