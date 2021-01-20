/*
Difference between ArrayList and LinkedList.
========================================================================


ArrayList                                                                   LinkedList


1. ArrayList is the best choice if our frequent operation           LinkedList is the best choice if our 
   is retrieval operation                                           frequent operation is insertion or deletion  
                                                                    in the middle.

2. ArrayList is the worst choice if our frequent operation          LinkedList is the worst choice if our frequent operation is 
   is insertion or deletion in the middle because internally        retrieval operation.    
   several shift operations are performed

3. In arrayList the elements will be stored in consecutive memory   In LinkedList the elements will not be stored in consecutive
   locations and hence retrieval operation will become easy.        memory locations and hence retrieval operation will become complex.

*/

//-----------------------------------------------------------------------******************-------------------------------------