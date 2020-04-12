/* 
Removing Array Elements
============================
Array elements can be removed using delete operator. This 
operator sets the array element it is invoked on to undefined but 
does not change the array‟s length. 

Syantx :- delete Array_name[index]; 
Ex:- delete geek[0]; 


*/
var elements= ["vikas","ravi"];
delete elements[0];
console.log(elements); //[ <1 empty item>, 'ravi' ] ..
    //here if we try to access element at index 1 then we will get undefined value.
console.log(elements.length); //2...note the length remains unchanged.