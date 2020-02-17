/*

Differnences Between Scroll Insensitive And Scroll Sensitive ResultSets
========================================================================

Scroll Insensitive Scroll Sensitive                                                 Scroll Sensitive
======================================                                          ========================    
    
After getting ResultSet if we perform any                                       After getting ResultSet if we perform
updation in the DB then those updation are                                      any updation in DB then those updation are
not visible to the ResultSet i.e. ResultSet is                                  by default available to the ResultSet i.e
insensitive to DB updations.                                                    ResultSet is sensitive to DB updations.


As insensitive ResultSet is like snapshot of                                    A Sensitive ResultSet doesn't represent
Data in DB when Query will be executed.                                         snap shot of data. It contains pointers to 
                                                                                to rows of DB directly, which satisfy query condition.


Relatively Performance is High.                                                 Relatively Performance is low because for
                                                                                get Operation a Trip is required to DB.






*/