package cMethodOverriding;

/*

1. If child class method throws any checked exception, compulsory the parent class
   method should throw the same checked exception or its parent.

2. Otherwise we will get compile time error.

3. But there are no restrictions for unchecked exceptions.


4. Unchecked Exception( RunTime Exception + VM( Virtual Memory Error)


5. All Exceptions other than point 4 are called as checked exception.

6. The rule in this slide is only applicable for the checked exception and not 
   the unchecked Exceptions.

7. So during overriding when a child class throws some exception then below cases
   should be considered.





*/


/*

case 1:

   parent->     public void m1() throws Exception
   Child ->     public void m1()

This is valid as child class method does not throw any exception


case 2:

    parent->     public void m1() 
    Child ->     public void m1() throws Exception

This is invalid as child class method throws an exception but parent does not throw anything.


case 3:

    parent->     public void m1() throws Exception
    Child ->     public void m1() throws IOException

This is valid as child class throws IOException and parent throws Exception which is parent.


case 4:

    parent->     public void m1() throws IOException
    Child ->     public void m1() throws Exception

This is invalid as child class throws Exception, and parent IOException. Parent must throw
the same exception as the child is throwing or else should throw the parent.

case 5:

    parent->     public void m1() throws IOException
    Child ->     public void m1() throws FileNotFoundException, EOFException

This is valid as child throws Filenotfound and EOF and parent throws parent class of these
exceptions which is IOException.


case 6:

    parent->     public void m1() throws IOException
    Child ->     public void m1() throws EOFException, InterruptedException

This is invalid as IOException of parent is not the parent class of InterruptedException.


case 7:

    parent->     public void m1() throws Exception
    Child ->     public void m1() throws AE, NPE, CCE

    This is valid as AE, NPE and CCE are Unchecked Exceptions and the above rule 
    is not applicable when the child method throws any unchecked exception.


*/

//-----------------------------------------------------------------------------*********-------------------------------------------------------------