$(function(){
          
    $("#content_Dis").click(function(){
        $("#content_text1").hide();
    });

    $("#content_Atl").click(function(){
        $("#content_text1").show();
       
    });
    
    $("#content_End").click(function(){
        var te =  $("#content_text2").text();
        $("#content_text1").append(te);
    });

});