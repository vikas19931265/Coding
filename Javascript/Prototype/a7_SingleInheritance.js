function Person()
{

}

Person.prototype.setName= function(_name){ this.name=_name}; 
/* 
    This prototype can be used by any of the childs and only one copy will exist.
*/
function Student(_rollNo)
{
    this.rollNo=_rollNo;
}

Student.prototype=Object.create(Person.prototype);
var newStudent= new Student(12);
newStudent.setName("vikas");
console.log(newStudent.name); // vikas 
console.log(newStudent.rollNo); //12