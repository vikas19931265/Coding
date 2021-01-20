
package SingletonClass;


 class SingleTon {
    
  private static SingleTon t= new SingleTon();// Firstly created an Object which is static in nature means it is not an instance object
                                              // Also it is declared as private so that this object cannot be accessed from outside the class.
  
  private SingleTon()
  {
      // Here we created the constructor as private in nature so that an object cannot be created from outside the class.
  }
 
  public  static SingleTon  getObject()// Now we created a method to return the object of singleton type
  {
      return t; 
  }
 
}



class Driver
{
    
    public static void main(String[] args)
    {
          SingleTon t=SingleTon.getObject(); // We are accessing the object of Singleton class using method getObject
                                             // Here we have prevented the user from creating object of singleton class using new keyword by making the constructor as private.
          
          SingleTon t2=SingleTon.getObject(); // This will not create a new object instead the same object(static SingleTon t= new SingleTon()) will be shared.
          
          SingleTon t3=SingleTon.getObject();// t1 , t2 and t3 all these reference points to the same object. Hence we are not creating a new Object instead using the same object made available in the Singleton class.
    
          System.out.println(t); //SingletonClass.SingleTon@15db9742
          System.out.println(t2);// SingletonClass.SingleTon@15db9742
          System.out.println(t3);//SingletonClass.SingleTon@15db9742
    }




}
 
//--------------------------------------------------------------------------------------------**************---------------------------------------------------