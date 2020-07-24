/*

2.POJO or Persistant Class
==============================================

While developing any java class, that class does not extends or implements third party API is called POJO.

By using this class we will perform DB operations or persistant operations.

Rules for pojo
--------------
1.it should be public and non abstract class.
2.class implements java.io.Serializable.
3.provide defualt constructor.
4.declare private properties.
5.generate setters and getters for each property.

Ex:
import java.io.Serializable;
public class Student implements Serializable
{
public Student(){
sop("default constructor");
}
private int sno;
priate String sname;
priate String semail;
priate String smobile;

//generate setters and getters.

public void setSno(int sno){
this.sno=sno;
}
public int getSno(){
return sno;
}
--
--
--
}

examples
---------
public class Student
{}
Here Student class is pojo.

public class Student implements Serializable
{}
Here Student class is pojo.

public class Test extends Demo
{}
Here Demo is avaliable in same application.So Test class is pojo.

pubic class LoginForm exteds ActionForm
{
}
Here LoginForm is not a pojo, because LoginForm depends on struts api.

NOTE:Any java class or bean class which is mapped with DB table is called Persistant class.





*/