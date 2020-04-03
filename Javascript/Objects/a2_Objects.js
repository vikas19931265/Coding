/* 
Objects
=====================

An object is a collection of properties, and a property is an association between a name (or key) and a
value. A property's value can be a function, in which case the property is known as a method. 
In addition to objects that are predefined in the browser, you can define your own objects.

var fees ={
	       Rahul: 100, 
	       Sumit: 200, 
 	       Rohan: 300
	       total : function ( ) { return(100+200+300); }
	};

Types of objects
=========================

User-defined Objects – These are custom objects created by the programmer to bring structure and 
                       consistency to a particular programming task. 

Native Objects –     These are provided by the JavaScript language itself like String, Number, Boolean, 
                     Function, Date, Object, Array, Math, RegExp, Error as well as object that allow 
                     creation of user-defined objects and composite types.  

Host Objects –       These objects are not specified as part of the JavaScript language but that are 
                    supported by most host environments, typically browsers like window, navigator.

Document Objects – These are part of the Document Object Model (DOM), as defined by the W3C. These objects
                   presents present the programmer with a structured interface to HTML and XML documents.
                   Access to the document objects is provided by the browser via the document  property of 
                   the window object (window.document).

*/
