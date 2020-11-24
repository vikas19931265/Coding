Instructions for installing the Guidewire Solr External Search (GSES) extension and running it under Tomcat.

These instructions assume that you install GSES in the directory <GWSOLR_HOME>, where <GWSOLR_HOME> = /opt/gwsolr on Linux or C:\opt\gwsolr on Windows.
If you intall GSES anywhere else, you must modify these instructions accordingly.

These instructions also assume that you are installing GSES for some arbitrary Guidewire app 'xx', so that the product prefix 'xx' is used in file names and directory prefixes.
If you are installing GSES for a specific Guidewire product, you must change the product prefix accordingly. For example, for PolicyCenter use the product prefix 'pc.' For
ClaimCenter use the product prefix 'cc.' And so on.

1.) Download and install the JDK.  (http://www.oracle.com/technetwork/java/javase/downloads/index.html)
2.) Download and install Tomcat.  (http://tomcat.apache.org/download-60.cgi)
3.) Copy the gwsolr archive file, xx-gwsolr.zip. to the directory <GWSOLR_HOME>/xx.
4.) Unzip the archive into the directory <GWSOLR_HOME>/xx:
5.) Copy the file <GWSOLR_HOME>/xx/xx-gwsolr.xml to the directory <TOMCAT_HOME>/conf/Catalina/localhost.
6.) WINDOWS ONLY
  a.) Edit <TOMCAT_HOME>/conf/Catalina/localhost/xx-gwsolr.xml file and add the drive specifier (e.g., C:) to the front of the docBase path.
  b.) Edit <GWSOLR_HOME>/xx/solr/solr.xml and add the drive specifier to the front of the instanceDir paths of each Solr core entry.
7.) (optional) The standard Solr port is 8983.  To make Solr available on this port through Tomcat:
  Edit <TOMCAT_HOME>/conf/server.xml and change the Connector port for HTTP/1.1 protocol (around line 69) from 8080 to 8983.
8.) Start Tomcat.
9.) Examine the log file <TOMCAT_HOME>/logs/catalina.out to make sure that GSES has started successfully
10.) Enter the following url in your browser to verify that you can access the Solr admin page for xx-gwsolr:

  http://<hostname>:8080/xx-gwsolr

  (or http://<hostname>:8983/xx-gwsolr if you changed the port in step 7, above)

You should be presented with links that allow you to navigate to the Admin page for all documents searchable in xx. On the Admin page, you should be able to toggle on the "Cores"
between the administrative interfaces for the various documents searchable in xx.

If you want to run GSES so that it can be accessed by a remote debugger, start Tomcat by running the following command:

  <TOMCAT_HOME>/bin/catalina.sh jpda start

You can then connect a remote debugging session through port 8000.