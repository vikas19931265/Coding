/*

Differnences between Forward only and Scrollable ResultSets
=============================================================

Non Scrollable (Forward only)                                                    Scrollable
==============================                                                  ==========================    
Cursor can move only in Forward                                                 Cursor can move in both Forward and backward direction.
Direction.


This Cursor can't move randomly.                                                Scrollable ResultSet Cursor can move
                                                                                randomly.

By using Non Scrollable ResultSet                                               Performance is high because cursor can move to any direction.
cursor if we want to move to nth record 
then n+1 iterations are required.


*/