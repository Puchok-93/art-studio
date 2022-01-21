import modals from "./modules/modals.js";
import sliders from "./modules/sliders.js";
import forms from "./modules/forms.js";
import mask from "./modules/mask.js";
import showMoreCards from "./modules/show-cards";
import calc from "./modules/calc.js";
import filter from "./modules/filter.js";
import pictureSize from "./modules/picture.js";
import accordion from "./modules/accordion.js";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    showMoreCards('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
});
