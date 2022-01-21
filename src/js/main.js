import modals from "./modules/modals.js";
import sliders from "./modules/sliders.js";
import forms from "./modules/forms.js";
import mask from "./modules/mask.js";
import showMoreCards from "./modules/show-cards";
import calc from "./modules/calc.js";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    showMoreCards('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
});
