$(document).ready(function() {
    $('body').css('background-color', 'beige')
    $('h1').css('text-align', 'center')
    $('#new-movie-form').css('text-align', 'center')
    $('#title').css('margin', '5px')
    $('.submit-button').css('margin', '5px')
    $('.movie-list').css('text-align', 'center')
})

$('#new-movie-form').on("submit",function(e){
    e.preventDefault();
    let title = $('#title').val();
    let rating = $('#rating').val(); 
    $('.movie-list').append('<div>' + title + ' - ' + rating + '<button class="remove-btn">Remove</button> </div>');
    $('#title').val('');
    $('#rating').val(''); 
    $('.remove-btn').css('margin', '7px')
});




$('.movie-list').on("click", ".remove-btn", function(){
    $(this).parent().remove();
});




