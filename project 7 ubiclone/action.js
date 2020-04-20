let updtxt=document.querySelector(".entering");
updtxt.innerHTML="";
let parent=document.getElementsByTagName("footer");
let datetxt=document.querySelector(".thedate");
let i_1=document.querySelectorAll(".btn")[0];
let i_2=document.querySelectorAll(".btn")[1];
let a;
var count=0;
refresher=()=>{
    console.log("rec");
     a=setTimeout('timered()',1001);
     console.log("par");
}

function timered()
{   
    let s;
    let d=new Date();
    s=`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    datetxt.innerHTML=s;
    console.log(datetxt.innerHTML);
    refresher();
}
timered();
adder=()=>{
    count++;
    updtxt.innerHTML=count;

}
substractor=()=>{
    count--;
    if(count<0)
    {
        count=0;
        alert("cart emptied");
    }
    updtxt.innerHTML=count;
}
i_1.addEventListener("click",adder);
i_2.addEventListener("click",substractor);
