/*

Modifiers
==========================

If we declare enum outside of the class then the applicable modifiers are

    public
    default
    strictfp

abstract and final are not allowed as by default enum is final in nature.

If we declare Enum inside the class then the applicable modifiers are

    public                  private
    default         +       protected
    strictfp                static


This is similar to the modifiers which are applicable in the inner class.

*/
