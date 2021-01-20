/*

Differences Between ResultSet and RowSet
==============================================

ResultSet                                                                                  RowSet
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

1. Result Set present in java.sql Package.                                          Row Set present in javax.sql Package.

2. By Default Result Set is Non Scrollable and                                      By Default Row Set is Scrollable and
Non Updatable (Forward only and Read only).                                         Updatable.

3) Result Set Objects are Non Serializable and                                      Row Set Objects are Serializable and hence
we can't send over Network.                                                         we can send over Network.

4) Result Set Objects are Connection oriented                                       Row Set Objects are Connection Less
i.e. we can access ResultSet Data as long as                                        Objects i.e. we can access RowSet Data        
Connection is available once Connection closed                                      without having Connection to DB (except
we cant accesss ResultSet data.                                                     JdbcRowSet)
                    
5) ResultSet Object is used to store Records                                        RowSet Object is also used to store Records
returned by Select Query.                                                           returned by Select Query.

6) We can createResultSet Object as follows                                         RowSetFactory rsf =RowSetProvider.newFactory();
Connection con = DriverManager.getConnection                                        JdbcRowSet rs = rsf.createJdbcRowSet();
(url, uname, pwd);                                                                  rs.setUserName(user);
Statement st = con.createStatement();                                               rs.setUrl(jdbcurl);
ResultSet rs = st.executeQuery(SQLQuery);                                           rs.setPassword(pwd);
                                                                                    rs.setCommand(query);
                                                                                    rs.execute();


7 ResultSet Object is not having Event                                             RowSet Object is having Event Notification model.
Notification Model. 



*/