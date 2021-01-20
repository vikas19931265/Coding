/*
Vector.
================================================================================


1. The underline data structure for Vector is Resizable Array/ Growable Array.

2. Insertion order is preserved.

3. Duplicates are allowed.

4. Heterogeneous objects are allowed.

5. null insertion is possible.

6. Vector class implements Serilizable, Cloneable and RandomAccess interface.

7. Every method present inside the Vector is Synchronized and hence Vector Objects are Thread Safe.



Vector Constructors.
========================================

1. Vector v = new Vector(); 

        This will create an empty Vector Object with default initial capacity 10. Once Vector
  reaches its maximum capacity then a new vector object will be created with 

    NewCapactiy= CurrentCapacity*2;


2.Vector v = new Vector(int initial capactiy)

    This will create an empty Vector Object with the specified initial capacity.


3. Vector v = new Vector( int initialcapacity , int incrementalcapacity);

    This will create an empty Vector object with the specified initial capacity
    and then once the Vector is full new Vector will be created with the specified
    incremental capacity.

4. Vector c = new Vector(Collection c);

    This will create an equivalent vector object for the given collection. This constructor
    is meant for interconversion between Collection objects.


*/

//---------------------------------------------------------------------******************----------------------------------------