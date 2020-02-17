/* getClass()


To display database vendor specific connection interface implemented class name.


Connection con =DriverManger.getConnection(---);

System.out.println(con.getClass().getName());


Note
---------------

After loading every .class file , JVM will create an object of the type java.lang.Class in the
heap area.

Programmer can use this Class object to get Class level information of object.

We can use getClass() method very frequently in Reflections

*/

