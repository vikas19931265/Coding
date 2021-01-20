/*

Summary of All JDBC 5 Drivers
==============================================================================

    
Driver Type                  Required Jar File                   Driver Class Name                          JDBC URL

Type1                         No Jar file required              sun.jdbc.odbc.JdbcOdbcDriver            jdbc:odbc:demodsn

Type2                          ojdbc14.jar                        oracle.jdbc.driver.OracleDriver       jdbc:oracle:oci:@XE
                               ojdbc6.jar                         oracle.jdbc.OracleDriver
                               ojdbc7.jar

Type3                          jdk13drv.jar                      ids.sql.IDSDriver                      dbc:ids://localhost:12/conn?dsn=demosystemdsn3



Type4                          ojdbc14.jar                          oracle.jdbc.driver.OracleDriver     jdbc:oracle:thin:@localhost:1521:XE
                                                                    oracle.jdbc.OracleDriver
                               ojdbc6.jar
                               ojdbc7.jar


Type5                           oracle.jar                          com.ddtek.jdbc.oracle.OracleDriver      jdbc:datadirect:oracle://localhost:1521;ServiceName=XE


*/
