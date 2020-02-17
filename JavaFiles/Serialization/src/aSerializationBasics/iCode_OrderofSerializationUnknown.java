package aSerializationBasics;

/*

If we dont know order of the objects in the serialization
---------------------------------------------------------------------------------


FIS fis = new FIS("abc.serv");
OIS ois= new OIS(fis);

Object o = ois.readObject();

if(o instanceof Dog)
{
    
    Dog d2=(Dog)o;
    //perform Dog specific functionality
}


else if(o instanceof Cat)
{
    Cat c2=(Cat)o;
    //perform cat specfic functionality
}


else if(o instanceof Rat)
{
    Rat r3=(Rat)o;
    //perform Rat specific functionality
    
}


*/