/*

Comparison Table of All JDBC Drivers
==========================================


Property            Type1                   Type2                     Type3                     Type4


Conversion         From JDBC to          From JDBC call to          From JDBC call to          From JDBC to database
                    ODBC calls          native library call         middleware server          specific calls
                                                                    specific calls

Implemented        Only in java          java+native library        Only in java               Only in java



Architecutre        2 tier              2 tier                      3 tier                      2 tier



Is it platform
independent         no                      no                      yes                         yes
                (odbc only for windows)
        

Is it database     yes                      no                      yes                          no 
independent



Is it thin or       thick               thick                       thick                       thin
thick driver



*/