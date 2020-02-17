/*

Important Methods of ParameterMetaData:
==========================================

1. int getParameterCount()
============================

    Retrieves the number of parameters in the PreparedStatement object for which this
    ParameterMetaData object contains information.

2.int getParameterMode(int param)
======================================

Retrieves the designated parameter's mode that is whether parameter is IN or OUT parameter

3. int getParameterType(int param)
=============================================

Retrieves the designated parameter's SQL type.

4. String getParameterTypeName(int param)
===========================================

Retrieves the designated parameter's database-specific type name.

5. int getPrecision(int param)
=============================================

Retrieves the designated parameter's specified column size.

6. int getScale(int param)
============================================

Retrieves the designated parameter's number of digits to right of the decimal point.

7. int isNullable(int param)
============================================

Retrieves whether null values are allowed in the designated parameter.

8. boolean isSigned(int param)
============================================

Retrieves whether values for the designated parameter can be signed numbers.



*/