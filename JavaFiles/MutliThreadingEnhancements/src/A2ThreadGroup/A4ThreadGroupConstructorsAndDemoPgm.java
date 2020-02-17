package A2ThreadGroup;

/*

ThreadGroup constructors
-------------------------------------


1. ThreadGroup g = new ThreadGroup(String Groupname)

        This will create a new thread group with the specified group name.
The parent of this new group is thread group of currently executing thread.


Example

        ThreadGroup g = new ThreadGroup("First Group");



2. ThreadGroup g1= new ThreadGroup(ThreadGroup m , String GroupName);
                                    |                   |
                                   parent group      name of threadgroup

                                   
      This will create a new sub threadgroup with the specified group name. The parent of this
new thread group is specified parent(ThreadGroup m) group.

Example

        ThreadGroup g1= new ThreadGroup(g, "SecondGroup");



According to the below program
-----------------------------

1. System is the parent or root group.

2. main group is the child of system group.

3. First group is child of main group.

4. Second group is child of first group.


                System
                /
               /
             main  
               \
                \
                 First group
                 /
                /
              Second group  

*/


class Test
{
    
    public static void main(String[] args)
    {
        ThreadGroup g1= new ThreadGroup("First Group");
        
        System.out.println(g1.getParent().getName()); //main
        
        ThreadGroup g2= new ThreadGroup(g1, "Second Group");
        
        System.out.println(g2.getParent().getName());//First Group
    }
}

/*
run:
main
First Group
BUILD SUCCESSFUL (total time: 0 seconds)

*/

//-----------------------------------------------------------------******************************-------------------------------------------