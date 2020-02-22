ClaimCenter8-General-5-8.0.1_en_US

This instance of ClaimCenter is identical to a base application instance, except for the following:

- Shortcuts in the ClaimCenter directory (C:\Guidewire\ClaimCenter)
	- There are shortcuts to start and stop ClaimCenter.
	- There is a shortcut to start ClaimCenter Studio.
- Studio
	- In database-config.xml, the H2 database files are stored in c:\Guidewire\ClaimCenter\db.
        (This ensures the database files are contained within the ClaimCenter directory.)
	- In config.xml:
		- EnableInternalDebugTools is set to true.
		- ArchiveEnabled is set to true.
		- DaysClosedBeforeArchive is set to 0.
		- EnableClaimantCoverageUniquenessConstraint is set to false.
		- PolicySystemURL is set to http://localhost:8180/pc
		- EnableMulticurrencyReserving is set to true
		- MulticurrencyDisplayMode is set to MULTIPLE
		- AllowDocumentAssistant is set to true
		- FreeTextSearchEnabled is set to true
	- In solrserver-config.xml
		- Solr is set to run in embedded operation
		- solrroot set to c:/Guidewire/ClaimCenter/opt/gwsolr (instead of c:/opt)
		
	- logging.properties
	- The ClaimCenter logs are stored in C:\Guidewire\ClaimCenter\logs.
        (This ensures the log files are contained within the ClaimCenter directory.)
- Generated files
	- The Data Dictionary has been generated (gwcc regen-dictionary command).

- ClaimCenter
	- The "catastrophe search" sample data set has been loaded.
	- Lucene Solr Free-Text search has been enabled and "Search by Contact" is available along with Simple and Advanced Search.
	A load of sample data has been batch loaded into the Solr index so that sample data is searchable using Lucene Solr.
	- The "training data" has been loaded. This consists of:
		- 20 student accounts added via a custom Gosu class (training.TrainingDataUtil), including ibelt, coworker, useradmin, etc.
		- The 20 Kevin Smith policies, which have been added to the PolicySearchPolicyGenerator class.
	- A "dbbackup" directory has a copy of the database as it exists at the start of the course (this simplifies the task of reloading the sample data after a dbdrop).
	- All database files in the running application are located in C:\Guidewire\<ProductName>\db. If you need to restore the database, restore the database to this db directory.
	- A "Claim Acknowledgement Letter" RTF (Rich Text Format) file has been created and associated with the 
	"Send claim acknowledgement letter" Activity Pattern for use in the CC AppConfig/AppIntegration demo.
	- Andy Applegate (aapplegate) and Betty Baker (bbaker) have their older Activities on the Desktop tab clicked
	on so they don't have the yellow star icon (as if they were new activities). Also to support the demo.
	- Two rulesets added and DISABLED: 

	1.	Claim Pre-Setup: CPR05000 - (DEMO) Create default auto exposures [makes sure you have exposure created after NCW]   
	2.	Claim Validation: CLV15000 - (DEMO) Require Driver License for Payment [Driver’s License number of driver in CA required before payment]

	- abedit permission has been *removed* from the Adjuster role.
	- CM (ContactManager) integration IS enabled. This integration will work with the CM 8.0.1 classroom installer (version # ContactManager8-General-3-8.0.1_en_US).
	- base.zip (in C:\Guidewire\ClaimCenter\modules) has been recreated to reflect all of the configuration changes in Studio described above. So, for example, if someone needs to use the base copy of config.xml they won't have to recreate all the changes above. To use base.zip, unzip (extract) it to 
