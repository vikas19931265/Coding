/*

Steps to insert Date value into Database:
============================================================

DB: create table users(name varchar2(10),dop date);

1. Read Date from the end user(in String form)
======================================================

System.out.println("Enter DOP(dd-mm-yyyy):");
String dop=sc.next();

2. Convert date from String form to java.util.Date form by using SimpleDateFormat object
========================================================================================

SDF sdf= new SDF("dd-MM-yyyy");
java.util.Date udate=sdf.parse(dop);

3. convert date from java.util.Date to java.sql.Date
=================================================================================

long l = udate.getTime();
java.sql.Date sdate=new java.sql.Date(l);


4. set sdate to query
================================================================================
pst.setDate(2,sdate);

                
                        End User provided Date (In String Form)
                                        |
                                        v
                                Use SimpleDateFormat parse()
                                        |
                                        v
                                    java.util.Date
                                        |
                                        v
                                    java.sql.Date
                                        |
                                        v    
                                  PS.setDate (1, sdate)
                                        |
                                        v
                                Database specific form



*/