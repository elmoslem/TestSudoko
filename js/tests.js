
$(document).ready(function(){
    
    
    
    
            var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
    
    
    var data=[
        ['','3','',''],
        ['1','','4',''],
        ['','1','',''],
        ['3','','','2']
    ]
    var logDiv = $( "#log" );
    var msgs;
    for ( var i = 0; i < 5; i++ ) {
        $( ".t" ).eq( i ).on( "click", { value: i }, function( event ) {
            
     msgs = [$( this ).index()];
                    
        });
    }
    
    
    var table = document.getElementById('myTable');
    var rowLength = table.rows.length;
    
    function checktabls()
    {
        for ( var i = 0; i < rowLength.length; i++ ) {
            var row = table.rows[i];
            $('#'+id).css('color','green').addClass("red")
                
        }
        
    }

   function check_row(row,col,x,id){
       data[row][col]=x;
        for ( var i = 0; i < 4; i++ ) {
            if(i==col){
                
            }else{
                if(data[row][i]==x){
                    $('#'+id).css('color','#f00').addClass("myclas")
                    $('#'+row+i).css('color','#f00').addClass("myclas")
                }
            }

        }
   }
       function check_col(row,col,x,id){
       data[row][col]=x;
        for ( var i = 0; i < 4; i++ ) {
            if(i==row){
                
            }else{
                if(data[i][col]==x){
                    $('#'+id).css('color','#f00').addClass("myclas")
                    $('#'+i+col).css('color','#f00').addClass("myclas")

                }
            }

        }
   }
//    $(".myspan").on('click','.t',function(){
//    
//         if(clicked){
//                $(this).css('background-color', 'red');
//                clicked  = false;
//            } else {
//                $(this).css('background-color', 'yellow');
//                clicked  = true;
//            }   
//    })
//   
//   
//    

    var header = document.getElementById("myTable").getElementsByTagName("td");
    $('.t').click(function(){
        
    $('.t.red').removeClass('red')
    $('td.red').removeClass('red')
        $(this).addClass('red');
        

        for (var j = 0; j < header.length; j++) {
        if (header[j].innerHTML == msgs) 
            
            
            $(header[j]).addClass("red");
        }
    });
    
    $("#myTable").on('click','.btnSelect',function(){

             
        var myvalue = $("#my_tag").data("row");
        
        var s = $("#my_tag").attr("data-row");        
       
       
        
        var row = $(this).attr("data-row");
        var col = $(this).attr("data-columns");
        var id = $(this).attr("id");
        
        var a = $('#my_tag').data('data-row');
        var b = $('#my_tag').data('data-columns');

       
   
            $(this).change('td').text(msgs);
        
        
            
        
            check_row(row,col,msgs,id);    
            check_col(row,col,msgs,id);

});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

//    $(".t").click(function(){
//        (this).css('background-color','red')
//    })

//        if(2==data[0][1]){
//            alert('yes');
//        }
//       alert(data[0][1]);
//       alert("myroes =" + row + " myCol =" + col)
        
        
        
        
//        var text = $(this).text();
//        $("td").html(msgs);
//
//        alert(text);
        });
    
    
    
   
    // code to read selected table row cell data (values).
	/*$(".btnSelect").on('click',function(){
		 var currentRow=$(this).closest("tr");
		 var col1=currentRow.find("td:eq(0)").html();
		 var col2=currentRow.find("td:eq(1)").html();
		 var col3=currentRow.find("td:eq(2)").html();
		 var data=col2;
		 alert(data);
	});*/
        
//        $('div[data-row="msgs"][data-columns="msgs"]')
         // get the current row
        /* var currentRow=$(thi s).closest("tr"); 
         
         var col1=currentRow.find(".btnSelect").html(); // get current row 1st table cell TD value
         var col2=currentRow.find(".btnSelect").html(); // get current row 2nd table cell TD value
       
         var data=col1
         
         alert(data);*/
        
        
         /*$('#myTable tr td').each(function() {
        var text = $(this).text();
        alert(text);
    });*/
 //                    alert('not');//////css
//                    $(this).css('color,'#F00');



   /*  $("#a").bind('click',function(Event){   
         checktabls()
         $("#b").css("background-color","")
         $("#c").css("background-color","")
         $("#d").css("background-color","")
        $("#a").css("background-color","yellow")
     })
       $("#b").bind('click',function(Event){
        checktabls()
         $("#b").css("background-color","yellow")
         $("#c").css("background-color","")
         $("#d").css("background-color","")
        $("#a").css("background-color","")
     })
       $("#c").bind('click',function(Event){
        checktabls()
         $("#b").css("background-color","")
         $("#c").css("background-color","yellow")
         $("#d").css("background-color","")
        $("#a").css("background-color","")
     })
       $("#d").bind('click',function(Event){ 
           checktabls()
         $("#c").css("background-color","")
         $("#b").css("background-color","")
        $("#a").css("background-color","")
        $("#d").css("background-color","yellow")
     })*/
    



