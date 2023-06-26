// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceRange = document.querySelector('[data-range]');
	const priceSlider = document.querySelector('[data-range-item]');

	if(priceRange) {
		let itemFrom = priceRange.querySelector('[data-range-from]');
		let itemTo = priceRange.querySelector('[data-range-to]');
		console.log('itemFrom.value: ', Number(itemFrom.value));
		console.log('itemTo.value: ', itemTo.value);
		noUiSlider.create(priceSlider, {
			start: [ Number(itemFrom.value), Number(itemTo.value)], // [0,200000]
			connect: true,
			tooltips: [true, true],
			range: {
				'min': [Number(itemFrom.dataset.rangeFrom)],
				'max': [Number(itemTo.dataset.rangeTo)]
			}
		});
	}
}
rangeInit();
