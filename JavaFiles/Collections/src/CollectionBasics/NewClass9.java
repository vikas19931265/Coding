/*

Map

Map is NOT A CHILD INTERFACE  of Collection. If we want to represent a group of individual
Objects as key value pairs then we should go for the Map .


             Example

                           Key              Value
                           Sno              Sname

                           101              Durga
                          



Both keys and values are Objects only. Duplicate keys are not allowed but values can be duplicated


               Dictionary(Abstract class) (1.0)                     
                |                 
                |                Map(1.2)
                -----------------  /\-----------------------------------
                |                  |              |                     |  
                |                  |              |                     |  
               Hashtable(1.0)      |              |                     |
                |                HashMap(1.2)    WeakHashMap(1.2)   IdentityHashMap(1.4)
                |                  |
                |                  |
              Properties(1.0)   LinkedHashMap(1.4)          
                              


Dictionary, Hashtable and Properties are also called as legacy classes as they came in 1.0



SortedMap

It is the child interface of the Map interface. If we want to represent a group of key value pairs
according to some sorting order of the keys then we should go for SortedMap interface.

In SortedMap the sorting should be based on key but based on values.



NavigableMap

It is the child interface of sorted map. It defines several methods for navigation purposes.
It has only one implementation class Treemap.


                map(I)
                   \
                    \    
                     \
                      SortedMap(I)  
                       | 
                       |
                       |
                       |
                       NavigableMap(I) 
                       |
                       |
                       |
                       TreeMap
*/


//----------------------------------------------------------------------------------------------------------------------------------------------------------