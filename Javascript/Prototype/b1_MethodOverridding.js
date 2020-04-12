/* 
Method overriding
=====================

*/

function Mobile()
{

}
       Mobile.prototype.show=function() { return "Mobile show";}  

function Samsung()
{

}

Samsung.prototype=Object.create(Mobile.prototype);  

Samsung.prototype.show= function() { return " Samsung show";} // Overriding the show function.

var samsung= new Samsung();
console.log(samsung.show()); // Samsung show.
