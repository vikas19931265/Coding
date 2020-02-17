/*

RowIdLifetime:
===============================

-> It is an enum present in java.sql package

-> RowIdLifetime represents the life time of generated RowIds

-> The possible values for RowIdLifetime are

1. ROWID_UNSUPPORTED

    Indicates that DB won't provide support for RowIds

2. ROWID_VALID_FOREVER

    Indicates that life time is forever and unlimited

3. ROWID_VALID_SESSION
    
    Indicates that rowid applicable only for current session


4. ROWID_VALID_TRANSACTION

    Indicates that rowid is valid only for current transaction.

Note:
For oracle database it is  ROWID_VALID_FOREVER
But for MySQL database it is ROWID_UNSUPPORTED




*/