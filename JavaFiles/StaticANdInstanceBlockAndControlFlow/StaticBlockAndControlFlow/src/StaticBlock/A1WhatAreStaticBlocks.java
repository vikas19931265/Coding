package StaticBlock;
/*

Static Blocks
=========================

Static blocks will be executed at the time of the class loading hence at the time of 
class loading if we want to perform any activity we have to define that inside 
static block.


Example1
================

At the time of java class loading the corresponding native libraries should be loaded
hence we have to define this activity inside the static block.

class Native
{
	static
	{
		System.loadLibrary("native Library path");
	}
}

Example2
================

After loading every database driver class, we have to register driver class with
driver manager but inside database driver class there is a static block to perform
this activity and we are not responsible to register explicitly.

        class DBDriver
        {
            static
                {
                    Register this driver with driver manager
                }
        }        


[note]
====================

    Within a class we can declare any number of static blocks but all these static blocks
    will be executed from top to bottom.

*/


class Sample
{
  //Example1  
    static
    {
        System.loadLibrary("native library path"); // this will happen before the main method.
    }


    public static void main(String[] args)
    {
        
    }

} 

//-------------------------------------------------------------------------*********--------------------------------------------------------------s