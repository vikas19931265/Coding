/*

Enable and disable Assertion in package
==========================================


pack1
    A.class
    B.class
    pack2
        C.class
        D.class
        
        
        
1. To enable assertions only in the b class.

    java -ea pack1.B
    
    
    
2.To enable assertions in both the B and D classes

    java -ea pack1.B -ea pack1.pack2.D
    

3. To enable assertions in every class of pack1


    java -ea:pack1...
    

4. To enable assertions in every class of pack1 except B class

    java -ea:pack1... -da:pack1.B
    
    
5. To enable assertions in every class of pack1 except pack2 class

    java -ea:pack1... -da:pack1.pack2...
    
    
Note
======

    We can enable and disable assertions either class wise or package wise also
    
*/    
