
var name= prompt("what is your name ?")
alert("Welcome "+ name + " :)")
/*var answer= prompt("are you Anime Fan . . Please answer y or n " )

if (answer=="y"){alert("Great , lets go then ")}
else{alert("Look at my eye and be honest ..what r u doing here ?  ")} 
*/
function sub(o,epo){
var c= o-epo ;
return c

}
sub() ;
var ans= prompt("How much do you rate your love for watching anime? rate from 0 to 10 " )

while(ans>10 || ans<=0 )
{ans=prompt("Noooo !! You cannot access the site with score like this ! try again ")}
alert("Good U Should be Super Fan =) ")
var x="hunter"
var y="one piece"
var z="naruto"
var favanime= prompt("what is your favourite anime naruto , hunter , one piece ")
while(favanime!=x &&favanime!=y &&favanime!=z)
{var favanime= prompt("what is your favourite anime naruto , hunter , one piece ")}
if(favanime=="hunter"){
var epo=parseInt(prompt("How many episodes of hunter have you watched?? "))
var result=sub(148,epo)
document.write("<h2>"+"** The number of remaining hunter episodes to watch are  "+result+" episodes"+"</h2>")

}
else if (favanime=="naruto"){
var epo=parseInt(prompt("How many episodes of Naruto have you watched?? "))
var result=sub(500,epo)
document.write("<h2>"+"** The number of remaining Naruto episodes to watch are  "+result+" episodes"+"</h2>")}
else if (favanime=="one piece"){
var epo=parseInt(prompt("How many episodes of one piece have you watched?? "))
var result=sub(981,epo)
document.write("<h2>"+"** The number of remaining one piece episodes to watch are  "+result+" episodes "+"</h2>")}
alert("very good")
document.write("<p>"+"<h3>"+"Your Rate By Stars"+"</h3>"+"</p>")
for(i=0 ;i<ans ; i++){
document.write("<span>"+"<img src='https://www.pngrepo.com/png/208106/512/star-rate.png' alt='star' hight='50px' width='50px'>"+"</span>" )}



/*for(i=0 ; i<=ans ; i++)
  {var dd=prompt("whyyy")}
*/
/*if (answer=="y"){alert("Great , lets go then ")}
else{alert("Look at my eye and be honest ..what r u doing here ?  ")} 
var favanime= prompt("what is your favourite anime naruto , hunter , one piece , or else ")
if (favanime =="hunter"){alert("You r a good boy")+ document.write(" Hunter family thanks u")}
else if (favanime=="naruto"){alert("good choice")+ document.write(" Naruto family thanks u")}
else if (favanime=="one piece"){alert("good choice")+ document.write(" one piece family thanks u")}
else(alert("U Should Rethink"))
*/

/*for ( i = 1 to 5 ) {
  console.log(i);
}*/
/*
 var  field = prompt("What's your field?")

if( field == "Chemistry" ){

 var numphoto = prompt(" How much do you love chemistry? (from 5 ) ")

  for(var i = 0 ; i < numphoto ; i++) {
document.write("<div>" + "<h3>" + field +"</h3>" + "<img src='https://th.bing.com/th/id/Rf7de903159f4b39afe5016e0be0b1e63?rik=48EGZyDU2LELig&pid=ImgRaw'>" + "</div>")
}}

else if (field == "pharmacy"){
   var year = prompt("In which year ?")
  var numphoto = prompt(" How much do you love pharmacy (from 5)? ")

for(var i = 0 ; i < numphoto ; i++) {
document.write("<div>" + "<h3>" + field +"</h3>" + "<img src='https://i1.wp.com/flashacademy.com.ng/wp-content/uploads/2020/04/Universities-pharmacy-1.jpg?fit=688%2C445&ssl=1" + "</div>")
}}
else{while(field!="pharmacy" && "Chemistry")
{var field = prompt("What's your field?")}}
*/

//console.log(numphoto)
/*
var hey=prompt("كيف حالك")
if(hey=="الحمدلله"){
alert("يا رب لك الحمد")
var no=prompt("اذكر الله ..مرة")
for(var i=0 ; i<no ; i++){
document.write(" "+ hey)
}
}
*/
/*
else{var i=0
while(hey!="الحمدلله")
  { var hey=prompt("كيف حالك");
  i++
   }}
/*
for (var i=1 ; i<10 ; i++)
{console.log(i+=1)}
*/
/*
var hey=prompt("كيف حالك")
while(

if(hey=="الحمدلله"){
alert("يا رب لك الحمد")
var no=prompt("اذكر الله ..مرة")
for(var i=0 ; i<no ; i++){
document.write(" "+ hey)
}

)
*/