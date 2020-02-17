/*

WebRowSet(I):
===========================

-> It is the child interface of CachedRowSet.

-> It is bydefault scrollable and updatable.

-> It is disconnected and serializable

-> WebRowSet can publish data to xml files,which are very helpful for enterprise applications.

    FileWriter fw=new FileWriter("emp.xml");
    rs.writeXml(fw);
We can read XML data into RowSet as follows

    FileReader fr=new FileReader("emp.xml");
    rs.readXml(fr);



*/