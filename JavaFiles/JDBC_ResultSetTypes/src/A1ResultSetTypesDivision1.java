/*

ResultSet Types
Division-1:
=============================================================================

Based on operations performed on ResultSet, we can divide ResultSet into 2 types

1. Read Only ResultSets (Static ResultSets)
2. Updatable ResultSets (Dynamic ResultSets)

1.Read Only ResultSets:
=============================

We can perform only read operations on the ResultSet by using corresponding getter methods and
we cannot perform any updations.
By default ResultSet is Read Only.

We can specify explicitly ResultSet as Read only by using the following constant of ResultSet.
public static final int CONCUR_READ_ONLY ➔ 1007

2. Updatable ResultSets:
================================

The ResultSet which allows programmer to perform updations, such type of ResultSets are called
Updatable ResultSets.

In this case we can perform select, insert, delete and update operations.

We can specify ResultSet explicitly as Updatable by using the following constant of ResultSet.
public static final int CONCUR_UPDATABLE ➔ 1008


*/