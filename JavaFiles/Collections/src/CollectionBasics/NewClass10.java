/*


                                   Collections(I)(1.2)
                                       |
         -------------------------     | --------------------------------                              
           |                           |                                 |       
           |                           |                                 |   
         List(I)                      Set(I)                          Queue(I) 
         |                             / \                               |
         |                            /   \                              |
         |----->ArrayList        Hashset   SortedSet(I)                  |----PriorityQueue
         |                          |           |                        |
         |----->LinkList-           |           |                        |----BlockingQueue
         |               |          |           |                        |           |    
         |----->Vector   |      LinkedHashSet  NavigationSet(I)          |           |---PriorityBlockingQueue
                   |     |                       |                       |           |
                   |     |                       |                       |           |---LinkedBlockingQueue.
                   |     |                       |                       |                   
                   |     |                       |                 |---> Deque(I)
                Stack    |                      TreeSet            |       |   
                         |                                         |       |   
                         |                                         |     ArrayDeque     
                         |-----------------implemets--------------


                                   Map(I)                                                                   Dictionary(AC)------
                                   |                                                                        |               |
                                   |                                                                        |               |   
             --------------------  |---------------------------------------------SortedMap(I) --------------                |                            
             |                     |                    |                          |                        |               |
             |                     |                    |                          |                        |               |----Legacy classes(Dictionary, Hashtable,Properties)
           HashMap              WeakHashMap           IdentityHashMap           NavigableMap(I)            Hashtable        |
             |                                                                     |                        |               |
             |                                                                     |                        |               |        
             |                                                                     |                        |               |
          LinkedHashMap                                                          TreeSet                   Properties ------          



Collection( 1.2)
List(1.2)
ArrayList(1.2)
LinkedList(1.2)
Vector/Stack(1.0)---legacy classes.

Set(1.2)
HashSet(1.2)
LinkedHashSet(1.4)
    SortedSet(1.2)
    NavigableSet(1.6)
    TreeSet(1.2)

Queue----1.5


Map(1.2)
HashMap(1.2)
LinkedHashMap(1.4)
WeakHashmap(1.2)
    SortedMap(1.2)
    NavigableMap(1.6)
    TreeMap(1.2)
        
Dictionary (1.0)  ---
Hashtable (1.0)     |----legacy classes
Properties (1.0)  ---  



Sorting
    Comparable Interface( If we need default sorting)
    Comparator Interface ( If we want customised sorting)


Cursors( if we want to fetch objects from collection one by one)
        Enumeration interface
        Iterator interface
        ListIterator interface


Utilility Classes
        1. Collections  class
        2. Arrays class
            
    


*/                  