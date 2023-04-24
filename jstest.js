'use strict';
const gr = function(message) {document.querySelector('.reply').textContent=message};
const gues=document.querySelector('.guess');


document.querySelector('.th1').addEventListener('click',function() {

    document.querySelector('.s2').textContent=20;
    document.querySelector('body').style.backgroundColor="black";
    document.querySelector('.q').style.width="10rem";
    document.querySelector('.q').textContent="?";
    gr("🤔Start guessing.......");
    score=20;
    gues.value='';
    
    a=Math.trunc(Math.random()*20)+1;
    
    


})


var a=Math.trunc(Math.random()*20)+1;
var score=20;
var hscore=0;

document.querySelector('.up').addEventListener('click', function(){

    let r=Number(gues.value);
    r++;
    
    (gues.value)=r;
})

document.querySelector('.down').addEventListener('click', function(){

    let r=Number(gues.value);
    r--;
    
    (gues.value)=r;
})



document.querySelector('.s2').textContent=score;

document.querySelector('.check').addEventListener('click',function() { const g=Number(gues.value)

if(!g)
{
    gr("🛑No Number Entered");
}



else if(g===a)
{
    gr("🤜You guessed it!");
    document.querySelector('.q').textContent=a;
    document.querySelector('body').style.backgroundColor='rgb(0, 168, 36)';
    document.querySelector('.q').style.width="15rem";
    if(score>hscore)
    {
        hscore=score;
    document.querySelector(".hs2").textContent=hscore;

    }
}
else if(g!=a)
{
    gr( g>a ?"🔆Too High.........." : "↘️Too Low .....");
    score--;
    document.querySelector('.s2').textContent=score;

    if(score<1)
    
    {

       gr("🍘 You lost the game");
    document.querySelector('body').style.backgroundColor='red';
    document.querySelector('.q').textcontent=a;

    }
    
}



})