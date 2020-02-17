package aSerializationBasics;

/*

declaration                             output(after serialization)

int i =10;                              10 and 20
int j =20;  


transient int i =10;
          int j =20;                     0 and 20
          
          
transient static int i =10;              10 and 0
transient int j =20;




transient  int i=10;                      0 and 20        
transient final int j =20;



transient static int i=10;               10 and 20.              
transient final int j=20;

*/