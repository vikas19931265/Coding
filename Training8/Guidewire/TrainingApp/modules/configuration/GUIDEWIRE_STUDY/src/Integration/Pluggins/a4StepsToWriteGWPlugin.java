/*

Steps to Implement Gosu plugins
===================================

Steps 1: Identify Gosu Plugin requirements
==================================================

1. What interfaces plugin must implement???

2. What methods are included in the plugin??

3. When are methods called??

4. What issues should you consider when implementing the plugin.

5. Does the plugin reference the third party jars.


Step 2 : Write Gosu plugin class
======================================

1. Create plugin class in the correct directory

  a. Create plugin class in package /gsrc
  b. Create a package in gsrc and add the plugin class inside it.
  c. Do not create the plugin in the in built gw package in the guidewire.

2. Implement the required interfaces.

  a. Depending upon the plugin requirement we have to implement the interface.
  b. This can be determined by the integration guide.


3. Replace method stubs with actual code.

  a. Implement the methods.

Steps 3: Create the plugin registry file
==========================================

1. Registry -----> New ----> Plugin

2. Specify name and select Interface

3a. Configure Gosu plugin

    a. Add plugin type
    b. specify class
    c. mark enabled
    d. define parameters


*/