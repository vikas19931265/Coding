package a1_ListInterfaceBasics;



/*
List

1. List is child interface of Collection interface.

   List Interface is the subinterface of Collection.It contains methods to insert 
   and delete elements in index basis.


2. If we want to represent a group of individual Objects as a single entity where
   duplicates are allowed and insertion order must be preserved then we should go for 
   List.

        ----------------------------------
        | A  | B   | C   | D  | E  | A  |                           
        ----------------------------------
         0     1     2     3    4    5      ( insertion done based on the indexes)
 


3.  We can preserve insertion order with the helop of the indexes and we can differentiate
    duplicate objects by using index hence index will play very important role in List.


4. List interface defines the following specific methods.(8)
    
        void add(int index, Object o);

        boolean addAll(int index, Collection c);

        Object get(int index)

        
        Object set(int index, Object new);

                    To replace the element present in te specified index with provided Object
                    amd returns old object.

        
        int indexOf(Object o)
                    return index of the first occurrence

        
        int lastIndexOf(object o);
                    returns index of the last occurrence, no ready made method for other positions.
                


        ListIterator listIterator();

        


*/


 