/*

FAQ for interviews
------------------------

1. What is the difference between String and StringBuffer?

2. Explain immutability and mutability with an example?

3. What is the difference between

            String s = new String("durga"); and

            Strnig s ="durga";

4. Other then immutability and mutability is there any other difference
   between String and StringBuffer.


5. What s SCP?

        It is specially designed memory area  for String objects.

6. What is advantage of SCP?

7. What is disadvantage of SCP?

8. Why SCP like concept is available only for String but not for StringBuffer?

    String is the most commonly used object and hence SUN provided special memory
    management for String objects.

    But StringBuffer is not so commonly used object and hence special memory management
    is not required for StringBuffer.


9. Why String objects are immutable and whereas StringBuffer objects are mutable.

    In the case of String because of SCP a sinble object can be referenced by multiple
    references. By using one reference if we are allowed to change the content in the
    existing object then remaining references will also be affected. To overcome this problem
    SUN implemented String objects as immutable.

    According to this once we create a String object we cant perform any changes in the
    existing object. If we are trying to perform any changes then with those changes
    a new object will be created


String

v1--------------\
                  \
                    \
v2------------------  hyderabad object
                  /
v3--------------/
               /
              /
v1crore------/


v3----------> vijayawada Object( if v3 is trying to change the city new object is created)


StringBuffer

v1----------hyderabad object

v2----------hyderabad object change to vijaywada with no effect on remaining references

v3----------hyderabad object

v4----------hyderabad object



But, in StringBuffer there is no concept like SCP hence for every requirement a separate
object will be created . By using one reference if we are trying to change the content
then there is no affect on remaining references hence immutability concept is not required
for the StringBuffer.



10. In addition to String objects , any other objects are immutable in java.?

     In additon to String object all  Wrapper classes objects also are immutable
     in java.


11. Is it possible to create our own immutable class?

12. How to create our own immutable class? Explain with an example.

13. Immutable means non-changable whereas final also means non changable then what
    is difference between final and immutable.


*/
