var colors = ['red', 'green', 'blue', 'black', 'purple', 'orange', 'silver', 'black', 'maroon'];
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
    {
    document.getElementById(i+1).innerHTML = colors[i];
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
        {score+=1;
         document.getElementById("sc").innerHTML = score;
         randomize();
        }
}