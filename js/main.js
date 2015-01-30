
$(document).ready(function(){
    var rnd = Math.floor(Math.random() * 9) + 1,
        welcome = $('.welcome');
    welcome.addClass('bg' + rnd);
    $('.highlighted-item__checked').addClass('highlighted-item__checked--visible')
    $('.highlighted-item__title').addClass('highlighted-item__title--visible')
});
