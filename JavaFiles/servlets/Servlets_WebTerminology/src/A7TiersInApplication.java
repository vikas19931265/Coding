/*

Tiers in Application
========================

To design enterprise application, we need to define the degree of enterprise application, for this we
have to use system architectures.


1-Tier Architecture
2-Tier Architecture
--------------------
n-Tier Architecture


1-TIER ARCHITECTURE:
=========================

a. To design enterprise application if we use 1-tier architecture then we have to provide User Interface
   Layer, Business Processing Layer and Data Storage and Access Layer within a single machine.

b. 1-Tier architecture is highly recommended for standalone applications.
    
c. In 1-Tier architecture, a single machine we have to use to accommodate the complete application so
   that a single machine resources may not be sufficient to execute applications, it may reduce the
   performance of enterprise application.

d.1-Tier architecture will not provide any environment to handle multiple number requests, it is able to
  provide less sharability.


2-TIER ARCHITECTURE:
=============================

a. To design any enterprise application it is minimum to use 2-Tier architecture. The best example for
   2-Tier architecture is Client-Server architecture.

b. 2-Tier architecture will allow to design and execute the application in 2 layers of machines.

c. In case of 2-Tier architecture, tier-1 will manage User Interface Layer and tier-2 will manage
   Business Processing Layer and Data Storage and Access Layers.

d. 2-Tier architecture will provide loosely coupled design when compared with 1-Tier architecture.
   2-Tier architecture will provide very good environment to handle multiple number of requests and it
   is able to improve sharability.


NOTE: As part of the enterprise application development always it is suggestible to use Tiered
architectures because it will improve sharability, able to provide more loosely coupled design and so
on, but we should not increase number of tiers in enterprise applications without having the
requirement otherwise maintenance problems will be increased.



*/

