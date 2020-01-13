"use strict";

var startstop = document.querySelector('#startstop');
var reset = document.querySelector("#reset")
var chronmetre = document.querySelector("#chronometre");
var idInterval;
var ms =0;
var s = 0;
var min = 0;
var h = 0;

function incrimenter()
{
    ms+=10
    if(ms == 1000)
    {
        ms = 0;
        s++
        if(s == 60)
        {
            s= 0;
            min++
            if(min == 60)
            {
                min = 0;
                h++;
            }
        }
    }
    
    chronmetre.textContent = h+":"+min+":"+s+":"+ms
}




startstop.addEventListener("click", function(){
   if(startstop.classList.contains("start") || startstop.classList.contains("continue"))
   {
    idInterval = setInterval("incrimenter()", 10)
    startstop.textContent = "Stop!";
    startstop.classList.replace("start", "stop")
    startstop.classList.replace("continue", "stop")
   }else if(startstop.classList.contains("stop"))
   {
       clearInterval(idInterval);
       startstop.textContent = "Continue"
       startstop.classList.replace("stop", "continue")
   }
    
})

reset.addEventListener("click", function(){
    if(startstop.classList.contains("start") || startstop.classList.contains("continue"))
   {
    h=min=ms=s = 0;
    chronmetre.textContent = "0:00:00:000";
   }
})