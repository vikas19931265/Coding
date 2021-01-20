package A4SynchronizedKeyword_block;

/*



                    ------------------------
                    |           |           |   
                    | non sync  | sync area |
                    |  area     |           |   
                    |           |           |   
                    ------------------------

                        Java objects.

There are 2 areas of java objects.
    
        1. non synchronized area
        2. synchronized area.



non Synchronized area can be accessed by any number of threads simultaneously

Synchornized area can be accessed by only one thread at a time.




example 1

class x

{
    
    synchronized Area
            {
                Where ever we are performing update operation
                        (add/ remove/delete/replace)
                        
                 where state of the object is always changing.
                 
                ex ticket booking on a particular seat to be done only
                   once at a time.
                           
             }
            
     non synchrnoizedArea
             {
                 
               Whereever object state will not change like read() operation  
                 
            
                
            }
    
    
}

*/



class ReservationSystem
{
    
   public void checkAvailability()
    {
        // just read operation so non synchronized method
        
    }
    


   synchronized  public void bookTicket()
   {
       
       // update operaton on object hence should go for synchronized method.
       
   }



}