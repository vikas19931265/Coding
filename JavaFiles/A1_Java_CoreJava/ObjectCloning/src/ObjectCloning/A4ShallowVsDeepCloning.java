package ObjectCloning;


/*
Shallow vs Deep Cloning
=============================

-> shallow cloning ( inside dog object we have a cat object)
  Dog d2=(Dog)d1.clone();

-> d1 is reference variable pointing to object containing a primitive and reference variable, 
   reference variable again points to Object which is a cat here.

->Here in this case a new cloned object will be created with new copy of only primitive variable but 
  inside this we have a reference variable pointing to another object. For this a new object will not be created
  instead a reference variable copy will be created which will point to the same cat Object which original object was pointing to.

->Hence if we are doing any change on original or cloned object in the object held inside by main object 
  then change will take place in both object. 

->Thats why this is not complete cloning instead its a partial or shallow cloning.

->In Shallow cloning by using cloned Object reference if we perform any change to 
  the contained object then those changes will be reflected to the main object. To overcome 
  this problem we should go for the deep cloning option.



 
  
                                    (Object Shared.)
    ----------                      ----------              ----------        
    |  Cat c--|-------------------> |        |<------------ |  Cat c |  
    |  i=10   |                     |  20    |              |   i=10 |  
     ----^-----                     |---------              |---------    
   d1----|     
     dog Object                                               Cloned Object      


                                Shallow Cloning


deep cloning( inside dog object we have a cat object)
==============================================================

d1 is reference variable pointing to object containing a primitive and reference variable, 
reference variable again points to Object cat

Here in this case a new cloned object will be created with new copy of  primitive variable ,  
inside object we also have a  reference variable pointing to another object. For this also new object will  be created .

Hence in this case a complete new cloned object will be created with no dependency with the original object.
This is the reason it  is called as deep cloning.


                                                                                    |----------   ( new Object)              
                          -----------                           |------------------>|          | 
                |-------->|          |                          |                   |    20    | 
                |         |  20      |                          |                   |--------  |
    ----------  |         |----------                      | ---------- |       
    |  Cat c--|-                                           |  Cat c     |
    |  i=10   |                                            |  i=10      |
     ---^------                                            | -----------|    
   d1---|     
     dog Object                                               Cloned Object    


                                        Deep Cloning.
                                    =======================
                






*/



  




	




  
