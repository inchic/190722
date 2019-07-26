$(function(){
            
    $("#content_Name").click(function(){
        var name = $("#name").val();
        $("#demo").text(name);
    });

    $("#content_Comment").click(function(){
        var name = $("#comment").val();
        $("#demo").text(name);
    });

    $("#content_City").click(function(){
        var name = $("#city").val();
        $("#demo").text(name);
    });


});