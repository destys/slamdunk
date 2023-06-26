import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';
/* Маски для полей (в работе) */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../files/modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const phoneInputs = document.querySelectorAll("input[type=tel]");

phoneInputs.forEach(input => {
    const iti = intlTelInput(input, {
        initialCountry: "auto",
        geoIpLookup: function (success, failure) {
            $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
                var countryCode = (resp && resp.country) ? resp.country : "ru";
                success(countryCode);
            });
        },
        separateDialCode: false,
        autoCountryDetect: false,
        autoPlaceholder: "aggressive",
        separateDialCode: false
    });

    input.addEventListener('countrychange', () => {
        const selectedCountryData = iti.getSelectedCountryData();
        console.log('selectedCountryData: ', selectedCountryData);
        const newPlaceholder = intlTelInputUtils.getExampleNumber(selectedCountryData.iso2, true, intlTelInputUtils.numberFormat.INTERNATIONAL);
        iti.setNumber("");
        const currentMask = `+${selectedCountryData.dialCode} ${newPlaceholder.slice(1).replace(/[0-9]/g, "x")}`;
        var im = new Inputmask(currentMask);
        im.definitions['9'] = '';
        im.definitions['x'] = '[0-9]';
        im.mask(input);
    })
});
