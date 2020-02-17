
package Acollections_map;


/*
 

1. A map is group of key value pairs and each key value pair is called as an entry.
   Hence MAP is considered as collection of entry objects.

2. Without existing Map object , there is no chance of existing entry object. Hence entry 
   interface is defined inside the MAP interface


            interface Map   
            {

                interface entry
                {
                        Object getKey();
                        Objct.getValue();
                        Object.setValue(Object obj)

                }

            }

Above three methods are entry specific methods and we can only apply on Entry Object.


*/

//---------------------------------------------------------------******************************------------------------------------------