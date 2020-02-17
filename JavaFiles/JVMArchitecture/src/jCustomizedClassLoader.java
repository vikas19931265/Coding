
/*

Need of the customized class loader
===============================================================================


Default class loading
============================


Default class loaders will load the .class file only once even though we are using
multiple times in our program. After loading the .class file if it  is modified outside
then default class loader will not load the updated version of class file(because .class
file is already available in the method areas.)



We can resolve this problem by defining our own customized class loader. The main 
advantange of the customized class loader is that we can control class loading mechanisms
based upon our requirement.



for example we can load the .class  file separately every time so that updated version
available to our program.




Customized class loading
=============================

This will check if student.class file is modified or not. If it is modified then 
the loader will load the modified .class file. If it is not modified then the already
existing .class file will be used.  


*/

