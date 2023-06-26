// Подключение функционала "Чертогов Фрилансера"
import { bodyLock, isMobile, _slideUp } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import { menuClose } from "./functions.js";


// Socials header
if (document.querySelector('.social-header')) {
  document.querySelector('.social-header__text').addEventListener('click', () => {
    document.querySelector('.social-header__text').style.display = 'none';
    document.querySelector('.social-header__icons').style.display = 'flex';
  })
}

// Brands hover 

const allBrands = document.querySelectorAll('.brands__slide');

if (allBrands.length > 0) {
  allBrands.forEach(brand => {
    brand.addEventListener('mouseenter', (e) => {
      let color = brand.dataset.hoverColor;
      color != '' ? e.target.style.backgroundColor = color : e.target.style.backgroundColor = '#171717';
    })
    brand.addEventListener('mouseleave', function (e) {
      e.target.style.backgroundColor = '#fff';
    });
  })
}

// Show Image onload in search form

const fileInput = document.querySelector('.form-search-form__file');
const fileImage = document.querySelector('.form-search-form__label img');


if (fileInput) {
  let image = document.getElementById("image");

  fileInput.addEventListener('change', function () {
    fileImage.src = URL.createObjectURL(fileInput.files[0]);
    fileImage.style.display = "block";
  });
}

// Show Image onload in search page

const fileInputSearchPage = document.querySelector('.form-search-page__file');
const fileImagSearchPage = document.querySelector('.form-search-page__label_img img');
const additionalImageSearchPage = document.querySelector('.form-search-page__img-text')


if (fileInputSearchPage) {
  fileInputSearchPage.addEventListener('change', function () {
    fileImagSearchPage.src = URL.createObjectURL(fileInputSearchPage.files[0]);
    fileImagSearchPage.style.display = "block";
    fileImagSearchPage.style.width = "100%";
    fileImagSearchPage.style.maxHeight = "100%";
    fileImagSearchPage.style.objectFit = "contain";
    document.querySelector('.form-search-page__img-text').style.display = 'none';
  });
}

// mobile menu overlay click

document.querySelector('.mobile-menu__overlay').addEventListener('click', menuClose);

// Cubeportfolio

if (document.querySelector('#js-grid-masonry')) {
  // init cubeportfolio
  $('#js-grid-masonry').cubeportfolio({
    layoutMode: 'mosaic',
    defaultFilter: '*',
    animationType: 'slideDelay',
    gapHorizontal: 40,
    gapVertical: 40,
    gridAdjustment: 'responsive',
    mediaQueries: [
      {
        width: 991,
        cols: 2,
        options: {
          caption: '',
          gapHorizontal: 40,
          gapVertical: 40,
        }
      }, {
        width: 767,
        cols: 2,
        options: {
          caption: '',
          gapHorizontal: 10,
          gapVertical: 10,
        }
      }, {
        width: 320,
        cols: 1,
        options: {
          caption: '',
          gapHorizontal: 40,
          gapVertical: 0,
        }
      }],
    caption: 'overlayBottomAlong',
    displayType: 'bottomToTop',
    displayTypeSpeed: 100,

    // lightbox
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
    lightboxTitleSrc: 'data-title',
    lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
  });
}

// Change input value in usercab and checkout

const usercabChangeName = document.querySelector('#change-name form');
const usercabChangeEmail = document.querySelector('#change-email form');
const usercabChangePhone = document.querySelector('#change-phone form');
const usercabChangeDate = document.querySelector('#change-date form');
const usercabChangeAddress = document.querySelector('#change-address form');

if (usercabChangeName) usercabChangeName.addEventListener("submit", (() => {
  flsModules.popup.close("#change-name");
  document.querySelector("input[name=account_first_name]").value = usercabChangeName.querySelector("input").value;
}));
if (usercabChangeEmail) usercabChangeEmail.addEventListener("submit", (() => {
  flsModules.popup.close("#change-email");
  document.querySelector("input[name=account_email]").value = usercabChangeEmail.querySelector("input").value;
}));
if (usercabChangePhone) usercabChangePhone.addEventListener("submit", (() => {
  flsModules.popup.close("#change-phone");
  document.querySelector("input[name=billing_phone]").value = usercabChangePhone.querySelector("input").value;
}));
if (usercabChangeDate) usercabChangeDate.addEventListener("submit", (() => {
  flsModules.popup.close("#change-date");
  document.querySelector("input[name=user_date]").value = usercabChangeDate.querySelector("input").value;
}));

if (usercabChangeAddress) {
  let country;
  document.addEventListener("selectCallback", (function (e) {
    const currentSelect = e.detail.select;
    country = currentSelect.options[currentSelect.selectedIndex].innerHTML;
  }));
  usercabChangeAddress.addEventListener("submit", (() => {
    let inputAddressValue = country + ", ";
    flsModules.popup.close("#change-address");
    usercabChangeAddress.querySelectorAll("input").forEach((input => {
      inputAddressValue += `${input.value}, `;
    }));
    document.querySelector("input[name=checkout-address]").value = inputAddressValue;

    // Заполняем стандартные поля WC

    billing_city.value = document.querySelector('input[name=change_city]').value;
    billing_address_1.value = document.querySelector('input[name=change_street]').value;
    billing_address_2.value = document.querySelector('input[name=change_building]').value;
    /* billing_country.value = document.querySelector('select[name="change_country"]').value; */

    const hiddenCountrySelect = document.querySelectorAll('.woocommerce-billing-fields__field-wrapper .select__option');

    hiddenCountrySelect.forEach((selectItem, index) => {
      if (selectItem.dataset.value == document.querySelector('select[name="change_country"]').value) {
        selectItem.click();
        document.body.click();
      }
    })
  }));
}
/* Записываем выбранный цвет в inpit[type=hidden] при изменении и загрузке страницы*/

const inputTypeHidden = document.querySelector('input[name=chosecolor]');
const chooseColorSelect = document.querySelector('.char-card__color');

if (inputTypeHidden && chooseColorSelect) {
  document.addEventListener('click', () => {
    inputTypeHidden.value = chooseColorSelect.options[chooseColorSelect.selectedIndex].innerHTML;
  });
  document.addEventListener("selectCallback", function (e) {
    const currentSelect = e.detail.select;
    if (currentSelect.classList.contains('char-card__color')) {
      inputTypeHidden.value = currentSelect.options[currentSelect.selectedIndex].innerHTML;
      document.querySelector('.actions-card__add-to-cart').value = document.querySelector('.char-card__volume').value;
    }
  });
}

const sizeSelect = document.querySelector('.top-card__select');

if (sizeSelect) {

  document.addEventListener("selectCallback", function (e) {
    const currentSelect = e.detail.select;
    const currentOption = sizeSelect.options[sizeSelect.selectedIndex].dataset.price;
    const currentPrice = new Intl.NumberFormat("ru").format(currentOption);
    document.querySelector('.single_add_to_cart_button').value = currentSelect.value;
    document.querySelector('.top-card__price').innerHTML = `${currentPrice} ₽`;
  });
}

// Записываем выбранный цвет в input hidden

const productColors = document.querySelectorAll('input[name=product-color]');

if (productColors.length > 0) {
  productColors.forEach(color => {
    document.addEventListener('DOMContentLoaded', function () {
      const hiddenFieldForColor = document.querySelector('input[name=product-color-input]');
      if (color.checked) {
        hiddenFieldForColor.value = color.value;
      }
    });
    color.addEventListener("click", function (e) {
      if (color.checked) {
        const hiddenFieldForColor = document.querySelector('input[name=product-color-input]');
        hiddenFieldForColor.value = color.value;
      }
    });
  })
}

const colorBlocks = document.querySelectorAll('.cart .item-catalog .variation');

if (colorBlocks.length > 0) {
  colorBlocks.forEach(color => {
    if (color.querySelector('dd').innerHTML == '') {
      color.style.display = 'none';
    }
  })
}

//========================================================================================================================================================

jQuery(document).on('berocket_ajax_filtering_on_update', function (data) {

  bapf_select2_disable_for_parent(jQuery(document));
  document.querySelector('.main-text').style.display = 'none';
  setTimeout(function () {
    if (!!flsModules && flsModules.select) {
      let selects = document.querySelectorAll("select:not([hidden])");
      if (selects.length) {
        for (let index = 0; index < selects.length; index++) {
          const select = selects[index];
          flsModules.select.selectInit(select);
        }
      }
    }
  }, 1);
});

//========================================================================================================================================================
// Удаляем ссылки с картинок в описании товара

const imgLinks = document.querySelectorAll('.description-card img');

if (imgLinks.length > 0) {
  imgLinks.forEach(link => {
    link.style.cursor = 'default';
    link.parentNode.addEventListener('click', (e) => {
      e.preventDefault();
    })
  })
}

//========================================================================================================================================================
// Удаляем ссылки у основных категорий для мобильного меню в бургере

const mobMenuLinks = document.querySelectorAll('.menu__list>.menu__item>.menu__link');

function deleteLinks() {
  if (window.innerWidth < 768 && mobMenuLinks.length > 0) {
    mobMenuLinks.forEach(link => {
      const childMenu = link.parentNode.querySelector('.sub-menu');
      if (childMenu) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
        })
      }
    })
  }
}

document.addEventListener('DOMContentLoaded', deleteLinks);

//========================================================================================================================================================
// Удаляем лишние get параметры из ссылок в Списке желаний

const wishlistLinks = document.querySelectorAll('.usercab .tinvwl-table-manage-list a');

if (wishlistLinks) {
  wishlistLinks.forEach(link => {
    link.href = link.href.split('?')[0];
  })
}

//========================================================================================================================================================

// Поиск по странам в оформлении заказа


document.addEventListener('DOMContentLoaded', () => {
  const countryBlock = document.querySelector('.change-field .delivery-address__item .select_delivery-address__select');
  if (countryBlock) {
    const countrySearchInput = countryBlock.querySelector('.select__title input');
    const allCountry = countryBlock.querySelectorAll('.select__option');

    countrySearchInput.addEventListener('input', () => {
      allCountry.forEach(country => {
        let text = country.innerHTML;
        text.toLowerCase().includes(countrySearchInput.value.toLowerCase()) ? country.style.display = 'block' : country.style.display = 'none';
      })
    })
  }
})

//========================================================================================================================================================

// Выбор размера (рдизайн)

const allSizes = document.querySelectorAll('.sizes-top-card .options__item');
const sizesSpollers = document.querySelector('.sizes-top-card [data-spollers]');
const sizesSpollerTitle = document.querySelector('.sizes-top-card .spollers__title');

if (allSizes.length) {
  allSizes.forEach(item => {
    item.addEventListener('click', () => {
      if (!item.querySelector('input').disabled) {

        if (document.querySelector('button[name=add-to-cart]')) {
          document.querySelector('button[name=add-to-cart]').value = item.querySelector('input').value;
        }

        if (item.querySelector('input').checked) {
          sizesSpollerTitle.innerText = `${item.querySelector('.options__text').innerHTML} — ${item.querySelector('.options__price').innerHTML}`;
          document.querySelector('.top-card__price').innerHTML = `${item.querySelector('.options__price').innerHTML}`;
        }

        const spollerActiveTitle = sizesSpollers.querySelector('[data-spoller]._spoller-active');
        const spollerSpeed = sizesSpollers.dataset.spollersSpeed ? parseInt(sizesSpollers.dataset.spollersSpeed) : 500;
        if (spollerActiveTitle && !sizesSpollers.querySelectorAll('._slide').length) {
          spollerActiveTitle.classList.remove('_spoller-active');
          _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
        }
      }
    });
  })
}

//========================================================================================================================================================
