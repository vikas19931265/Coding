/* 
The for...in loop is used to loop through an object's properties.

Syntax: - 
for (var variable_name in object_name){
   block of statement
}
Ex: - 
for (var specs in samsung) {
	document.write(specs);
}

*/

var mobile=
{
    brand: "galaxy",
    model: "samsung"
}

for(let specs in mobile)
{
    console.log(specs); // brand , model ....Iterating through the keys
    console.log(mobile[specs]) // galaxy ,samsung ...Getting values of the keys.
}