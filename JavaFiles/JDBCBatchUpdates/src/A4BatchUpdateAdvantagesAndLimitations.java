/*

Advantages of Batch Updates:
===============================================================================


1. Network traffic will be reduced
2. Performance will be improved

Limitations of Batch updates:
================================================================================

1. We can use Batch Updates concept only for non-select queries. If we are trying to use for select
queries then we will get RE saying BatchUpdateException.

2. In batch if one sql query execution fails then remaining sql queries wont be executed.

*****Q: In JDBC How Many Execute Methods Are Avaialble?
===============================================================

In total there are 4 methods are available
1. executeQuery() ➔ For select queries
2. executeUpdate() ➔ For non-select queries(insert|delete|update)
3. execute()
        ➔ For both select and non-select queries
        ➔ For calling Stored Procedures
4. executeBatch()➔ For Batch Updates


*/