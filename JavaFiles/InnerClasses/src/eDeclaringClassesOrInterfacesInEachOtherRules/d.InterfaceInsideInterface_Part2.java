package eDeclaringClassesOrInterfacesInEachOtherRules;

/*

interface inside interface
---------------------------


1. Every interface present inside interface is public and static whether we are declaring or not
   hence we can implement inner interface directly without implementing outer interface.

2. Similarly whenever we are implementing outer interface we are not required to implement inner interface
  that is we can implement outer and inner interfaces independently.

*/


interface Outers
{
    public void m1();
    
    interface Inner// This interface is by default public-static in nature hence we can
                   // implement it individually also.
    {
        public void m2();
    }
    
}


class Tes1 implements Outers
{
    public void m1()
    {
        System.out.println("outer interface method implementation");
    }
}


class Tes2 implements Outers.Inner{
   
    public void m2()
    {
        System.out.println("Inner interface method implementation");
    }
}


class Tet
{
    public static void main(String[] args)
    {
        
        Tes1 t= new Tes1();
        t.m1();
        
        
        Tes2 t2= new Tes2();  // how are we able to create object of inner class without
                              // outer class need to be investigated.  
        t2.m2();   
   
      
        Outers.Inner i= new Tes2();
        
        i.m2();;
     
    }
}

/*
run:
outer interface method implementation
Inner interface method implementation
BUILD SUCCESSFUL (total time: 0 seconds)

*/
