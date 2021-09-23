// Create event listener to enter items below
$("#enter").on("click", function(){
    var task = $("#todoItem").val();
    $("#todoList").append("<div class ='task'>" + task + "<div class = 'x fas fa-archive'></div></div>");
    
});
// Create event listener to delete items below
$(document).on("click", ".x", function(){

    $(this).parent().remove();
});
// Create event listener to toggle 

$(document).on("click", ".task", function() {
    $(this).toggleClass("done");

    if($(this).hasClass("done")){
        $(this).find("div").removeClass("fa-archive");
        $(this).find("div").addClass("fa-award");
    } else {
        $(this).find("div").addClass("fa-archive");
    }
});

$(".remove").on("click", function(){
    $(".task").remove();
})