/*

Island of Isolation
=============================================


    class Test
    {
        Test i;
        
        public static void main(String[] args)
        {
            Test t1= new Test();
            Test t2= new Test();
            Test t2= new Test();
            
            //till now no objects are eligible for garbage collection.
            
            t1.i=t2;
            
                Here i reference inside t1 is holding t2 object
            
            t2.i=t3;
            
                Here i reference in t2 is holding t3 object.
                
            t2.i=t1;
            
                Here i reference in t2 is holding t1 object.
                
            So basically we have formed a chain of the internal references
            now we will try to nullify the internal references in order to check
            if the object are going to get destroyed or not.
            
            t1=null;
            
                We made t1 as null. But still we can refer this object from t2.i
                hence no object is destroyed.
            
            t2=null;
            
                Now we made t2 as null and t1 also null. But by using t2.i we can
                refer to t1 and then by further using t1.i we can refer to t2 hence
                no object is destroyed in this case also.
                
            t3=null;
            
                But if we made all the references as null then there is no outer 
                reference link to access the object and hence all the objects will
                become eligible for the garbage collection.
                
                
        This is called as Island of Isolation where objects are internally linked 
        by the references but there is no outside link to keep the objects.
            
            
        note:
        
        If an object does not contain any reference variable, then it is eligible for
        garbage collection always.
        
        Even though object is having references sometimes it is still eligible for
        garbage collection. This will happen in the case when all the references are
        internal references. Example island of isolation.
            
            
        }
    }





*/
