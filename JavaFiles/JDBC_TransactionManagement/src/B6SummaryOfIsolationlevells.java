/*

Summary Table of Isolation Levels
======================================


                                Is Dirty                             Is repeatalbe read problem prevented?            Is phantom read problem prevented?                
                                Problem
                                Prevented? 

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

TRANSACTION_READ_UNCOMMITTED       no                                      no                                                               no 

TRANSACTION_READ_                  yes                                     no                                                               no
COMMITTED


TRANSACTION_                       yes                                     yes                                                              no
REPEATABLE_READ


TRANSACTION_                       yes                                     yes                                                              yes 
SERIALIZABLE





*/