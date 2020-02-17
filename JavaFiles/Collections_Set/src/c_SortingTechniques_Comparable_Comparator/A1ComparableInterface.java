/* Comparable interface.
==================================================================================

1. This is present in java.lang package and it contains only one method that is 
   compareTo() method.


     Syntax

                        public int compareTo(Object obj);



    obj1.compareTo(obj2)

    |
    |---> return -1 if obj1 has to come before obj2
    |
    |
    |----> return +ve if obj1 has to come after obj2
    |
    |
    |
    |-----> returns 0 if obj1 and obj2 are equal.







*/


package c_SortingTechniques_Comparable_Comparator;


class Sample 

{
    

 public static void main(String[] args){
     
     
    System.out.println("A".compareTo("Z")); //(-ve) we get negative as A Ascii value is less then Z, hence Z should
                                            // come before to get positive number.
                                            //Negative meaning A should come before Z
  
    System.out.println("Z".compareTo("K")); //(+ve) Z ascii value is more then k , hence we get positive
                                            //Positive meaning Z should come after K
                                
    
    System.out.println("A".compareTo("A")); //(0) A and A ascii value is same hence we get 0
    
    System.out.println("A".compareTo(null));// We cant compare an object with null
                                            // Error: Null pointer Exception.
    
    
     
  }
 
 
 
 }
/*
run:
-25
15
0
Exception in thread "main" java.lang.NullPointerException
	at java.lang.String.compareTo(String.java:1139)
	at session8.Sample.main(NewClass3.java:42)
Java Result: 1
BUILD SUCCESSFUL (total time: 0 seconds)


*/

//-------------------------------------------------------------*************************************-----------------------------------------------------