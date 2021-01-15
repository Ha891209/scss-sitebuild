'use strict';

let scroll_start = 0;
const start = $('.navbar');
let offset = start.offset();

if (start.length) {
    $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $(".navbar").addClass('bg-light');
        } else {
            $(".navbar").removeClass('bg-light');
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})