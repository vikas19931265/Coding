/*Cloning Basic Program */

package ObjectCloning;


class Test implements Cloneable
{

/*It is mandatary to implement the Cloneable interface in order to create clones of objects */
 
    int i=10;
    int j=20;
    
    public static void main(String[] args) throws CloneNotSupportedException
    {
        /*
          It is mandatary to throw CloneNotSupportedException here as the method clone() throws the same exception.
         */
       
         Test t1= new Test();
        
        Test t2= (Test)t1.clone(); 
        /*
            clone() method return type is "Object" hence we have to typecast it into the Test class.
        */
        t2.i=888;
        t2.j=999;
        
        System.out.println(t1.i+"....."+ t1.j+"...."+t2.i+"...."+t2.j);
        
        System.out.println("Object 1"+ t1);
        
        System.out.println("Object 2"+t2);
    }
} 

	

/*o/p: run:
10.....20....888....999
Object 1Concepts.Test@6b7920
Object 2Concepts.Test@1dd46f7
BUILD SUCCESSFUL (total time: 1 second)
*/

//----------------------------------------------------------------------------------****************-------------------------------------------------------