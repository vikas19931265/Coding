/*
Internal Working of HashMap******(very important)
===========================================================

1. let us firstly create a map object.

        HashMap<String, Integer> m = new Hashmap<>();

    This line will create a HashMap object but please note that size of the hashmap
    is going to be 16 by default

2. The default size of the HashMap is going to be 16. Whenever we are trying to insert
   an object inside the hashmap then an array of buckets will be created internally with the size
   of 16.


        m.put("abc",1);





|------|
|      |     0
|------|
|      |     1
|----- |
|      |     2
|----- |
|      |     3
|----- |
|      |     4
|      |    
|----- |
|      | 
|      |     5    
|------| 
|      |
|      |     6    
|      | 
-------
|      |
|      |     7
|      | 
|------
|      | 
|      |     8
|------
|      |
|      | 
|      |     9   
|      | 
|------
|      | 
|      |     10
|------
|------| 
|      |
|      |     11  
|      | 
-------
|      |
|      |     12
|      | 
|------
|      | 
|      |     13
|------
|      |
|      | 
|      |     14  
|------
|      | 
|      |     15
|------


3. Here each bucket is also called as a node or linked list.

4. put() method is written in such a way that it will first find out the hashcode
   of the key

    m.put("abc",123);
    hash("abc");


5. Now for the "abc" key the hashcode is calculated. Lets say that the hashcode
   returned is 111111 which is a very large number and cannot be represented in
   the 16 buckets.

6. Hence to overcome this problem index is calculated which is based upon some formula
   that includes finding mod(11111,16) and doing some further calculations.

        index=hash & n(-1)

7. Now whatever is the index is returned, the element with key value will be stored
   in that particular index. 

8. The elements will be stored in the form of linked list data structure. This linked  
   list will contain the following information regarding the object.

        key of object
        hashcode of key
        value of object
        next having address of the next node.


9. Now lets say when trying to insert m.put("abc",123) the index value returned is 7. 
   In that case the element is going to get stored in the 7th index in the form of linked
   list data structure.


-------
|      |        ----------------------------------------
| 7    |--------|               |       |      |        |
|      |        |  hashcode     |key    |value | null   |
|------         ----------------------------------------


    next, value is null as this linked list is not pointing to any other linked list.



What happens when there is hash collision
=========================================


1. Lets assume we are trying to insert another element into the hashmap and the hashcode
   returned is same as the hashcode of the previous element. In this case the index of the
   element returned is also going to be same. So there will be hash collision.


2. So assuming we are trying to insert m.put("bbb",4) returning the same hashcode leading
   to return of the same index. In that case element will still be stored in the 7th bucket only.

3. In this case another linked list will be created having the hashcode, key and value of the 
   current object which will be added along with the already existing linked list.



-------
|      |        ----------------------------------------        -------------------------------
| 7    |------->|               |       |      |        |------>|  hashcode |key  |value|null   | 
|      |        |  hashcode     |key    |value | adddres|       |           |     |     |       |            
|------         ----------------------------------------        ----------------------------------



What will happen if we add key with null
==================================================

Whenever we are trying to add key as null then that element will get stored in the 0th bucket.


What will happen if we are trying to add duplicate key
========================================================

m.put(1,"abc");
m.put(1,"def");

If you are trying to add duplicate key, then the latest value of key will appear. 
That is earlier 1 was associated with "abc"

but later 1 will associate with "def". That is only one entry of the key will be maintained.


How does get() method of the HashMap will work
==========================================================


m.get(1);

This method will first find out the hashcode of the object that is the key. After finding out
the hashcode of the object then it will find out the index.

After finding out the index it will go that particular index position.

Now after going to the index position it will first match the hashcode and then the key.

Internally equals() method will be used to check the key.


In case of hashmap collision. JVM will first find out the hashcode and then go to that
particular index. After reaching that index it will try to evaluate the key. For checking
the matching key it will use the equals() method to find out the matching key.  Once the
matching key is found then it will print the value pertaining to the key.

*/