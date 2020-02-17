/*

1. Synchronized is a modifier applicable for methods and blocks but not for classes and variables.

2. If multiple threads are trying to operate simultaneously on the same java object then there may be a chance of 
   data inconsistency problem. This is called raise condition.

3. We can overcome this problem by using synchronized keyword.

4. If a method or a block is declared as synchronized then at a time only one thread is allowed to execute that method or block on the given
   object so that data inconsistency problem will be resolved.

5. But the main disadvantage of the synchronized keyword is that it increases waiting time of the threads and creates
   performance problems hence if there is no specific requirement then it is not recommended to use synchronized keyword.

 
***Synchronized method should compulsory contain implementation whereas abstract methods does not contain any implementation hence
abstract-synchronized is illegal combination of modifiers for methods.


*/

//---------------------------------------------------------------------------------*******************--------------------------------------