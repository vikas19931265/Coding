/*

Difference between fail fast and fail safe iterators.



Property                                                Fail Fast                           Fail Safe


Does it throw ConcurrentModificationException           YES                                 NO


Is the cloned copy created                              No                                  Yes


Memory Problems                                        No                                   Yes


Examples                                             ArrayList, Vector                       ConcurrentHashMap, CopyOnWriteArrayList        
                                                     HashMap, HashSet                        CopyOnWriteArraySet.    


*/

