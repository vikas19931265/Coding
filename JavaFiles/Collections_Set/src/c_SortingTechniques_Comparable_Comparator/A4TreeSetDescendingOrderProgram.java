
//Write a program to insert Integer objects into the TreeSet where the sorting order
//descending order. [ customized sorting]


package c_SortingTechniques_Comparable_Comparator;

import java.util.Comparator;

import java.util.TreeSet;


class TreeSetDemo3 {
    
    public static void main(String[] args)
    {
        TreeSet t = new TreeSet( new MyComparatorss()); // this will make the MyComparator "compare" method to call
                                                      // else by default compareTo method will be called.      
       
        /*
    If we are not passing MyComparator object then internally JVM will call default compareTo method which is meant    
    for default natural sorting order. In this case the ouput would have been    
        
        0,5,10,15,20
        
    
    If we are passing comparator object then  JVM will call compare() method  which is meant for    
    for customized sorting. In this case the output is
        
        [20, 15, 10, 5, 0]
        
        
        */
        
        t.add(10);
        t.add(0);
        t.add(15);
        t.add(5);
        t.add(20);
        t.add(20);
      
        
        
        System.out.println(t);
    }


}

class MyComparatorss implements Comparator
{
    public int compare( Object obj1, Object obj2) // obj2 is already present object
    {
        Integer I1= (Integer)obj1;
        
        Integer I2=( Integer)obj2;
        
      //  System.out.println(I1);
        
        if(I1< I2)
        {
            return +1;
        }
    
        else if(I1>I2)
        {
            return -1;
        }
    
    
        else 
        {
            return 0;
        }
    
    }
}


/*
run:
[20, 15, 10, 5, 0]
BUILD SUCCESSFUL (total time: 0 seconds)

*/


/*

Explanation.

1.   TreeSet t = new TreeSet( new MyComparator());

    We have passed newMycomparator() as argument hence Mycomparator class compare method will be called.

  
2.    t.add(10);

     We inserted 10 first since this is the first element hence it will get settled in the 
     root.

                        10


3.   t.add(0);

      Now we are inserting 0, hence method compare( Object obj1, Object obj2)
      will be called.
      
      t.compare(0,10);

      Since 0<10 , hence we will return +1 , meaning it will be stored on the right side.

                    
                10
                  \
                   \
                    \ 
                     0   

4.  t.add(15);

      Now we are inserting 15, hence method compare( Object obj1, Object obj2)
      will be called.
      
      t.compare(15,10);

      Since 15>10 , hence we will return -1 , meaning it will be stored on the left side.

                    
                10
               /  \
              /    \
             /      \ 
           15        0     


5.  t.add(5)

    Now we are inserting 5, hence method compare( Object obj1, Object obj2)
      will be called.
      
      t.compare(5,10); 

      Since 5<10 , hence we will return +1 , meaning it will be stored on the right side.

                    
                10
               /  \
              /    \
             /      \ 
           15        0     


      But '0' is already present in the right side , hence again compare(Object obj1, Object obj2)
      method will be called.


     t.compare(5,0) 

     Since 5>0 hence its value will be stored on the left side.


                10
               /  \
              /    \
             /      \ 
           15        0     
                    /   
                   /
                  5 




6.  t.add(20);

                  

    Now we are inserting 20, hence method compare( Object obj1, Object obj2)
      will be called.
      
      t.compare(20,10); 

      Since 20>10 , hence we will return -1 , meaning it will be stored on the left side.

                    
                10
               /  \
              /    \
             /      \ 
           15        0     


      But '15' is already present in the right side , hence again compare(Object obj1, Object obj2)
      method will be called.


     t.compare(20,15) 

     Since 20>15 hence its value will be stored on the left side.


                10
               /  \
              /    \
             /      \ 
           15        0     
           /         /   
          /         /
         20         5 


         in order traversal( move from left, then root , then right elements from down).

         
7. t.add(20)  // duplicates are not allowed.




*/

/*
run:
[20, 15, 10, 5, 0]
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//----------------------------------------------------------------********************************------------------------------