package Generics;

/*
Generics [ collections are not type safe]
================================================================================

1. The main objective is Generic is to provide type safety and to resolve type- casting problems.

            FULL GENERICS IS BASED ON TYPE SAFETY AND TYPE CASTING.


Case 1:
        
        TYPE SAFETY.

Array are type safe that is we can give the guarantee for the type of elements present inside the array.
For example if our programming requirement is to hold only String type of objects then we can choose string
array. By mistake if we are trying to add any other type of objects then immediately we will get compile time
error.


Hence string array can contain only String type of objects . Due to this we can give the guarantee for 
the type of elements present inside the array hence arrays are safe to use with respect to type that is
arrays are type safe.

example
        String[] s = new String[5];

s[0]= "durga"; valid
s[1]= "Ravi";valid
s[2]= new Integer(10); invalid
    
CE: incompatible type , found java.lang.Integer, required java.lang.String

s[2]="Shiva"; valid



Same requirement in case of Collections
---------------------------------------------------

ArrayList l = new ArrayList();

l.add("Durga");

l.add("Ravi");

l.add(new Integer(10));


String name1=(String)l.get(0);

String name2=(String)l.get(1);

String name3=(String)l.get(2); // If we try to do this then at RunTime we will get Runtime error : ClassCastException


Here Collections are not type safe that is we cannot give the guarantee type of elements which
are present inside the Collection.

For example, if our programming requirement is to hold only String type of objects and if we 
choose array list, by mistake if we are trying to add any other type of object  then we wont get
any compile time error, but the program may fail at run time.



Hence we cannot give the guarantee for the type of elements present inside the Collection. Due to this Collections
are not safe to use with respect to type that is Collections are not Type Safe.


*/

//------------------------------------------------------------**********************************-------------------------------------------------