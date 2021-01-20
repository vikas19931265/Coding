/*

Updatable ResultSets:
=========================

If we perform any changes to the ResultSet and if those changes are reflecting to the Database,
such type of ResultSets are called Updatable ResultSets.

By default ResultSet is Read only. But we can specify explicitly as updatable by using the following
constant.

CONCUR_UPDATABLE ➔ 1008

For Updatable ResultSets, we have to create Statement object as follows..

Statement st=con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE,ResultSet.CONCUR_UPDATABLE);



*/