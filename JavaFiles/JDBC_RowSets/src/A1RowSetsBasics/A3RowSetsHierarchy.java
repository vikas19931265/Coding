package A1RowSetsBasics;

/*

RowSets Hierarchy
=========================

                                        ResultSet(I)
                                            |
                                            v
                                          RowSet(I)
                                            |
                                            v
        Connected Rowset-------------------------------------------------Disconnected Rowset                                              
                 |                                                              |                                          
                 v                                                              V
        JDBCRowSet                                                          CacheRowSet(I)         
                                                                                |
                                                                                v
                                                                             WebRowSet(I)   
                                                                                |   
                                                                  -------------------------------------
                                                                  |                                    | 
                                                                  V                                    V   
                                                              JoinRowSet(I)                         FilteredRowSet(I)   


*/