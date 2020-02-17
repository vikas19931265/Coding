/* TreeSet
=============================================================

1. The underline data structure is balanced Tree.

2. Duplicate objects are not allowed.

3. Insertion order is not preserved.

4. Heterogeneous objects are not allowed otherwise we will get run time exception
   saying ClassCastException.

5. Null insertion possible but only once.

6. This also implements Serilizable and Cloneable interface but not RandomAccess.

7. All objects will be inserted based on some sorting order. It may be default natural sorting
   order or customized sorting order.


Constructors for TreeSet()
=================================================================



1. TreeSet t = new TreeSet();

    This will create an empty TreeSet object where the elements will be inserted according
to default natural sorting order.


2. TreeSet t = new TreeSet(Comparator c);

    This will create an empty TreeSet object where the elements will be inserted according to
customized sorting order specified by comparator object.


3. TreeSet t =  new TreeSet( Collection c);

4. TreeSet t = new TreeSet( SortedSet s);// based on Sorted s , TreeSet will be created with the same sorting technique.


*/

package a_Set;

import java.util.TreeSet;

 class TreeSetDemo {

    public static void main(String[] args)
    {
        TreeSet t = new TreeSet();
        t.add("A");
        t.add("a");
        t.add("B");
        t.add("Z");
        t.add("L");
        //t.add(new Integer(10)); //CCE
        //t.add(null); //---NPE
        
        System.out.println(t);
    
    }
}

/*
o/p
run:
[A, B, L, Z, a]
BUILD SUCCESSFUL (total time: 0 seconds)



*/

//-------------------------------------------------------------***************************************----------------------------------------------------