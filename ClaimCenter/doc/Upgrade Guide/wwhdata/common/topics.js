/*
 *   Title: TopicUtils-JavaScript.js
 *   
 *  JavaScript related to the TopicUtils code. This file gets COPIED into the output webworks files to support
 *  the link to this page code.
 */

 
// extracts the src=myfilename from the URL
function Guidewire_ExtractSrcFromURL() {
	var VarDocumentURL = window.WWHFrame.location;
	var TheParametersArray = VarDocumentURL.hash.split("&");
	var thisParam;
	var FMSourceFile = "UNKNOWN_FRAMEMAKER_SOURCE_FILE";

	k = TheParametersArray.length;
	for (i= 0 ; i < k; i++) {
	   thisParam = unescape(TheParametersArray[i]);
	   if (thisParam.search(/^src=/) != -1) {
		  FMSourceFile = thisParam.substring(4); // strip off the "src=" at the beginning
		}
	 }
	return FMSourceFile;
}

// takes a file name of format "myfilename.4.3" and gets the beginning part and returns "myfilename" only
function Guidewire_FMSourceFileExtract(FullFileName)
{
  var VarSplitURL= FullFileName.split(".");
  return VarSplitURL[0];
}

// is the src=myfile arg from the URL (which means it was from myfile.fm) match the desired file
// generally speaking we do not care since we just want it unique per book
// so we just say yes, but we say false if it's a special file that allows duplicates in one book
function Guidewire_FMSourceFileMatch(FROM_URL,LOCAL_FILENAME) {
	var varFileURL = FROM_URL.toLowerCase();
	var varFileActual = LOCAL_FILENAME.toLowerCase();

	// SPECIAL CASE FOR UPGRADE GUIDE PROCEDURES -- BASICALLY 
	if (varFileURL.search(/^procedure-/) != -1) {
	  if  (varFileActual.search(/^procedure-/) != -1)  { 
		  return (varFileURL == Guidewire_FMSourceFileExtract(varFileActual)); 
		} else { 
		 return false; 
	   }
	 }
	else {
	   // basically, the default is to say they match... 
	   // if it's one of these specially-handled files, just let it work  
	   return true; 
	}
}


// this function takes a topic Name and converts it to a simpler string, such as underscores instead of space chars
// This is also important because FrameMaker + ePubs's  native handling of topic alias names mirror this behavior
//
// IMPORTANT: IF YOU CHANGE THIS CODE IN CONTROLS.JS (IN TEMPLATE OVERRIDES), ALSO CHANGE THE MIRROR FUNCTION IN TOPICUTILS-JAVASCRIPT.JS
// IMPORTANT: IF YOU CHANGE THIS CODE IN TOPICUTILS.FSL, ALSO CHANGE THE MIRROR FUNCTION IN CONTROLS.JS (IN TEMPLATE OVERRIDES)
// THE CONTROLS.JS FUNCTION ENCODES THE URL, AND THIS FUNCTION ENCODES it and compares against the input string with the full name for each topic (potentially with funny characters)
function Guidewire_SafeTopicName(theTitle) {
theTitle = theTitle.replace(/ /g, "_");  // converts space char
theTitle = theTitle.replace(/\u00a0/g, "_");  // converts nbsp char
// censor (remove) characters that mess up epublisher in URLs: forward slash, backslash, question mark, &amp;
theTitle= theTitle.replace(/[\\\/\?]/g, "");
theTitle = theTitle.replace(/&/g, "");
theTitle = theTitle.replace(/\u201c/g, ""); // double quote smart L
theTitle = theTitle.replace(/\u201d/g, "");// double quote smart R
theTitle = theTitle.replace(/\u2018/g, "");// single quote smart L
theTitle = theTitle.replace(/\u2019/g, "");// single quote smart R
theTitle = theTitle.replace(/\u2022/g, "");// trademark
theTitle = theTitle.replace(/'/g, "");// apparently a dumb single quote gets stripped by webworks
theTitle = theTitle.replace(/"/g, "");// to be safe let us strip double quotes too
theTitle = theTitle.replace(/\</g, "(");  // open bracket
theTitle = theTitle.replace(/\>/g, ")");   // close bracket
theTitle = theTitle.replace(/:/g, "_");    // colon
theTitle = theTitle.replace(/&/g, "");
return (theTitle);  }




function Guidewire_TopicMatch(FROMEPUB,WHATTOMATCH) {
var varLower1 = FROMEPUB.toLowerCase();
var varLower2 = WHATTOMATCH.toLowerCase();
var varLower2Safe = Guidewire_SafeTopicName(varLower2)

// match positively if they naturally match, or they match the safe version (convert spaces to underscores...)
var varMatches = (varLower1 == varLower2 || varLower1 == Guidewire_SafeTopicName(varLower2))

// console.log(Guidewire_TopicMatch, varLower1, varLower2, varLower2Safe, varMatches)
return varMatches
}
function GUIDEWIRE_TOPIC_TO_FILE(TOPIC, SRCFILE) { 
if (Guidewire_TopicMatch(TOPIC,"cover")) return "index.html"

else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter\u00ae") && Guidewire_FMSourceFileMatch(SRCFILE,"cover-upgrade.html") ) { return "cover-upgrade.html";}
else if (Guidewire_TopicMatch(TOPIC,"About ClaimCenter Documentation") && Guidewire_FMSourceFileMatch(SRCFILE,"about.html") ) { return "about.html";}
else if (Guidewire_TopicMatch(TOPIC,"Planning the Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"part-basicupgrade.html") ) { return "part-basicupgrade.html";}
else if (Guidewire_TopicMatch(TOPIC,"Planning Your ClaimCenter Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"planning.04.1.html") ) { return "planning.04.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Supported Starting Version") && Guidewire_FMSourceFileMatch(SRCFILE,"planning.04.2.html") ) { return "planning.04.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Roadmap for Planning the Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"planning.04.3.html") ) { return "planning.04.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrade Assessment") && Guidewire_FMSourceFileMatch(SRCFILE,"planning.04.4.html") ) { return "planning.04.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Preparing for the Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"planning.04.5.html") ) { return "planning.04.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Project Inception") && Guidewire_FMSourceFileMatch(SRCFILE,"planning.04.6.html") ) { return "planning.04.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Design and Development") && Guidewire_FMSourceFileMatch(SRCFILE,"planning.04.7.html") ) { return "planning.04.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"System Test") && Guidewire_FMSourceFileMatch(SRCFILE,"planning.04.8.html") ) { return "planning.04.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Deployment and Support") && Guidewire_FMSourceFileMatch(SRCFILE,"planning.04.9.html") ) { return "planning.04.9.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading from 8.0.0") && Guidewire_FMSourceFileMatch(SRCFILE,"p-upgrade-e.html") ) { return "p-upgrade-e.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading the ClaimCenter 8.0.x Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.01.html") ) { return "procedure-config-e.06.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of ContactManager Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.02.html") ) { return "procedure-config-e.06.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Obtaining Configurations and Tools") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.03.html") ) { return "procedure-config-e.06.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating a Configuration Backup") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.04.html") ) { return "procedure-config-e.06.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Removing Patches and Hot Fixes") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.05.html") ) { return "procedure-config-e.06.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Updating Infrastructure") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.06.html") ) { return "procedure-config-e.06.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Launching the ClaimCenter 8.0.1 Configuration Upgrade Tool") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.07.html") ) { return "procedure-config-e.06.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuration Upgrade Tool Automated Steps") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.08.html") ) { return "procedure-config-e.06.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the ClaimCenter 8.0.1 Upgrade Tool Interface") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.09.html") ) { return "procedure-config-e.06.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuration Merging Guidelines") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.10.html") ) { return "procedure-config-e.06.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Data Model Merging Guidelines") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.11.html") ) { return "procedure-config-e.06.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Merging Display Properties") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.12.html") ) { return "procedure-config-e.06.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading Rules to ClaimCenter 8.0.1") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.13.html") ) { return "procedure-config-e.06.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Installing Language Modules") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.14.html") ) { return "procedure-config-e.06.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Translating New Display Properties and Typecodes") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.15.html") ) { return "procedure-config-e.06.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Modifying PCF files, Rules and Libraries for Unused Contact Subtypes") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.16.html") ) { return "procedure-config-e.06.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Validating the ClaimCenter 8.0.1 Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.17.html") ) { return "procedure-config-e.06.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Building and Deploying ClaimCenter 8.0.1") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-e.06.18.html") ) { return "procedure-config-e.06.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading the ClaimCenter 8.0.x Database") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.01.html") ) { return "procedure-db-e.07.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading Administration Data for Testing") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.02.html") ) { return "procedure-db-e.07.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Identifying Data Model Issues") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.03.html") ) { return "procedure-db-e.07.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Verifying Batch Process and Work Queue Completion") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.04.html") ) { return "procedure-db-e.07.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Purging Data Prior to Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.05.html") ) { return "procedure-db-e.07.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reassign Data for Inactive Users") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.06.html") ) { return "procedure-db-e.07.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Validating the Database Schema") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.07.html") ) { return "procedure-db-e.07.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Checking Database Consistency") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.08.html") ) { return "procedure-db-e.07.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating a Data Distribution Report") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.09.html") ) { return "procedure-db-e.07.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Generating Database Statistics") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.10.html") ) { return "procedure-db-e.07.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating a Database Backup") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.11.html") ) { return "procedure-db-e.07.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Updating Database Infrastructure") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.12.html") ) { return "procedure-db-e.07.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Preparing the Database for Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.13.html") ) { return "procedure-db-e.07.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting Linguistic Search Collation") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.14.html") ) { return "procedure-db-e.07.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the IDatamodelUpgrade Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.15.html") ) { return "procedure-db-e.07.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Disabling the Scheduler") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.16.html") ) { return "procedure-db-e.07.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Suspending Message Destinations") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.17.html") ) { return "procedure-db-e.07.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring the Database Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.18.html") ) { return "procedure-db-e.07.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Starting the Server to Begin Automatic Database Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.19.html") ) { return "procedure-db-e.07.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"Viewing Detailed Database Upgrade Information") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.20.html") ) { return "procedure-db-e.07.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"Dropping Unused Columns on Oracle") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.21.html") ) { return "procedure-db-e.07.21.html";}
else if (Guidewire_TopicMatch(TOPIC,"Exporting Administration Data for Testing") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.22.html") ) { return "procedure-db-e.07.22.html";}
else if (Guidewire_TopicMatch(TOPIC,"Final Steps After The Database Upgrade is Complete") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-e.07.23.html") ) { return "procedure-db-e.07.23.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading ClaimCenter from 8.0.x for ContactManager") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-core-app-cm-e.08.1.html") ) { return "upgrade-core-app-cm-e.08.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Manually Upgrading ClaimCenter to Integrate with ContactManager") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-core-app-cm-e.08.2.html") ) { return "upgrade-core-app-cm-e.08.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"File and PCF Changes in ClaimCenter Related to ContactManager") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-core-app-cm-e.08.3.html") ) { return "upgrade-core-app-cm-e.08.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading ContactManager from 8.0.x") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-cm-e.09.1.html") ) { return "upgrade-cm-e.09.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Manually Upgrading the ContactManager Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-cm-e.09.2.html") ) { return "upgrade-cm-e.09.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading from 7.0.x") && Guidewire_FMSourceFileMatch(SRCFILE,"p-upgrade-d.html") ) { return "p-upgrade-d.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading the ClaimCenter 7.0.x Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.01.html") ) { return "procedure-config-d.11.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of ContactManager Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.02.html") ) { return "procedure-config-d.11.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Obtaining Configurations and Tools") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.03.html") ) { return "procedure-config-d.11.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating a Configuration Backup") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.04.html") ) { return "procedure-config-d.11.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Removing Patches and Hot Fixes") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.05.html") ) { return "procedure-config-d.11.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Updating Infrastructure") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.06.html") ) { return "procedure-config-d.11.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Uninstalling Language Modules") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.07.html") ) { return "procedure-config-d.11.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Launching the ClaimCenter 8.0.1 Configuration Upgrade Tool") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.08.html") ) { return "procedure-config-d.11.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuration Upgrade Tool Automated Steps") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.09.html") ) { return "procedure-config-d.11.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the ClaimCenter 8.0.1 Upgrade Tool Interface") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.10.html") ) { return "procedure-config-d.11.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuration Merging Guidelines") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.11.html") ) { return "procedure-config-d.11.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Data Model Merging Guidelines") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.12.html") ) { return "procedure-config-d.11.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to the Logging API") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.13.html") ) { return "procedure-config-d.11.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Merging Auto Death Benefit and Auto Disability Benefit") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.14.html") ) { return "procedure-config-d.11.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding DDL Configuration Options to database-config.xml") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.15.html") ) { return "procedure-config-d.11.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Merging Changes to Field Validators") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.16.html") ) { return "procedure-config-d.11.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Renaming PCF files According to Their Modes") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.17.html") ) { return "procedure-config-d.11.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using ReserveLineInputSet in Payment and Recovery Screens") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.18.html") ) { return "procedure-config-d.11.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reviewing Replacement of Fields and Roles with Service Requests") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.19.html") ) { return "procedure-config-d.11.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reviewing Change to Aggregate Limits Screen") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.20.html") ) { return "procedure-config-d.11.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"Merging Display Properties") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.21.html") ) { return "procedure-config-d.11.21.html";}
else if (Guidewire_TopicMatch(TOPIC,"Merging Other Files") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.22.html") ) { return "procedure-config-d.11.22.html";}
else if (Guidewire_TopicMatch(TOPIC,"Fixing Gosu Case-Sensitivity and Equality Operator Issues") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.23.html") ) { return "procedure-config-d.11.23.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading Rules to ClaimCenter 8.0.1") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.24.html") ) { return "procedure-config-d.11.24.html";}
else if (Guidewire_TopicMatch(TOPIC,"Installing Language Modules") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.25.html") ) { return "procedure-config-d.11.25.html";}
else if (Guidewire_TopicMatch(TOPIC,"Translating New Display Properties and Typecodes") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.26.html") ) { return "procedure-config-d.11.26.html";}
else if (Guidewire_TopicMatch(TOPIC,"Modifying PCF files, Rules and Libraries for Unused Contact Subtypes") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.27.html") ) { return "procedure-config-d.11.27.html";}
else if (Guidewire_TopicMatch(TOPIC,"Validating the ClaimCenter 8.0.1 Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.28.html") ) { return "procedure-config-d.11.28.html";}
else if (Guidewire_TopicMatch(TOPIC,"Building and Deploying ClaimCenter 8.0.1") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-d.11.29.html") ) { return "procedure-config-d.11.29.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading the ClaimCenter 7.0.x Database") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.01.html") ) { return "procedure-db-d.12.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading Administration Data for Testing") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.02.html") ) { return "procedure-db-d.12.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Identifying Data Model Issues") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.03.html") ) { return "procedure-db-d.12.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Verifying Batch Process and Work Queue Completion") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.04.html") ) { return "procedure-db-d.12.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Purging Data Prior to Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.05.html") ) { return "procedure-db-d.12.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reassign Data for Inactive Users") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.06.html") ) { return "procedure-db-d.12.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Validating the Database Schema") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.07.html") ) { return "procedure-db-d.12.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Checking Database Consistency") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.08.html") ) { return "procedure-db-d.12.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating a Data Distribution Report") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.09.html") ) { return "procedure-db-d.12.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Generating Database Statistics") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.10.html") ) { return "procedure-db-d.12.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating a Database Backup") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.11.html") ) { return "procedure-db-d.12.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Updating Database Infrastructure") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.12.html") ) { return "procedure-db-d.12.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Preparing the Database for Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.13.html") ) { return "procedure-db-d.12.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting Linguistic Search Collation") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.14.html") ) { return "procedure-db-d.12.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the IDatamodelUpgrade Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.15.html") ) { return "procedure-db-d.12.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Disabling the Scheduler") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.16.html") ) { return "procedure-db-d.12.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Suspending Message Destinations") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.17.html") ) { return "procedure-db-d.12.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring the Database Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.18.html") ) { return "procedure-db-d.12.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Starting the Server to Begin Automatic Database Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.19.html") ) { return "procedure-db-d.12.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"Viewing Detailed Database Upgrade Information") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.20.html") ) { return "procedure-db-d.12.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"Dropping Unused Columns on Oracle") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.21.html") ) { return "procedure-db-d.12.21.html";}
else if (Guidewire_TopicMatch(TOPIC,"Exporting Administration Data for Testing") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.22.html") ) { return "procedure-db-d.12.22.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading Phone Numbers") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.23.html") ) { return "procedure-db-d.12.23.html";}
else if (Guidewire_TopicMatch(TOPIC,"Final Steps After The Database Upgrade is Complete") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-d.12.24.html") ) { return "procedure-db-d.12.24.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading ClaimCenter from 7.0.x for ContactManager") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-core-app-cm-d.13.1.html") ) { return "upgrade-core-app-cm-d.13.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuration File Changes in ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-core-app-cm-d.13.2.html") ) { return "upgrade-core-app-cm-d.13.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Manually Upgrading ClaimCenter to Integrate with ContactManager") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-core-app-cm-d.13.3.html") ) { return "upgrade-core-app-cm-d.13.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading ContactManager from 7.0.x") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-cm-d.14.1.html") ) { return "upgrade-cm-d.14.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Database Upgrade Steps in ContactManager") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-cm-d.14.2.html") ) { return "upgrade-cm-d.14.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuration File Changes in ContactManager") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-cm-d.14.3.html") ) { return "upgrade-cm-d.14.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading from 6.0.x") && Guidewire_FMSourceFileMatch(SRCFILE,"part-basicupgrade_2.html") ) { return "part-basicupgrade_2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading the ClaimCenter 6.0.x Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.01.html") ) { return "procedure-config-c.16.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of ContactManager Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.02.html") ) { return "procedure-config-c.16.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Obtaining Configurations") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.03.html") ) { return "procedure-config-c.16.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating a Configuration Backup") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.04.html") ) { return "procedure-config-c.16.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Removing Patches and Hot Fixes") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.05.html") ) { return "procedure-config-c.16.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Updating Infrastructure") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.06.html") ) { return "procedure-config-c.16.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading the ClaimCenter 6.0 Configuration to 7.0") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.07.html") ) { return "procedure-config-c.16.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter 7.0 Upgrade Tool Automated Steps") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.08.html") ) { return "procedure-config-c.16.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring the ClaimCenter 8.0 Upgrade Tool") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.09.html") ) { return "procedure-config-c.16.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Launching the ClaimCenter 8.0 Configuration Upgrade Tool") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.10.html") ) { return "procedure-config-c.16.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter 8.0.1 Configuration Upgrade Tool Automated Steps") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.11.html") ) { return "procedure-config-c.16.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the ClaimCenter 8.0.1 Upgrade Tool Interface") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.12.html") ) { return "procedure-config-c.16.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuration Merging Guidelines") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.13.html") ) { return "procedure-config-c.16.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Data Model Merging Guidelines") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.14.html") ) { return "procedure-config-c.16.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to the Logging API") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.15.html") ) { return "procedure-config-c.16.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Merging Files Related to ContactManager Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.16.html") ) { return "procedure-config-c.16.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Merging Contact Entities That Have Foreign Key or Array Extensions") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.17.html") ) { return "procedure-config-c.16.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Lines of Business") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.18.html") ) { return "procedure-config-c.16.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Risk Units") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.19.html") ) { return "procedure-config-c.16.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"Description Field for Risk Units") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.20.html") ) { return "procedure-config-c.16.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"Linking Lienholders to Location-based Risk Units") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.21.html") ) { return "procedure-config-c.16.21.html";}
else if (Guidewire_TopicMatch(TOPIC,"Capturing Location-based Risks Other than Buildings") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.22.html") ) { return "procedure-config-c.16.22.html";}
else if (Guidewire_TopicMatch(TOPIC,"Merging Customized EditableReservesLV PCF Files") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.23.html") ) { return "procedure-config-c.16.23.html";}
else if (Guidewire_TopicMatch(TOPIC,"Updating Customized Check Wizard") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.24.html") ) { return "procedure-config-c.16.24.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to ClaimInfoSearchView Entity") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.25.html") ) { return "procedure-config-c.16.25.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to Iterators in PCF Files") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.26.html") ) { return "procedure-config-c.16.26.html";}
else if (Guidewire_TopicMatch(TOPIC,"Updating Namespace on Files Loaded by GX Models") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.27.html") ) { return "procedure-config-c.16.27.html";}
else if (Guidewire_TopicMatch(TOPIC,"Changes to HistoryType Typelist") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.28.html") ) { return "procedure-config-c.16.28.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding DDL Configuration Options to database-config.xml") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.29.html") ) { return "procedure-config-c.16.29.html";}
else if (Guidewire_TopicMatch(TOPIC,"Merging Changes to Field Validators") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.30.html") ) { return "procedure-config-c.16.30.html";}
else if (Guidewire_TopicMatch(TOPIC,"Renaming PCF files According to Their Modes") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.31.html") ) { return "procedure-config-c.16.31.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using ReserveLineInputSet in Payment and Recovery Screens") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.32.html") ) { return "procedure-config-c.16.32.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reviewing Replacement of Fields and Roles with Service Requests") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.33.html") ) { return "procedure-config-c.16.33.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reviewing Change to Aggregate Limits Screen") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.34.html") ) { return "procedure-config-c.16.34.html";}
else if (Guidewire_TopicMatch(TOPIC,"Merging compatibility-xsd.xml") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.35.html") ) { return "procedure-config-c.16.35.html";}
else if (Guidewire_TopicMatch(TOPIC,"Merging Display Properties") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.36.html") ) { return "procedure-config-c.16.36.html";}
else if (Guidewire_TopicMatch(TOPIC,"Merging Other Files") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.37.html") ) { return "procedure-config-c.16.37.html";}
else if (Guidewire_TopicMatch(TOPIC,"Fixing Gosu Case-Sensitivity and Equality Operator Issues") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.38.html") ) { return "procedure-config-c.16.38.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading Rules to ClaimCenter 8.0.1") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.39.html") ) { return "procedure-config-c.16.39.html";}
else if (Guidewire_TopicMatch(TOPIC,"Running PCF Iterator Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.40.html") ) { return "procedure-config-c.16.40.html";}
else if (Guidewire_TopicMatch(TOPIC,"Installing Language Modules") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.41.html") ) { return "procedure-config-c.16.41.html";}
else if (Guidewire_TopicMatch(TOPIC,"Translating New Display Properties and Typecodes") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.42.html") ) { return "procedure-config-c.16.42.html";}
else if (Guidewire_TopicMatch(TOPIC,"Modifying PCF files, Rules and Libraries for Unused Contact Subtypes") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.43.html") ) { return "procedure-config-c.16.43.html";}
else if (Guidewire_TopicMatch(TOPIC,"Validating the ClaimCenter 8.0.1 Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.44.html") ) { return "procedure-config-c.16.44.html";}
else if (Guidewire_TopicMatch(TOPIC,"Building and Deploying ClaimCenter 8.0.1") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-config-c.16.45.html") ) { return "procedure-config-c.16.45.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading the ClaimCenter 6.0.x Database") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.01.html") ) { return "procedure-db-c.17.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading Administration Data for Testing") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.02.html") ) { return "procedure-db-c.17.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Identifying Data Model Issues") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.03.html") ) { return "procedure-db-c.17.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Verifying Batch Process and Work Queue Completion") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.04.html") ) { return "procedure-db-c.17.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Purging Data Prior to Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.05.html") ) { return "procedure-db-c.17.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reassign Data for Inactive Users") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.06.html") ) { return "procedure-db-c.17.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Validating the Database Schema") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.07.html") ) { return "procedure-db-c.17.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Checking Database Consistency") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.08.html") ) { return "procedure-db-c.17.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating a Data Distribution Report") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.09.html") ) { return "procedure-db-c.17.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Generating Database Statistics") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.10.html") ) { return "procedure-db-c.17.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating a Database Backup") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.11.html") ) { return "procedure-db-c.17.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Updating Database Infrastructure") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.12.html") ) { return "procedure-db-c.17.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Preparing the Database for Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.13.html") ) { return "procedure-db-c.17.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating Extensions to Preserve Coverage Term Fields") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.14.html") ) { return "procedure-db-c.17.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Enabling Migration to 64-bit IDs (SQL Server Only)") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.15.html") ) { return "procedure-db-c.17.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting Linguistic Search Collation") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.16.html") ) { return "procedure-db-c.17.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the IDatamodelUpgrade Plugin") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.17.html") ) { return "procedure-db-c.17.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Disabling the Scheduler") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.18.html") ) { return "procedure-db-c.17.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Suspending Message Destinations") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.19.html") ) { return "procedure-db-c.17.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring the Database Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.20.html") ) { return "procedure-db-c.17.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"Starting the Server to Begin Automatic Database Upgrade") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.21.html") ) { return "procedure-db-c.17.21.html";}
else if (Guidewire_TopicMatch(TOPIC,"Viewing Detailed Database Upgrade Information") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.22.html") ) { return "procedure-db-c.17.22.html";}
else if (Guidewire_TopicMatch(TOPIC,"Dropping Unused Columns on Oracle") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.23.html") ) { return "procedure-db-c.17.23.html";}
else if (Guidewire_TopicMatch(TOPIC,"Exporting Administration Data for Testing") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.24.html") ) { return "procedure-db-c.17.24.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading Phone Numbers") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.25.html") ) { return "procedure-db-c.17.25.html";}
else if (Guidewire_TopicMatch(TOPIC,"Final Steps After The Database Upgrade is Complete") && Guidewire_FMSourceFileMatch(SRCFILE,"procedure-db-c.17.26.html") ) { return "procedure-db-c.17.26.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading ClaimCenter from 6.0.x for ContactManager") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-cc-cm-c.18.1.html") ) { return "upgrade-cc-cm-c.18.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuration File Changes") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-cc-cm-c.18.2.html") ) { return "upgrade-cc-cm-c.18.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Manually Upgrading ClaimCenter to Integrate with ContactManager") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-cc-cm-c.18.3.html") ) { return "upgrade-cc-cm-c.18.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading ContactManager from 6.0.x") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-cm-c.19.1.html") ) { return "upgrade-cm-c.19.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Database Upgrade Steps in ContactManager") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-cm-c.19.2.html") ) { return "upgrade-cm-c.19.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuration File Changes") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-cm-c.19.3.html") ) { return "upgrade-cm-c.19.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Manually Upgrading the ContactManager Configuration") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-cm-c.19.4.html") ) { return "upgrade-cm-c.19.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Upgrading Integrations and Gosu from 6.0.x") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-tasks-c.20.1.html") ) { return "upgrade-tasks-c.20.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Overview of Upgrading Integration Plugins and Code") && Guidewire_FMSourceFileMatch(SRCFILE,"upgrade-tasks-c.20.2.html") ) { return "upgrade-tasks-c.20.2.html";}
else { return("../wwhelp/topic_cannot_be_found.html"); } }

function  WWHBookData_MatchTopic(P)
{
var C=null;P=decodeURIComponent(decodeURIComponent(escape(P)));//workaround epub bug with UTF8 processing!
if (C) { return C } else { return GUIDEWIRE_TOPIC_TO_FILE(P,Guidewire_ExtractSrcFromURL());}
}
