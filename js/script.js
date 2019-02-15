// console.dir($('.item')[3]);
// console.dir(document.querySelectorAll('.item'));

$(document).ready(function () {
    $('.item').click(function () {
        if (!$(this).hasClass('active')){
            console.log($(this));
            $('.active').removeClass('active');
            $(this).addClass('active');
            alert(`index is ${$('.item').index(this)+1}`)
            // $('.item:last-child').addClass('active')
        }
        $('.wrapper').slick({
            slidesToShow: 3
        })
    })
});

