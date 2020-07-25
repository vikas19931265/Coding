package a6_HQL;

/*
Named and Positional Parameters
==========================================

While constructing hql queries, we can make that query as dynamic queries by passing either positional parameter(?) or
Named parameter(:label) into that query.

Before execute that query we need set the values in the place of that question mark(?) or label(:label)


positional parameters
==================================

select st from Student st where st.sno=?


It uses question mark(?) to define the parameter, and we have set the value for the parameter using position.

There are multiple methods to set the values in to positional parameters.

1.public Query setParameter(int position, Object val)

2.public Query setXxx(int position object val)  { preferred approach}

Ex

public Query setInteger(int position, int val);
public Query setString(int position, String val);

Note:
-----
positional parameters doesn't supports setProperties(-) method.

Always recomended to use named parameters in the real world application.



*/