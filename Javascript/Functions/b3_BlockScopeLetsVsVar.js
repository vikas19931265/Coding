/* 
Block Scope
=========================

Variables declared with var do not have block scope.

If(true){
  var i = 10;   // accessible from outside block
  document.write(i);
}
document.write(i);  // possible to access i from outside block

Identifiers declared with let and const do have block scope.

If(true){
  let i = 10;   // not accessible from outside block
  document.write(i);
}
document.write(i);  // not possible to access i from outside block

*/

if(true)
{
  var i=10; // this is not a LOCAL VAR..to make a local var in block (not function ) use let keyword
  console.log(i);
}
console.log("accessing from outside block " + i) ; // 10 is accessed.

// using let variable in block will solve the problem. 
if(true)
{
  let j=10;
  console.log(j);
}
console.log("accessing from outside block" + j); //j is not defined

