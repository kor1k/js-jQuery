// console.dir($('.item')[3]);
// console.dir(document.querySelectorAll('.item'));

$(document).ready(function () {
    $('.item').click(function () {
        console.log($(this));
        $('.active').removeClass('active');
        $(this).addClass('active');
        alert(`index is ${$('div').index(this)}`)
        // $('.item:last-child').addClass('active')
    })
});