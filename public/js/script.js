$('.newinvoiceform').click(function(){
    $('.formpage').slideDown("slow");
    $('.formpage').css("display","block");

})
$('#discardbutton').click(function(){
    $('.formpage').slideUp("slow");
    $('.formpage').css("display","none")
    emptyinput();

})
$('#editdiscardbutton').click(function(){
    $('.formpage').slideUp("slow");
    $('.formpage').css("display","none")

})
// myOnClickFunction('All')
$(document).ready(function() {
    var mySelect = $('select');
    mySelect.on('change', function() {

      var selectedOption = $(this).val();
    //   console.log(selectedOption)
      myOnClickFunction(selectedOption);
    });
  });
  function myOnClickFunction(selectoption){
    let selectdetails=document.querySelector('#invoicesecondhalf');
    var elementdiv=document.querySelectorAll('.elementwholediv');
    // console.log(elementdiv[0].childNodes[1].childNodes[9].childNodes[1].textContent)
    for(let i=0; i<elementdiv.length; i++){
      var textcontent=elementdiv[i].childNodes[1].childNodes[9].childNodes[1].textContent;
     if(selectoption.trim()==textcontent.trim()){
        elementdiv[i].style.display="flex";
        console.log("mani")

     }
     else{
     
        elementdiv[i].style.display="none";
     }
     if(selectoption.trim()=='All'){
        elementdiv[i].style.display="flex";

     }
    }


  }
  function theme(){
    if($('.themeimg').attr('src')=='./assets/icon-moon.svg'){
       $('.themeimg').attr('src','./assets/icon-sun.svg');
       $('#whole-container').css("background","#141625")
       $('.elementdiv').css("background","#1E2139")
       $('.elementdiv').css("box-shadow","rgb(0 0 1 / 20%) 0px 7px 29px 0px")
       $('#invoicenamediv').css("color","white");
       $('#statusselecttag').css("background","#141625")
       $('#filterDiv').css("color","white");
       $('select').css("background","#141625")
       $('select').css("color","white")
       $('.idtext').css("color","white");
       $('.totaltext').css("color","white");
       $('.draftstyle').css("background","rgba(55,59,83,0.3)");
       $('.formfirsthalf').css("background-color","#141625");
       $('input').css("background-color","#373b53");
       $('input').css("color","white");
       $('input').css("border","none")
       $('.newinvoicetextform').css("color","white");
       $('#paymentselects').css("background-color","#373b53");
       $('#paymentselects').css("color","white");
       $('.forminput').css("width","95%");
       $('input').css("border","0.2px solid white")


    }
    else if($('.themeimg').attr('src')=='./assets/icon-sun.svg'){
       $('.themeimg').attr('src','./assets/icon-moon.svg');
       $('#whole-container').css("background","#f8f8fb")
       $('.elementdiv').css("background","white")
       $('.elementdiv').css("box-shadow","rgb(100 100 111 / 20%) 0px 7px 29px 0px")
       $('#invoicenamediv').css("color","black");
       $('#statusselecttag').css("background","#f8f8fb");
       $('#filterDiv').css("color","black");
       $('select').css("background","#f8f8fb");
       $('select').css("color","white");
       $('.idtext').css("color","black");
       $('.totaltext').css("color","black");
       $('.draftstyle').css("background","rgba(55,59,83,0.1)");
       $('.formfirsthalf').css("background-color","white");
       $('input').css("background-color","white");
       $('input').css("color","black");
       $('input').css("border","1px solid black")
       $('.newinvoicetextform').css("color","black");
       $('#paymentselects').css("background-color","white");
       $('#paymentselects').css("color","black");
       $('.forminput').css("width","95%")
  
  
    }
  }