var colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'silver', 'black', 'maroon'];
var rnd,i,temp,colgen;
var score=0;
//gen no bw 0-8
function gen(){
   var c = Math.floor(Math.random()*10);
   if(c == 9) {
    c=0;
  }
    return c;
}

function randomize()
{
//randomise array
for(i = 0; i < 9; i++)
{
rnd=gen();
temp=colors[rnd];
colors[rnd]=colors[i];
colors[i]=temp;
}
//print array
i=0;
while(i<9)
    {var aa = i+1;
     aa="b"+aa;
    document.getElementById(aa).innerHTML = colors[i]; // aa is a varable
        i++;
    }

//print color
colgen=gen();
document.getElementById("colgen").innerHTML =  colors[colgen];
}

function check(col)
{ 
    col--;
    if(colors[col]==colors[colgen])
        {score+=5;
         document.getElementById("sc").innerHTML = score;
         randomize();
        }
    else
    {   score-=3;
        document.getElementById("sc").innerHTML = score;
        randomize();
    }
}

function countdown()
{ 
    var timeleft = 20;
    var timecurr = setInterval(function a(){
                    timeleft--;
                    document.getElementById("sec").innerHTML = timeleft;
                    if(timeleft<=0)
                    {clearInterval(timecurr);
                     document.querySelector("#b1").disabled = true;
                     document.querySelector("#b2").disabled = true;
                     document.querySelector("#b3").disabled = true;
                     document.querySelector("#b4").disabled = true;
                     document.querySelector("#b5").disabled = true;
                     document.querySelector("#b6").disabled = true;
                     document.querySelector("#b7").disabled = true;
                     document.querySelector("#b8").disabled = true;
                     document.querySelector("#b9").disabled = true;
                     alert("GAME OVER! Your Score is : "+ score);
                     document.querySelector(".startbut").disabled = false;
                     document.getElementById("colgen").innerHTML =  "-Color-";
                          i=0;
                          while(i<9)
                         {var aa = i+1;
                         aa="b"+aa;
                         document.getElementById(aa).innerHTML = "-colors-"; // aa is a varable
                          i++;
                         }

                     
                    }
                    },1000);
    
}
function enable()
{ score=0;
  document.getElementById("sc").innerHTML = score;
  document.querySelector("#b1").disabled = false;
  document.querySelector("#b2").disabled = false;
  document.querySelector("#b3").disabled = false;
  document.querySelector("#b4").disabled = false;
  document.querySelector("#b5").disabled = false;
  document.querySelector("#b6").disabled = false;
  document.querySelector("#b7").disabled = false;
  document.querySelector("#b8").disabled = false;
  document.querySelector("#b9").disabled = false;
 document.querySelector(".startbut").disabled = true;
}