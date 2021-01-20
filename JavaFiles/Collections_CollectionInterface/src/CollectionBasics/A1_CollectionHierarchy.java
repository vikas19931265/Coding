
package CollectionBasics;

//----------------------------------------------  HIERARCY OF COLLECTION FRAMEWORK-----------------------------------------------------------


      

interface Iterable              //ITERABLE is the root interface          
{
    
}

       interface Collection extends Iterable //ITERABLE interface is extended by Collection interface
        {
    
        }

            interface List extends Collection//COLLECTION interface is extended by LIST , SET AND QUEUE
            {
                
            }
            
                 class ArrayList implements List    //Class ArrayList implements intrface List
                    {
                        
                    }
                    
                    class LinkedList implements List,Deque //Class Linked List implements interface LIST and DEQUE
                    {
                        
                    }
                    
                    class Vector implements List // class   VECTOR implements LIST
                    {
                        
                    }
                    
                    class Stack extends Vector  //class STACK extends VECTOR
                    {
                        
                    }
         

             interface Queue extends Collection   //interface QUEUE extends Collection
            {
                
            }
            
                    class PriorityQueue  implements  Queue //class PRIORITYQUEUE implements interface QUEUE
                    {
                
                    }


                      interface Deque extends Queue //Interface DEQUE extends QUEUE , also implemented by LINKED LIST.
                    {
                        
                    }

                    class ArrayDeque implements Deque //Class ARRAYDEQUE implements DEQUEUE
                    {
                        
                    }



               
             interface Set extends Collection  // interface set extends Collection
             {
                 
                 
             }       
                
                    class HashSet implements Set   //class HashSet implements SET interface.
                    {
                        
                    }
                   
                    class LinkedHashSet implements Set //class LinkedHashSet implements SET interface.
                    {
                        
                    }

                        interface SortedSet extends Set //interface SORTED SET extedns SET interface.
                        {
                            
                        }

                        class TreeSet implements SortedSet// class TREESET implements interface SortedSet.
                        {
                            
                        }

//---------------------------------------------------------------------**************************---------------------------------