/* ArrayList


1. Usually we can use collections to hold and transfer Objects from one location 
   to another location.(container).

2. To provide support for this kind of requirement every collection class by default 
   implements Serializable and Cloneable interfaces.

3. ArrayList and Vector classes implements RandomAccess interface so that any 
   random element we can access with same speed.



RandomAccess ( java.util package---Marker interface)

1. This interface is present in java.util package and it does not contain any methods.
   It is a marker interface , where required ability will be provided automatically by the JVM.



Which of the following is true.

ArrayList l = new ArrayList();

LinkedList l2= new LinkedList();

    
    System.out.println(l1 instanceof Serializable) // true.

    System.out.println(l2 instanceof Cloneable); // true.

    System.out.println(l1 instanceof RandomAccess); // true

    System.out.println(l2 instanceof RandomAccess); // false. ( LinkedList does not implement RandomAccess interface).


When is ArrayList best choice??

ArrayList is the best choice if our frequent operation is retrieval operation.
This is because ArrayList implements RandomAccess interface.



When is ArrayList a poor choice??

ArrayList is the worst choice if our frequent operation is "Insertion or Deletion"
in the middle.







*/

