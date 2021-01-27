$(document).ready(function(){
    let button = $('#button');
    let modal = $('#modal');
    let close = $('#close');

    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active')
    });
});