/* 
Factory Function
====================================

When a function returns an object, we call it a factory function. It can produce
object instance without new keyword or classes.

*/

 function student(studentname, studentrollNo)
 {
      return{
           name: studentname,
           rollNo:studentrollNo
      }

 }

 var firstStudent= student("vikas",1234);
 console.log(firstStudent.name); // vikas 
 console.log(firstStudent.rollNo); // 1234

 var secondStudent= student("ravi",123);
 console.log(secondStudent.name); // ravi 
 console.log(secondStudent.rollNo); // 123