/*

Comparison table for three cursor.
===========================================================================================

Property                Enumeration             Iterator                        ListIterator
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Where can we           only for legacy              for array collection      applicable only for 
apply??                 classes                     object                    List object.

Is it legacy??          yes(1.0)                    no(1.2 v)                 No(1.2 v)

Movement               single direction             single direction           bidirectional
                        (only forward)              (only forward)            (both direction) 

Allowed Operations     only read                    read/remove             read/remove/replace/add.

How can we get?        by using elements()          by using iterator()     by using listIterator of list    
                       method of Vector class       method of collection        interface.
                                                    interface.

Methods                 hasMoreElement()           hasNext();                  hasNext(); 
                        nextElement()               next();                     next();
                                                   remove();                   nextIndex();
                                                                               hasPrevious(); 
                                                                                previous();                    
                                                                              previousIndex();                                          
                                                                               add(Object o);   
                                                                               set(Object o); 
                                                                               remove();            

*/                  


//-------------------------------------------------------------------***********************--------------------------------------------------------