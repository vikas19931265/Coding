/*

ParameterMetaData (I):
==============================

It is an interface and present in java.sql package.

Driver Software vendor is responsible to provide implementation.

In General we can use positional parameters(?) while creating PreparedStatement object.

    PreparedStatement pst=con.prepareStatement("insert into employees values(?,?,?,?)");

We can use ParameterMetaData to get information about positional parameters like parameter
count,parameter mode, and parameter type etc...

We can get ParameterMetaData object by using getParameterMetaData() method of

        PreparedStatement interface.
        ParameterMetaData pmd=pst.getParameterMetaData();

Once we got ParameterMetaData object, we can call several methods on that object like

1. int getParameterCount()
2. int getParameterMode(int param)
3. int getParameterType(int param)
4. String getParameterTypeName(int param)





*/
