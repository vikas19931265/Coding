/* 

Declaration and initialization of Object By creating instance of Object.
==========================================================================

Syntax
==========

Syntax: - var object_name = new Object ( );

*/

var obj= new Object();
obj.name="vikas";
obj.rollNo=1234;
obj.total=(marks)=>
{
return marks+obj.rollNo;
}

console.log(obj.total(100)); //1334