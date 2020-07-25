/*
Named Parameter
=====================

This is the most common and user friendly approach. it uses colon followed by parameter name(:no).

select st from Student st where st.sno=:no

There are multiple methods to set the values into named parameters.

1.public Query setParameter(String name, Object val)

2.public Query setXxx(String name, int val)

Ex
public Query setInteger(String name, int val);
public Query setString(String name, String val);
--
--

3.public Query setProperties(Object bean)
4.public Query setProperties(Map bean)

1.setParameter(String name, Object value)
-----------------------------------------
Ex:
--
--
Query query = session.createQuery("from Student s where s.sno>:no");
query.setParameter("no", 10);
--
--
2.setXxx(-,-)
-------------
Ex:
Query query = session.createQuery("from Student s where s.sno>:no");
query.setInterger("no",10)
--
--
3.setProperties(Object bean)
---------------------------
Ex:
Query query = session.createQuery("from Student s where s.sno>:sno");
Student sBean = new Student();
sBean.setSno(10);
query.setProperties(sBean);

NOTE:
Here named parameter name should be matched with pojo property name
(sno == sno).

4.setProperties(Map bean)
----------------------
Query query = session.createQuery("from Student s where s.sno>:no");

Map<String, Integer> map = new HashMap<String, Integer>();
map.put("no", 10);
query.setProperties(map);



*/




