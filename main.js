// -----------------------------------------------------nav--------------------------------------------------------------------------------
let temp=true;
let flag=false;
let count=0;

let nav=document.querySelector('.box1');
let games=document.querySelector('nav .box11');



document.addEventListener("scroll",function run(){
    let position = window.scrollY;
    if(position>100)
    {
       nav.classList.add('sticky');
       games.style.color= "#fff";

    }
    else
    {
        nav.classList.remove('sticky');
        games.style.color= "rgb(91, 187, 177)";

    }
});

// -----------------------------------------------DOM-------------------------------------------------------------------------------




   



let menu=document.querySelector('.menu');
let setting=document.querySelector('.setting');
let leftm=document.querySelector('.leftm');
let rightm=document.querySelector('.rightm');
let crossl=document.querySelector('.iconl i');
let crossr=document.querySelector('.iconr i');
let playerx=document.querySelector('.playerx');
let playero=document.querySelector('.playero');
let option=document.querySelector('.option');
let playerxs=document.querySelector('.playerxs');
let playeros=document.querySelector('.playeros');
let fscdouble=document.querySelector('.fscdouble');
let playerxw=document.querySelector('.playerxw');
let playerow=document.querySelector('.playerow');
let playerd=document.querySelector('.playerd');
let bar=document.querySelector('.bar');
let snumberx=document.querySelector('.snumber .snumber1 h2');
let snumbert=document.querySelector('.snumber .snumber2 h2');
let snumbero=document.querySelector('.snumber .snumber3 h2');
let theme=document.querySelector('.theme');








let scorex=snumberx.innerHTML;
let scoret=snumbert.innerHTML;
let scoreo=snumbero.innerHTML;





menu.addEventListener('click',function run(){


    leftm.classList.toggle('active');
});
setting.addEventListener('click',function run(){
    rightm.classList.toggle('sactive');
});
crossl.addEventListener('click',function run(){
    leftm.classList.toggle('active');
});
crossr.addEventListener('click',function run(){
    rightm.classList.toggle('sactive');
});
playerx.addEventListener('click',function run(){
    flag=true;
    temp=true;
    // bar.style.left = 35+"vw";
    bar.classList.remove('baradd');
    bar.style.backgroundColor="crimson";
    option.classList.add('optionrm');
    playerxs.classList.add('playerxsactive');
    
});
playero.addEventListener('click',function run(){
    flag=true;
    temp=false;
    // bar.style.left = 55+"vw";
    bar.classList.add('baradd');
    bar.style.backgroundColor="lightskyblue";
    option.classList.add('optionrm');
    playeros.classList.add('playerosactive');
   
});
playerxs.addEventListener('click',function run(){
    flag=false;
   playerxs.classList.remove('playerxsactive');
  
});
playeros.addEventListener('click',function run(){
    flag=false;
    playeros.classList.remove('playerosactive');
   
});
playerxw.addEventListener('click',function run(){

    count=0;
    playerxw.classList.remove('playerxwcome');
    option.classList.remove('optionrm');
    reset();
   
    
});
playerow.addEventListener('click',function run(){
    
    count=0;
    playerow.classList.remove('playerowcome');
    option.classList.remove('optionrm');
    reset();
   
    
});
playerd.addEventListener('click',function run(){

    count=0;
    playerd.classList.remove('playerdcome');
    option.classList.remove('optionrm');
    reset();
    
    
});



function checkwin()
{
    if(document.getElementById('block1').innerHTML!=""&&document.getElementById('block2').innerHTML!=""&&document.getElementById('block3').innerHTML!=""&&document.getElementById('block1').innerHTML==document.getElementById('block2').innerHTML&&document.getElementById('block2').innerHTML==document.getElementById('block3').innerHTML&&document.getElementById('block3').innerHTML=="X")
    {
       playerxw.classList.add('playerxwcome');
       document.getElementById('block1').style.color="gold";
       document.getElementById('block2').style.color="gold";
       document.getElementById('block3').style.color="gold";
       scorex++;

snumberx.innerHTML=scorex;
       flag=true;
     
    }
    else if(document.getElementById('block4').innerHTML!=""&&document.getElementById('block5').innerHTML!=""&&document.getElementById('block6').innerHTML!=""&&document.getElementById('block4').innerHTML==document.getElementById('block5').innerHTML&&document.getElementById('block5').innerHTML==document.getElementById('block6').innerHTML&&document.getElementById('block6').innerHTML=="X")
    {
       playerxw.classList.add('playerxwcome');
       document.getElementById('block4').style.color="gold";
       document.getElementById('block5').style.color="gold";
       document.getElementById('block6').style.color="gold";
       scorex++;

snumberx.innerHTML=scorex;
       flag=true;
    }
    else if(document.getElementById('block7').innerHTML!=""&&document.getElementById('block8').innerHTML!=""&&document.getElementById('block9').innerHTML!=""&&document.getElementById('block7').innerHTML==document.getElementById('block8').innerHTML&&document.getElementById('block8').innerHTML==document.getElementById('block9').innerHTML&&document.getElementById('block9').innerHTML=="X")
    {
       playerxw.classList.add('playerxwcome');
       document.getElementById('block7').style.color="gold";
       document.getElementById('block8').style.color="gold";
       document.getElementById('block9').style.color="gold";
       scorex++;

snumberx.innerHTML=scorex;
       flag=true;
    }
    else if(document.getElementById('block1').innerHTML!=""&&document.getElementById('block4').innerHTML!=""&&document.getElementById('block7').innerHTML!=""&&document.getElementById('block1').innerHTML==document.getElementById('block4').innerHTML&&document.getElementById('block4').innerHTML==document.getElementById('block7').innerHTML&&document.getElementById('block7').innerHTML=="X")
    {
       playerxw.classList.add('playerxwcome');
       document.getElementById('block1').style.color="gold";
       document.getElementById('block4').style.color="gold";
       document.getElementById('block7').style.color="gold";
       scorex++;

snumberx.innerHTML=scorex;
       flag=true;
    }
    else if(document.getElementById('block2').innerHTML!=""&&document.getElementById('block5').innerHTML!=""&&document.getElementById('block8').innerHTML!=""&&document.getElementById('block2').innerHTML==document.getElementById('block5').innerHTML&&document.getElementById('block5').innerHTML==document.getElementById('block8').innerHTML&&document.getElementById('block8').innerHTML=="X")
    {
       playerxw.classList.add('playerxwcome');
       document.getElementById('block2').style.color="gold";
       document.getElementById('block5').style.color="gold";
       document.getElementById('block8').style.color="gold";
       scorex++;

snumberx.innerHTML=scorex;
       flag=true;
    }
    else if(document.getElementById('block3').innerHTML!=""&&document.getElementById('block6').innerHTML!=""&&document.getElementById('block9').innerHTML!=""&&document.getElementById('block3').innerHTML==document.getElementById('block6').innerHTML&&document.getElementById('block6').innerHTML==document.getElementById('block9').innerHTML&&document.getElementById('block9').innerHTML=="X")
    {
       playerxw.classList.add('playerxwcome');
       document.getElementById('block3').style.color="gold";
       document.getElementById('block6').style.color="gold";
       document.getElementById('block9').style.color="gold";
       scorex++;

snumberx.innerHTML=scorex;
       flag=true;
    }
    else if(document.getElementById('block1').innerHTML!=""&&document.getElementById('block5').innerHTML!=""&&document.getElementById('block9').innerHTML!=""&&document.getElementById('block1').innerHTML==document.getElementById('block5').innerHTML&&document.getElementById('block5').innerHTML==document.getElementById('block9').innerHTML&&document.getElementById('block9').innerHTML=="X")
    {
       playerxw.classList.add('playerxwcome');
       document.getElementById('block1').style.color="gold";
       document.getElementById('block5').style.color="gold";
       document.getElementById('block9').style.color="gold";
       scorex++;

snumberx.innerHTML=scorex;
       flag=true;
    }
    else if(document.getElementById('block3').innerHTML!=""&&document.getElementById('block5').innerHTML!=""&&document.getElementById('block7').innerHTML!=""&&document.getElementById('block3').innerHTML==document.getElementById('block5').innerHTML&&document.getElementById('block5').innerHTML==document.getElementById('block7').innerHTML&&document.getElementById('block7').innerHTML=="X")
    {
       playerxw.classList.add('playerxwcome');
       document.getElementById('block3').style.color="gold";
       document.getElementById('block5').style.color="gold";
       document.getElementById('block7').style.color="gold";
       scorex++;

snumberx.innerHTML=scorex;
       flag=true;
    }
    
    else if(document.getElementById('block1').innerHTML!=""&&document.getElementById('block2').innerHTML!=""&&document.getElementById('block3').innerHTML!=""&&document.getElementById('block1').innerHTML==document.getElementById('block2').innerHTML&&document.getElementById('block2').innerHTML==document.getElementById('block3').innerHTML&&document.getElementById('block3').innerHTML=="O")
    {
       playerow.classList.add('playerowcome');
       document.getElementById('block1').style.color="gold";
       document.getElementById('block2').style.color="gold";
       document.getElementById('block3').style.color="gold";
       scoreo++;

       snumbero.innerHTML=scoreo;

       flag=true;
    }
    else if(document.getElementById('block4').innerHTML!=""&&document.getElementById('block5').innerHTML!=""&&document.getElementById('block6').innerHTML!=""&&document.getElementById('block4').innerHTML==document.getElementById('block5').innerHTML&&document.getElementById('block5').innerHTML==document.getElementById('block6').innerHTML&&document.getElementById('block6').innerHTML=="O")
    {
       playerow.classList.add('playerowcome');
       document.getElementById('block4').style.color="gold";
       document.getElementById('block5').style.color="gold";
       document.getElementById('block6').style.color="gold";
       scoreo++;

       snumbero.innerHTML=scoreo;
       flag=true;
    }
    else if(document.getElementById('block7').innerHTML!=""&&document.getElementById('block8').innerHTML!=""&&document.getElementById('block9').innerHTML!=""&&document.getElementById('block7').innerHTML==document.getElementById('block8').innerHTML&&document.getElementById('block8').innerHTML==document.getElementById('block9').innerHTML&&document.getElementById('block9').innerHTML=="O")
    {
       playerow.classList.add('playerowcome');
       document.getElementById('block7').style.color="gold";
       document.getElementById('block8').style.color="gold";
       document.getElementById('block9').style.color="gold";
       scoreo++;

       snumbero.innerHTML=scoreo;
       flag=true;
    }
    else if(document.getElementById('block1').innerHTML!=""&&document.getElementById('block4').innerHTML!=""&&document.getElementById('block7').innerHTML!=""&&document.getElementById('block1').innerHTML==document.getElementById('block4').innerHTML&&document.getElementById('block4').innerHTML==document.getElementById('block7').innerHTML&&document.getElementById('block7').innerHTML=="O")
    {
       playerow.classList.add('playerowcome');
       document.getElementById('block1').style.color="gold";
       document.getElementById('block4').style.color="gold";
       document.getElementById('block7').style.color="gold";
       scoreo++;

       snumbero.innerHTML=scoreo;
       flag=true;
    }
    else if(document.getElementById('block2').innerHTML!=""&&document.getElementById('block5').innerHTML!=""&&document.getElementById('block8').innerHTML!=""&&document.getElementById('block2').innerHTML==document.getElementById('block5').innerHTML&&document.getElementById('block5').innerHTML==document.getElementById('block8').innerHTML&&document.getElementById('block8').innerHTML=="O")
    {
       playerow.classList.add('playerowcome');
       document.getElementById('block2').style.color="gold";
       document.getElementById('block5').style.color="gold";
       document.getElementById('block8').style.color="gold";
       scoreo++;

       snumbero.innerHTML=scoreo;
       flag=true;
    }
    else if(document.getElementById('block3').innerHTML!=""&&document.getElementById('block6').innerHTML!=""&&document.getElementById('block9').innerHTML!=""&&document.getElementById('block3').innerHTML==document.getElementById('block6').innerHTML&&document.getElementById('block6').innerHTML==document.getElementById('block9').innerHTML&&document.getElementById('block9').innerHTML=="O")
    {
       playerow.classList.add('playerowcome');
       document.getElementById('block3').style.color="gold";
       document.getElementById('block6').style.color="gold";
       document.getElementById('block9').style.color="gold";
       scoreo++;

       snumbero.innerHTML=scoreo;
       flag=true;
    }
    else if(document.getElementById('block1').innerHTML!=""&&document.getElementById('block5').innerHTML!=""&&document.getElementById('block9').innerHTML!=""&&document.getElementById('block1').innerHTML==document.getElementById('block5').innerHTML&&document.getElementById('block5').innerHTML==document.getElementById('block9').innerHTML&&document.getElementById('block9').innerHTML=="O")
    {
       playerow.classList.add('playerowcome');
       document.getElementById('block1').style.color="gold";
       document.getElementById('block5').style.color="gold";
       document.getElementById('block9').style.color="gold";
       scoreo++;

       snumbero.innerHTML=scoreo;
       flag=true;
    }
    else if(document.getElementById('block3').innerHTML!=""&&document.getElementById('block5').innerHTML!=""&&document.getElementById('block7').innerHTML!=""&&document.getElementById('block3').innerHTML==document.getElementById('block5').innerHTML&&document.getElementById('block5').innerHTML==document.getElementById('block7').innerHTML&&document.getElementById('block7').innerHTML=="O")
    {
       playerow.classList.add('playerowcome');
       document.getElementById('block3').style.color="gold";
       document.getElementById('block5').style.color="gold";
       document.getElementById('block7').style.color="gold";
       scoreo++;

       snumbero.innerHTML=scoreo;
       flag=true;
    }
    else if(document.getElementById('block1').innerHTML!=""&&document.getElementById('block2').innerHTML!=""&&document.getElementById('block3').innerHTML!=""&&document.getElementById('block4').innerHTML!=""&&document.getElementById('block5').innerHTML!=""&&document.getElementById('block6').innerHTML!=""&&document.getElementById('block7').innerHTML!=""&&document.getElementById('block8').innerHTML!=""&&document.getElementById('block9').innerHTML!="")
    {
       playerd.classList.add('playerdcome');
       scoret++;

       snumbert.innerHTML=scoret;
       
       flag=true;
    }
    else


    {
        flag=false;
    }
    

    
}












    function fill(control){

        
   
        if(temp==true)
        {
            if(flag==false)
           {
            if(document.getElementById(control.id).innerHTML=="")
            {
             if(count%2==0)
             {
          
                 let ground=document.getElementById(control.id);
                 
                 ground.style.color="crimson";
                //  bar.style.left = 55+"vw";
                 bar.classList.add('baradd');
                 bar.style.backgroundColor="lightskyblue";
                 
                 ground.innerHTML="X";
                 
             }
             else
             {
              let ground=document.getElementById(control.id);
              ground.style.color="lightskyblue";
            //   bar.style.left = 35+"vw";
              bar.classList.remove('baradd');
              bar.style.backgroundColor="crimson";
              ground.innerHTML="O";
             }
             count++;
             checkwin();
            //  console.log(flag);
             
            }
           }
        
        }
        else
        {  if(flag==false)
            {
           if(document.getElementById(control.id).innerHTML=="")
            {
             if(count%2!=0)
             {
          
                 let ground=document.getElementById(control.id);
                 ground.style.color="crimson";
                //  bar.style.left = 55+"vw";
                 bar.classList.add('baradd');
                
                 bar.style.backgroundColor="lightskyblue";
                 ground.innerHTML="X";
             }
             else
             {
              let ground=document.getElementById(control.id);
              ground.style.color="lightskyblue";
            //   bar.style.left = 35+"vw";
              bar.classList.remove('baradd');
              bar.style.backgroundColor="crimson";
             
              ground.innerHTML="O";
             }
             count++;
             checkwin();
            }
        }
           
        }
        
        
     
     
}

function reset(){

    for(var i=1;i<=9;i++)
    {
        let reset=document.getElementById('block'+i).innerHTML="";
    }
    temp=true;
}









// -----------------------------------------------------------------double------------------------------------------------------------------


