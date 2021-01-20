/*

JoinRowSet:
==============

-> It is the child interface of WebRowSet.

-> It is by default scrollable and updatable

-> It is disconnected and serializable

-> If we want to join rows from different rowsets into a single rowset based on matched
   column(common column) then we should go for JoinRowSet.

-> We can add RowSets to the JoinRowSet by using addRowSet() method.
   addRowSet(RowSet rs,int commonColumnIndex);





*/