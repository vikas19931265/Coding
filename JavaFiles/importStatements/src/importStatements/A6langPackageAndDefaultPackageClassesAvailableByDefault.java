/*

1. All classes and interfaces present in the following packages are by default available to every java program. 
   Hence we are not required to write import statement.

        a) java.lang package

        b) default package( Current working directory( package))


2. Example if we are working in a package and contain a class Student then we can use this class in another 
   class in the same working directory without writing any kind of the import statement.

3. However if we have to do this with a class outside of the package , then in that case we have to write an 
   import statement.


NewCase

1. import statement is completely compile time related concept. If more number of imports then more will be the compile time
   but there is no effect on execution time.( Run time).


    example if we have import java.io.* and import java.io.ClassName then 
    class containing import java.io.* will take more time to compile then the other class
    but when we talk about the execution time then both of them will take the same time.
   

NewCase

    Difference between C language #include and java language import statement.

In the case of C language #include all input and output header files will be loaded at the beginning only ( at translation time)
Hence it is static include.

But in the case java import statement no .class file will be loaded at the beginning only. Whenever we are using a particular class
then only corresponding .class file will be loaded. This is like dynamic include or load on demand or load on fly.


*/

//-------------------------------------------------------------------------------------------******************---------------------------------------------