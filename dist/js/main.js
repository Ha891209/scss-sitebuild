'use strict';

const menu = document.querySelector('.nav');
window.onscroll = function () {
    'use strict';
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
        menu.classList.add("white-bg");
    }
    else {
        menu.classList.remove("white-bg");
    }
};