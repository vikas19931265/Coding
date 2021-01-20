package c_SortingTechniques_Comparable_Comparator;

/* Comparator interface
=================================================================================


1. Comparator is present in java.util package and it defines two methods.

    compare() and equals()



    public int compare( Object obj1, Object obj1)

    returns -ve if obj1 has to come before obj2

    returns +ve if obj1 has to come after obj2

    returns 0 if obj1 and obj2 are equal.


    public boolean equals(Object obj)





2. Whenever we are implementing comparator interface , compulsory we should provide implementation only
   for compare() method and we are not required to provide implementation for equals() method because
   it is already available to our class from Object class through inheritance.


                class myComparator implements Comparator
                {
                        compare()------
                        
                        // equalsTo available through inheritance from Object class.
                            
                }        
    */

//-------------------------------------------------------------**********************************------------------------------------