package Acollections_map;

/* Map
===========================================================

1. Map is not a child interface of Collection. 

2. If we want to represent a group of Objects as key value pairs then we should for 
   Map.

                          key            value
                          101            Durga     
                          102            Ravi   
                          103            Shiva   
                          104            Praveen       



3. Both keys and values Objects only. Duplicate keys are not allowed but values can be 
   duplicated.

4. Each key value pair is called as an "Entry". Hence map is considered as a collection of
   Entry objects.



Map Interface methods.
=================================


1. Object put(Object key , Object value)

        To add one key value pair to the Map
        
        If the key is already present then old value will be replaced with the
        new value and returns old value.


example         Object put( Object key, Object value)

                m.put(101,"durga");// return null                          101-durga   replaced with ravi and returned durga 
                m.put(102,"Shiva");// return null                          102-Shiva 
                m.put(101,"Ravi); //This will replaced durga with
                                    Ravi and return the old value
                                    that is durga.





2. void putAll(Map m) // group of key value pairs will be added.

3. Object get(Object key) //returns the  value associated specified key

9. Object remove(Object key)// Removes entry associated with the specified key

4. boolean containsKey(object key) // checks whether the key is present or not.

5. boolean containsValue(object value); // checks whether  object value is present or not in map

6. boolean isEmpty() ;// checks whether map is empty or not

7. int size() ;;// to find the size of the Set.

8. void clear(); // all objects and key value pairs will be removed.



More methods.

1. Set keySet();

2.Collection values();

3. Set entrySet();

These are also called as collection views  of Map


*/

//-------------------------------------------------------------***********************************------------------------------