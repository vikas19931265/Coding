/*

class Test
{
    Student s1 = new Student(); 
    
            
    
    static Student s2= new Student(); //1 static variable stored in the method area.
        
        
        new Student() is object hence it will be stored in the heap area.
        But s2 is static reference and hence s2 stored in the method area
        will be referring to the object stored in the heap area
        
        
    
    
    
    public static void main(String[] args)
    {
        
        Test t = new Test();
        
            
            
            t reference will be stored in the stack area. And from t in stack
            area it will be pointing to the object( new Test()) stored in
            the heap area.
            
            When we are creating Test object , instance object that is the student
            will also be created( Student s1= new Student). Here s1 reference is
            in heap area and from there it will be pointing to the object( new Student()
            which is also stored in the heap area only.
            
            
            
        
        
        
        Student s3= new Student();
        
        
        
        Here s3 is local variable stored in the stack which will be pointing to
        the student object which will be stored in the heap area.
        
        
        
        
        
    }
}



*/






























