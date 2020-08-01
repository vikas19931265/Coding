/*

Criteria Approach
============================

This is another approach to perform bulk operations.

here persistance logic will be develop by using Creteria API.

Criteria is an API from hibernate to write Queries in Object Oriented manner rather than SQL or HQL

This apporach does not depends on any query language(hql or sql).

This approach based logic is DB independent logic.

Criteria is an interface defined in org.hibernate package.

Criteria is suitable for building dynamic queries.

Ex: Search operations.

In order to work with criteria approach we need to get the Criteria object.

To get the Criteria object use following method.

public Criteria createCriteria(Class persistentClass)

this method is defined in Session interface.

Criteria object means, it is an object of class which implements org.hibernate.Criteria interface. (CriteriaImpl)



*/




