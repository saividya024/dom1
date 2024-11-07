var k=document.getElementById("p");

 function b(){
    k.textContent="I am p but clicked by button"
    k.style.backgroundColor="red"
    k.style.display="inline"
    k.style.fontSize="60px"
    k.style.borderRadius="50%"
    
    k.innerHTML=`I am p but clicked by button`
    console.log(b)}
//
var l=document.getElementById("q");
function c(){
   l.textContent=""
   l.innerHTML=`<img style="border-Radius:30px " src="https://th.bing.com/th?id=OIP.I4X_ilJ5O8dMg1yrVXovmQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width="200px" /> 
   <img style="border-Radius:100px " src="https://th.bing.com/th?id=OIP.I4X_ilJ5O8dMg1yrVXovmQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width="200px" />
   <img style="border-Radius:50% "src="https://th.bing.com/th?id=OIP.I4X_ilJ5O8dMg1yrVXovmQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" width="200px"/>`
console.log(c)

 }
