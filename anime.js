var name= prompt("what is your name ?")
alert("Welcome "+ name + " :)")

/*var answer= prompt("are you Anime Fan . . Please answer y or n " )

if (answer=="y"){alert("Great , lets go then ")}
else{alert("Look at my eye and be honest ..what r u doing here ?  ")} */

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
alert("very good")
document.write("<h4>"+"Your Rate By Stars"+"</h4>")
for(i=0 ;i<ans ; i++){
document.write("<div>"+"<img src='https://www.pngrepo.com/png/208106/512/star-rate.png' alt='star' hight='50px' width='50px'>"+"</div>" )}
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