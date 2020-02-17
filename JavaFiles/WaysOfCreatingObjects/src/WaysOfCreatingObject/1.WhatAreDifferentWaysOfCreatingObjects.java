/*
 [important interview questions]

 In how many ways we can create an object in java.??

 or

 In how many ways we can get object in java.???

 Ans( 5 Standard ways of Creating objects in java)



 1) By using new Operator.

 Test t = new Test();

 -----------------------------------------------------------
 2) By using newInstance() method

 Test t= (Test)Class.forname("Test).newInstance();

 ------------------------------------------------------------
 3). By using Factory method.

 Runtime r=Runtime.getRuntime();

 DateFormat df=DateFormat.getInstance();

 -----------------------------------------------------------------
 
 4) By using Clone() method.

 Test t1= new Test();

 Test t2= (Test)t1.clone();

 --------------------------------------------------------------------
 5) By using Deserilizaation.

 FileInputStream fis= new FileInputStream("abc.txt);

 ObjectInputStream ois= new ObjectInputStream(fis);

 Dog d2= (Dog) ois.readObject();

 -----------------------------------------------------------------------
 

6) String s= "String"; ( not a standard way , applicable only to String)

7) Integer i=10; ( not a standary way , applicable to only Integer)



 */

//--------------------------------------------------------------------------*******------------------------------------------