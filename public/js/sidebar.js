$(".side-bar-item").click(function(){
    let id = $(this).attr("id");
    $(".side-bar-item").removeClass('active');
    $(`#${id}`).addClass('active');
})
