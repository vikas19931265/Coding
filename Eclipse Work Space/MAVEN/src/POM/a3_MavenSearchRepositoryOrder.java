/*
 Maven search repository order
 ==============================
 
 When we run MAVEN project then MAVEN will search for the dependencies in the following order.
 
1)  First, MAVEN will search for the  dependencies in local repository, if the required
dependencies are available at Local Repository the MAVEN will use them in application. If
the dependencies are not available at Local Repository then MAVEN search for them at
Central Repository.


2)  If the required Dependencies  are existed in central repository then MAVEN will load them
into Local Repository and MAVEN will use them in the applications. If the required
dependencies are not existed in Central Repository then MAVEN will search for them in
Remote Repositories as per configuration.


3)  If Remote Repository is not configured then MAVEN will stop the application execution and
generated some Exceptions.


4)  If Remote Repository is configured then MAVEN will search for the required dependencies
in Remote Repository, if they are identified then MAVEN will load them into Local
Repository for future reference. If the dependencies are not existed at Remote Repositories
then MAVEN will stop the execution and generate some Exceptions.
 
 */
