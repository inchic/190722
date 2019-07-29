$(function(){
            
    $("#content_Name").click(function(){
        var name11 = $("#name").attr("name");
        alert(name11);
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