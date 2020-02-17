package ObjectCloning;

/*Object Cloning


What is Object Cloning??
===================================

-> The process of creating exactly duplicate Objects is called as cloning.

-> We can perform cloning by using clone() method of Object class. 
Below is syntax of clone method.

   protected native Object clone() throws CloneNotSupportedException{}

-> We can perform cloning only for the Cloneable Objects. An object is said to be Cloneable if and 
  only if  the corresponding class implements Cloneable interface( marker interface).

-> Cloneable interface is present in java.lang package and it does not contain any methods as it is a marker interface.

-> If we are trying to perform cloning for the non Cloneable Objects then we will get run time exception saying

        Runtime Error: CloneNotSupportedException

There are two types of cloning.
        1.	Shallow Cloning.
        2.	Deep Cloning.

By default clone() method in Object class supports shallow cloning.


Why to use Object Cloning
=========================================

-> The main purpose the cloning is to maintain the backup copy and to preserve state of the Object.

-> The clone() method saves the extra processing task for creating the exact copy of an object using new Keyword. 
  If we perform it by using the new keyword, it will take a lot of processing to be performed that is why we use object cloning.

-> If we create the Object using new keyword then we have to assign the values from the original 
  object to the new duplicate Object which will take coding and will be complicated. 
  Instead of doing this we can create the duplicate object using the clone() method.

->If object is created using clone() method then this will take less processing task.

-> Also if object creation involves data reading from the database then object cloning
  will turn into a very expensive operation. Hence we should go for object cloning.

*/
//----------------------------------------------------------------------------------****************-------------------------------------------------------