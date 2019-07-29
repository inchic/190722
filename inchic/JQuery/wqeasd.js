
        $(function () {
            $("#btn1").click(function () {
                $("#box1").val("Discovery")
            })
            $("#btn2").click(function () {
                $("#box1").val("Atlantis")
            })
            $("#btn3").click(function () {
                $("#box1").val("Endeavour")
            })
        })
    

        $(function () {
            $("#btn21").click(function () {
                $("#stn").text("")
            })
            $("#btn22").click(function () {
                $("#stn").append("<br> 삭제생성붙여넣기삭제생성붙여넣기삭제생성붙여넣기")
            })
            $("#btn23").click(function () {
                $("#stn").append("삭제생성붙여넣기삭제생성붙여넣기삭제생성붙여넣기")
            })
           
        })
   
        $(function () {
            $("#btn4").click(function () {
                $("#chk1,#chk2,#chk3,#chk4").click()
            })
        })
   
        $(function () {
            $("#chk5").click(function () {
                $("#chk6,#chk7,#chk8,#chk9").click()
            })
        })
 

    
        $(function () {
            $("#button10").click(function () {
                $("#result").val($("#text21").val())
            })
            $("#button11").click(function () {
                $("#result").val($("#text22").text())
            })
            $("#button12").click(function () {
                $("#result").val($("#sel1").val())
            })

        })
