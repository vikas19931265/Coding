package a_springcore;
/*

Depends on
============

Spring creates objects based upon the order in which the beans are configured in the xml.

Example if we have student and object address, then if we should normally be providing address configuration 
before the student configuration.

But if we place student before address then student object will be created before address.

but if we want to create address object before the student,then in student bean tag we can set the depends-on property
to address, then the student object will be created before the address.

*/