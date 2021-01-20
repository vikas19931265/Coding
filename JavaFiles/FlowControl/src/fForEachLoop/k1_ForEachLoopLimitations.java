/*

For-each loop limitations
----------------------------------

For-each loop is the best choice to retrieve elements of the arrays and collections
but its limitation is that it is applicable only for arrays and collections 
and it is not a general purpose use


example
-------------

    for(int i =0 ; i<10 ; i++)
{
    System.out.println("Hello");

}

// We cannot write an equivalent for each loop for this directly.



By using normal for loop we can print array elements either in the original order or in the reverse order 
But by using for-each loop we can print array elements only in the original order but not in the reverse order.


example
----------

int[] x ={10,20,30,40,50};

for(int i=x.length-1 ;i>=0;i--)

{
        System.out.println(x[i])

}

But we cannot write an equivalent for-each loop to reverse order directly.

*/




