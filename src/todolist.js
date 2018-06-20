/**
 * Created by Eleni on 18/6/2018.
 */

$("#btn1").click(function(){

    // clear error message
    $("#error-message").remove();
    var textSubmitted = $("#newTodo").val();
    if( textSubmitted != "" && (! /^[0-9]+$/.test(textSubmitted))){
        $("#todo-list").append($('<li class="list-item">' +  textSubmitted + '</li>').on('click', onclickHnadler));
    }
    else{
        $('#newTodo').after('<span id="error-message" style="color:red"> Letters only </span>');
    }
});

$("#todo-list").bind("DOMSubtreeModified", function(){
    $("#counter").text($("#todo-list li").length)
});

$('.list-item').on('click', onclickHnadler);

function onclickHnadler() {
    var selectedElement = $(this);
    selectedElement.remove();
    $('#done-list')
        .append($('<li class="done-list-item"></li>')
            .text(selectedElement.text()).on('click', onclickHandler2));
};


$('.done-list-item').on('click', onclickHandler2);

function onclickHandler2() {
    var selectedElement = $(this);
    selectedElement.remove();
    $('#todo-list')
        .append($('<li class="list-item"></li>')
            .text(selectedElement.text()).on('click', onclickHnadler));
};

