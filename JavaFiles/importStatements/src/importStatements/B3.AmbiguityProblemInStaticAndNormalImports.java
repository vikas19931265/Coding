
/*

1.  Two packages  a class or interface with the same name is very rare and hence ambiguity
    problem is also very rare in the normal import.

    Example class Date, this class is present in both util package as well as sql package. Same with 
            List class which is present in awt package as well as util package. This can lead to ambiguity
            when we try to import both. But since amongst so many classes these 2 are only classes hence
            such scenario or we can say ambiguity occurs very rarely.


2. But 2  classes or interfaces containing a variable or a method with the same name is very common.
   And hence ambiguity problem is also very common problem in static import.


    Example MAX_VALUE variable is present in all Number classes that is byte , short, int, long, float , double.
    Hence the chances of ambiguity to occur when more than one class contain a static member is very high.




*/

//-------------------------------------------------------------------------------------------******************---------------------------------------------