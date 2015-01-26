$(document).ready(function(){
    var rnd = Math.floor(Math.random() * 9) + 1,
        welcome = $('.welcome');
//    welcome.removeClass(/bg*/);
    welcome.addClass('bg' + rnd);
    })
