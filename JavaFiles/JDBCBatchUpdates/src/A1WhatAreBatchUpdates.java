/*

Batch Updates
=====================

Need of Batch Updates:
===========================

When we submit multiple SQL Queries to the database one by one then lot of time will be wasted
in request and response.

When we are trying to submit 1000 queries to the database one by one. For
submitting 1000 queries we need to communicate with the database 1000 times. It increases
network traffic between Java application and database and even creates performance problems
also.

To overcome these problems, we should go for Batch updates. We can group all related SQL
Queries into a single batch and we can send that batch at a time to the database.


Hence the main advantages of Batch updates are

1. We can reduce network traffic
2. We can improve performance.


We can implement batch updates by using the following two methods.

1. public void addBatch(String sqlQuery)
    To add query to batch

2. int[] executeBatch()
    to execute a batch of sql queries

We can implement batch updates either by simple Statement or by PreparedStatement




*/
