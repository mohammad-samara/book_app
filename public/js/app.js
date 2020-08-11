$('#toggleBar').on('click', function(){
    $('.toggle-menu').slideToggle();
});

$('.toggle-form').on('click', function(){
    // $('.add-book').toggle();
    $(this).next().slideToggle();
});

$('#editData').on('click', function(){
    $('.updateDataForm').slideToggle();
});