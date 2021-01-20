/*

1. Usage of static import , reduces readability of the code and creates confusion. And hence if there is no
  Specific requirement then it is not recommended to use static import.

Example

        If our class contains 50k lines of codes and somewhere in between we write sqrt() method.
        Now if this sqrt method is available in our class, as well as our implict and explicit
        static import statements then it will create the confusion as to which class this method
        belongs to.


        Hence its always better to go with the conventional approach that is use the method name with classname.
        That is Classname.methodname is always the recommended approach to be used.
        



*/
//-------------------------------------------------------------------------------------------******************---------------------------------------------