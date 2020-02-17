/*

Division-2:
=======================

Based on Cursor movement, ResultSets will be divided into the following 2 types.

1. Forward only (Non-Scrollable) ResultSet
2. Scrollable ResultSets

1. Forward Only ResultSets:
=================================

It allows the programmers to iterate records only in forward direction ie from top to bottom
sequentially.

By default every ResultSet is forward only.

We can specify explicitly ResultSet as Forward only by using the following constant of ResultSet
public static final int TYPE_FORWARD_ONLY ➔ 1003

2. Scrollable ResultSets:
=======================================

It allows the programmers to iterate in both forward and backward directions.
We can also jump to a particular position randomly, or relative to current position. Here we can
move to anywhere.

There are two types of Scrollable ResultSets.
1. Scroll Insensitive ResultSet
2. Scroll Sensitive ResultSet


    1. Scroll Insensitive ResultSet:    
    =========================================

After getting ResultSet if we are performing any change in Database and if those changes are not
reflecting to the ResultSet, such type of ResultSets are called scroll insensitive ResultSets.
i.e ResultSet is insensitive to database operations.

We can specify explicitly ResultSet as Scroll insensitive by using the following constant
public static final int TYPE_SCROLL_INSENSITIVE ➔ 1004

    2.Scroll sensitive ResultSets:
    =============================================

After getting the ResultSet if we perform any change in the database and if those changes are
visible to ResultSet, such type of ResultSet is called Scroll sensitive ResultSet.
i.e ResultSet is sensitive to database operations

We can specify explicitly ResultSet as scroll sensitive by using the following constant..
public static final int TYPE_SCROLL_SENSITIVE ➔ 1005


*/