// // // console.dir($('.item')[3]);
// // // console.dir(document.querySelectorAll('.item'));
// //
// // $(document).ready(function () {
// //     $('.item').click(function () {
// //         if (!$(this).hasClass('active')){
// //             console.log($(this));
// //             $('.active').removeClass('active');
// //             $(this).addClass('active');
// //             alert(`index is ${$('.item').index(this)+1}`)
// //             // $('.item:last-child').addClass('active')
// //         }
// //         $('.wrapper').slick({
// //             slidesToShow: 3
// //         })
// //     })
// // });
// //
//
//
//
// $(document).ready(function(){
//     $('.item').click(function () {
//         if (!$(this).hasClass ('active')){
//             console.log($(this));
//             $('.active').removeClass('active');
//             $(this).addClass('active');
//             alert(`Index ${$(".item").index(this)+1}`)
//         }
//     })
//
//     $('.wrapper').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         dots: true,
//         autoplay: true,
//         autoplaySpeed: 1000,
//     });
//     $('.masonry').masonry({
//         // options
//         itemSelector: '.item',
//         columnWidth: 110
//     });
// });


$(document).ready(function(){
    $('#open-modal').click(function (){
        $('#modal').addClass('open') ;
        $('.overlay').addClass('show')}
    );
    $('.close, .overlay').click(function () {
        $('.overlay').removeClass('show')
        $('#modal').removeClass('open') ;
    })
});