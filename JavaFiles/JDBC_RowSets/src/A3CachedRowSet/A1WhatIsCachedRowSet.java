/*

CachedRowSet:
==========================

-> It is the child interface of RowSet.

-> It is bydefault scrollable and updatable.

-> It is disconnected RowSet. ie we can use RowSet without having database connection.

-> It is Serializable.

-> The main advantage of CachedRowSet is we can send this RowSet object for multiple people
across the network and all those people can access RowSet data without having DB Connection.

-> If we perform any update operations(like insert,delete and update) to the CachedRowSet,to
reflect those changes compulsary Connection should be established.

-> Once Connection established then only those changes will be reflected in Database.



*/