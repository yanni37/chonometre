"use strict";

var startstop = document.querySelector('#startstop');
var reset = document.querySelector("#reset")
var chronmetre = document.querySelector("#chronometre");
var idTimeout;
var ms =0;
var s = 0;
var min = 0;
var h = 0;
var dateStart, dateFin, diff;


function incrimenter()
{
    dateFin = new Date();
    diff = dateFin - dateStart;
    diff = new Date(diff)

    h = diff.getHours() -1;
    min = diff.getMinutes();
    s = diff.getSeconds();
    ms = diff.getMilliseconds();

    if(s <10)
    {
        s= "0"+s
    }
    if(min <10)
    {
        min = "0"+min
    }
    if(ms <10)
    {
        ms = "00"+ms
    }else if(ms < 100)
    {
        ms = "0"+ms
    }

    chronmetre.textContent = h+":"+min+":"+s+":"+ms

    idTimeout = setTimeout("incrimenter()", 10)
}


startstop.addEventListener("click", function(){
    
    if(startstop.classList.contains("start") )
   {
    startstop.textContent = "Stop!"
    startstop.classList.replace("start", "stop")
       dateStart = new Date()
        incrimenter();
    
   }else if (startstop.classList.contains("continue"))
   {
    startstop.textContent = "Stop!"
    startstop.classList.replace("continue", "stop")
    incrimenter();
   }
   else if(startstop.classList.contains("stop"))
   {
    startstop.textContent = "Continue"
    startstop.classList.replace("stop", "continue")
    clearTimeout(idTimeout);
   }
})



reset.addEventListener("click", function(){
    if(startstop.classList.contains("start") || startstop.classList.contains("continue"))
   {
    h=min=ms=s = 0;
    chronmetre.textContent = "0:00:00:000";
   }
})