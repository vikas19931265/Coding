package SortedMap1_Hashtable1_PropertyFile1;

/*

Properties.
====================


1. In our program if anything which changes frequently( like username, password, mailids, mobile no etc)
   are not recommended to be hard coded in java program because if there is any change to reflect that change
   recompilation , rebuild  and redeploy application is required. Even sometimes server restart is also required.

2. This can cause a big business impact to the client.

3. We can overcome this problem by using the properties file. Such type of variable things we have to configure in the properties file.

4. From the properties file we have to read into the java program and we can use those properties.

5. The main advantage of this approach is that if there is a change in the properties file. To reflect that change
   just redeployment is enough which will not create any business impact to the client.


6. We can use java properties object to hold properties which are coming from properties file.
    
7. In normal Map like Hashmap / Hashtable / TreeMap. Key and value can be any type. But in the case
   of the properties key and value should be of String type.


Constructor in Properties.
=================================



Properties p = new Properties();


methods in Properties.
===================================

1. String getProperties( String propertyname);

    to get value associated with the specified property

    If the specified property is not available then this method will return null.


2. String setProperty(String propertyName, String propertyValue);

       to set a new Property

        this will return String---> old value

  If the specified property is already present then the old value will be replaced with the 
  new value and returns old value.

3.  Enumeration propertyNames();

    This will return all property names present inside the properties object.



ExtraMethods
=======================================


void load(InputStream is)

    to load properties from properties file into java properties object.



void store(OutputStream os, String comment)

    to store properties from java properties object into properties file.



-----------------                               -----------------------
|               |------load()--------------- >  |                      | 
|               |                               |java properties object|
|properties file|                               |                      | 
|               |<------store()--------------   |                      |     
-----------------                               |----------------------

    abc.properties                                Properties p = new Properties();

*/

//-------------------------------------------------------------***************************-----------------------------------