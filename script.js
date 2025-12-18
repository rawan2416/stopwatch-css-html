document.getElementById("try-me").addEventListener("click" , function (){
    document.getElementById("date").innerHTML=Date();
} );
document.getElementById("try-me").addEventListener("dblclick" , function (){
    document.getElementById("date").innerHTML="";
} );
document.getElementById("try-me").addEventListener("mouseover" , function (){
    document.getElementById("date").innerHTML="Welcome in the stopwatch, try pressing the start button";
    document.getElementById("date").style.backgroundColor="white";
    document.getElementById("date").style.borderRadius="5px";
    document.getElementById("date").style.height="90%";
    document.getElementById("date").style.width="100%";
} );
document.getElementById("try-me").addEventListener("mouseout" , function (){
    document.getElementById("date").innerHTML="";
    document.getElementById("date").style.backgroundColor="burlywood";
} );
