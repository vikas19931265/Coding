/* volatile modifier.
=====================================

1. volatile is a modifier applicable only for variables and we cannot apply anywhere else.

2. If the value of a variable keep on changing by multiple threads then there may be a chance of
   data inconsistency problem.

3. We can solve this problem by using volatile modifier.

4. If a variable is declared as a volatile , then for every thread JVM will create a separate local 
   copy. Every modification performed by the thread will take place in the local copy so that
   there is no effect on the remaining threads.

Advantage

    The main advantage of the volatile keyword is that we can overcome data inconsistency problem which could occur due to 
    multiple threads accessing the same variable.

Disadvantage

    the main disadvantage of the volatile keyword is that creating and maintaining a separate copy of a variable for every thread
    will increase complexity of the programming and creates performance problems hence if there is no specific requirement it
    is never recommended to use volatile keyword and it is almost deprecated keyword.


5. final variable means that the value never changes , volatile variable means that the value keep on changing hence 
   volatile final is illegal combination for variables.




*/
package MemberMethodsAndVariables;

/**
 *
 * @author VIKAS GAUTAM
 */
 class NewClass2
{
    
}


//---------------------------------------------------------------------------------*******************--------------------------------------