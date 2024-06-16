
var numBtn=document.querySelectorAll(".numpad button");
var oprBtn=document.querySelectorAll(".operatorBtns button")
var screenTxt=document.querySelector(".screen")

var def=screenTxt.innerHTML;

for (let i=0;i<14;i++){

    if (i!=12 && i!=13){
        numBtn[i].addEventListener("click",()=>{
            if (screenTxt.innerHTML!="00"){
                screenTxt.innerHTML+=numBtn[i].innerHTML;
            }
            else{
                screenTxt.innerHTML=numBtn[i].innerHTML;
            }
        })
    }    
    
    else if (i==12){
        numBtn[i].addEventListener("click",()=>{
            screenTxt.innerHTML=def;
        })            
    }

    else if (i==13){
        numBtn[i].addEventListener("click",()=>{
            screenTxt.innerHTML=eval(screenTxt.innerHTML);
        })
    }   
}

for(let j=0;j<5;j++){
    oprBtn[j].addEventListener("click",()=>{
        var mark=oprBtn[j].innerHTML;
        screenTxt.innerHTML+=mark;        
    })
}