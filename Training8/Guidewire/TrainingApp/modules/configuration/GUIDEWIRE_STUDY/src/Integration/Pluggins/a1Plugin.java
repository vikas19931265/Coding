/*
Plugin
===========

Plugin is defined as the integration point with the external system.
We can find the plugin(.gwp) file in the path ..Configuration/config/Plugins/registry


Plugin basically contains the java/gosu code only in order to execute the application functionaliy.


Plugin code executes in the current transaction bundle. A plugin might be required to do the work on
itself or might interact with the other external systems. If a plugin retrieves data from the external system
then the integration point must be synchronous in nature. We have to take care of the network response time
when writing the plugin implemenations.


In some cases plugins may block the user to perform any further operations until the work is completed. In this case
end user should not work for too long. Pluggins should perform the work quickely and synchronously.

Imlemented Plugins behaviour pre existing in the claimcenter
===========================================================

1. User authentication
2. Geocoding.
3. Document production and storage.
4. Policy search in the claim center.
5. VIN search in the policy center

Plugin Application Scope
=============================

1. Internal to Guidewire

    Number generator plugin example

2. External System integration

    Authentication plugin example:  interacts with external system such as active directory, single sign on(SSO)

Plugin code languge
=======================

We can write the plugin implementation either in the java language or gosu language. But writing in the
gosu languge is preferred as it provides many advanced features like fast processing, native debugging etc.





*/