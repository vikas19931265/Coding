/*

Importance of String constant pool
===============================================================================

    -----VOTER REGISTRATION FORM--------

     name
     fathername
     dob
     age
     address
        hno
        street
        village
        mandal
        district
        state
        pin
    identification mark1
    identification mark2

            
                submit button



In above registration form we can see total 15 objects are of the String type. If in hyderabad itself 
all the citizens have to register on this form then nearly 11 crore objects need to be created. This 
will lead to lot of memory and performance problems.

Hence in order to recover this problem , SUN introduced another memory management system for the String objects
that is SCP.

In case of SCP all the references having same object content will have single object. Like in this case
for all the citizens of Hyderabad. Hyderabad is the common city for them hence instead of creating separated
object for each of the references we can create a single object Hyderabad which will be used by all the references.
In this way we can improve the performance.

However the disadvantage of this approach is that if one instance changes the city name, then it will affect all
the instances hence immutability of string objects is important. Therefore whenever a reference is trying to 
change the content of the object then with those changes a new object has to be created and the reference trying 
to change should start pointing to it.




v1--------------\
                  \  
                    \
v2------------------  hyderabad object
                  /  
v3--------------/
               /
              / 
v1crore------/




if v3 is trying to change the city to vijaywada then a new object has to be created
and v3 should start pointing to it.



v3-------------------vijaywada object.




by durga
-------------------

1. In our program if a String object is repeatedly required then it is not recommended
   to create separate object for the every requirement because it creates performance 
   and memory problems.

2. Instead of creating a separate object for every requirement we have to create only one object
   and we can reuse the same object for every requirement so that performance and memory 
   utilization will be improved. This thing is possible because of SCP hence the main 
   advantage of SCP are memory utilization and performance will be improved.


3. But the main problem with SCP is as several references are pointing to the same object 
   . By using one reference if we are trying to change the content then remaining 
   references will be affected.

4. To overcome this problem SUN implemented String objects as immutable object that 
   is once we create a String object , we cannot perform any changes in the existing object.
   If we are tyring to perform any changes then with those changes a new object will be created

hence SCP IS THE ONLY REASON FOR IMMUTABILITY OF STRING OBJECTS

*/
package StringConstantPool;

