/*


Event Handling Mechanism for RowSets:
====================================================

We can implement event handling for RowSets.
To perform event handling,we have to implement RowSetListener interface.

 class RowSetListenerImpl implements RowSetListener
 {
     rowSetChanged(RowSetEvent e)
     {
            this method will be executed whenever total RowSet content changed
     } 

    rowChanged(RowSetEvent e)
    {
        this method will be executed whenever any change performed in rows of RowSet like in
        insertion,deletion and updation
    }

    cursorMoved(RowSetEvent e)
    {
        this method will be executed whenever cursor moved from one row to another row
    }
}

We can add RowSetListener to the RowSet by using addRowSetListener() method.
Eg: rs.addRowSetListener(new RowSetListenerImpl());



*/