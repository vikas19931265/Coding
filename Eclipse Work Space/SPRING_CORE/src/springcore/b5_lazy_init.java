/*
Lazy init concept
==================

1. As we know that scope of bean is singleton by default. So all the object of bean will be created at the time
   of the xml load.
   
   
2. But lets say that in case i dont want some object to be created during the time of xml load but instead wants it 
   to be created on demand then we can set the property of lazy-init to true.
   
   Note: concept applicable for only those beans not to be injected.
   
   
   ====for more info refer program=========

*/