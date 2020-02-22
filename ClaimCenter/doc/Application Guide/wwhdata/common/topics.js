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

else if (Guidewire_TopicMatch(TOPIC,"Guidewire ClaimCenter\u00ae") && Guidewire_FMSourceFileMatch(SRCFILE,"cover-app.html") ) { return "cover-app.html";}
else if (Guidewire_TopicMatch(TOPIC,"About ClaimCenter Documentation") && Guidewire_FMSourceFileMatch(SRCFILE,"about.html") ) { return "about.html";}
else if (Guidewire_TopicMatch(TOPIC,"Introduction") && Guidewire_FMSourceFileMatch(SRCFILE,"p_intro.html") ) { return "p_intro.html";}
else if (Guidewire_TopicMatch(TOPIC,"Introduction to ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"intro.html") ) { return "intro.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claims Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.01.html") ) { return "claimoverview.05.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Contents") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.02.html") ) { return "claimoverview.05.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Summary Screens") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.03.html") ) { return "claimoverview.05.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Activities") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.04.html") ) { return "claimoverview.05.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workplan Screen") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.05.html") ) { return "claimoverview.05.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Loss Details Screens") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.06.html") ) { return "claimoverview.05.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Incident Tracking") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.07.html") ) { return "claimoverview.05.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Exposures Screen") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.08.html") ) { return "claimoverview.05.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reinsurance Screen") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.09.html") ) { return "claimoverview.05.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Parties Involved Screens") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.10.html") ) { return "claimoverview.05.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy Screen") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.11.html") ) { return "claimoverview.05.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financials Screens") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.12.html") ) { return "claimoverview.05.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Claim Wizard") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.13.html") ) { return "claimoverview.05.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Notes Screen") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.14.html") ) { return "claimoverview.05.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Documents Screen") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.15.html") ) { return "claimoverview.05.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Plan of Action Screens") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.16.html") ) { return "claimoverview.05.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Services Screen") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.17.html") ) { return "claimoverview.05.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Litigation Menu Link") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.18.html") ) { return "claimoverview.05.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"History Screen") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.19.html") ) { return "claimoverview.05.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"FNOL Snapshot Screens") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.20.html") ) { return "claimoverview.05.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"Calendar Screens") && Guidewire_FMSourceFileMatch(SRCFILE,"claimoverview.05.21.html") ) { return "claimoverview.05.21.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter User Interface") && Guidewire_FMSourceFileMatch(SRCFILE,"p-ui.html") ) { return "p-ui.html";}
else if (Guidewire_TopicMatch(TOPIC,"Navigating ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"ui.07.1.html") ) { return "ui.07.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Logging in to ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"ui.07.2.html") ) { return "ui.07.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting Preferences") && Guidewire_FMSourceFileMatch(SRCFILE,"ui.07.3.html") ) { return "ui.07.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Viewing Statistics") && Guidewire_FMSourceFileMatch(SRCFILE,"ui.07.4.html") ) { return "ui.07.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Selecting International Settings in ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"ui.07.5.html") ) { return "ui.07.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Common Areas in the ClaimCenter User Interface") && Guidewire_FMSourceFileMatch(SRCFILE,"ui.07.6.html") ) { return "ui.07.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Tabs") && Guidewire_FMSourceFileMatch(SRCFILE,"ui.07.7.html") ) { return "ui.07.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Saving Your Work") && Guidewire_FMSourceFileMatch(SRCFILE,"ui.07.8.html") ) { return "ui.07.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Search") && Guidewire_FMSourceFileMatch(SRCFILE,"claim_search.08.1.html") ) { return "claim_search.08.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Simple Search") && Guidewire_FMSourceFileMatch(SRCFILE,"claim_search.08.2.html") ) { return "claim_search.08.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Advanced Search") && Guidewire_FMSourceFileMatch(SRCFILE,"claim_search.08.3.html") ) { return "claim_search.08.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Search by Contact") && Guidewire_FMSourceFileMatch(SRCFILE,"claim_search.08.4.html") ) { return "claim_search.08.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Search by Contact User Interface") && Guidewire_FMSourceFileMatch(SRCFILE,"claim_search.08.5.html") ) { return "claim_search.08.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Free-Text Search") && Guidewire_FMSourceFileMatch(SRCFILE,"claim_search.08.6.html") ) { return "claim_search.08.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"QuickJump") && Guidewire_FMSourceFileMatch(SRCFILE,"quickjump.09.1.html") ) { return "quickjump.09.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"QuickJump Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"quickjump.09.2.html") ) { return "quickjump.09.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring QuickJump") && Guidewire_FMSourceFileMatch(SRCFILE,"quickjump.09.3.html") ) { return "quickjump.09.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working With Claims") && Guidewire_FMSourceFileMatch(SRCFILE,"p-claims.html") ) { return "p-claims.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Creation") && Guidewire_FMSourceFileMatch(SRCFILE,"fnol.11.1.html") ) { return "fnol.11.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Claim Wizard Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"fnol.11.2.html") ) { return "fnol.11.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Claim Wizard Steps") && Guidewire_FMSourceFileMatch(SRCFILE,"fnol.11.3.html") ) { return "fnol.11.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"New Claim Wizard and the Lines of Business") && Guidewire_FMSourceFileMatch(SRCFILE,"fnol.11.4.html") ) { return "fnol.11.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Policies in Claims") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.01.html") ) { return "policy.12.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Verified and Unverified Policies") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.02.html") ) { return "policy.12.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Validating Policies") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.03.html") ) { return "policy.12.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Policies in ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.04.html") ) { return "policy.12.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Searching for Candidate Policies") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.05.html") ) { return "policy.12.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating an Unverified Policy") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.06.html") ) { return "policy.12.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Retrieving the Correct Policy") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.07.html") ) { return "policy.12.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Editing a Policy Copy in ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.08.html") ) { return "policy.12.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Refreshing the Policy Snapshot on a Claim") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.09.html") ) { return "policy.12.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Replacing a Policy on a Claim") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.10.html") ) { return "policy.12.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding Coverages to a Policy") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.11.html") ) { return "policy.12.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Policy Menu Links") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.12.html") ) { return "policy.12.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Verifying Coverage") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.13.html") ) { return "policy.12.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Aggregate Limits") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.14.html") ) { return "policy.12.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policies and the Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.15.html") ) { return "policy.12.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Policies and the Policy Administration System") && Guidewire_FMSourceFileMatch(SRCFILE,"policy.12.16.html") ) { return "policy.12.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Accounts and Service Tiers") && Guidewire_FMSourceFileMatch(SRCFILE,"account_handling.13.1.html") ) { return "account_handling.13.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Accounts") && Guidewire_FMSourceFileMatch(SRCFILE,"account_handling.13.2.html") ) { return "account_handling.13.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Account Manager Permissions") && Guidewire_FMSourceFileMatch(SRCFILE,"account_handling.13.3.html") ) { return "account_handling.13.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Accounts") && Guidewire_FMSourceFileMatch(SRCFILE,"account_handling.13.4.html") ) { return "account_handling.13.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Service Tiers") && Guidewire_FMSourceFileMatch(SRCFILE,"account_handling.13.5.html") ) { return "account_handling.13.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Special Handling") && Guidewire_FMSourceFileMatch(SRCFILE,"special_handling.14.1.html") ) { return "special_handling.14.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding Special Handling Instructions") && Guidewire_FMSourceFileMatch(SRCFILE,"special_handling.14.2.html") ) { return "special_handling.14.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim History") && Guidewire_FMSourceFileMatch(SRCFILE,"histories.15.1.html") ) { return "histories.15.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Content of a Claim History") && Guidewire_FMSourceFileMatch(SRCFILE,"histories.15.2.html") ) { return "histories.15.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Adding History Events") && Guidewire_FMSourceFileMatch(SRCFILE,"histories.15.3.html") ) { return "histories.15.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archiving") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.16.1.html") ) { return "archiving.16.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Preparations for Archiving") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.16.2.html") ) { return "archiving.16.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Archiving Item Writer Batch Process") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.16.3.html") ) { return "archiving.16.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claims and Claim Entities that are not Archived") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.16.4.html") ) { return "archiving.16.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Searching for Archived Claims") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.16.5.html") ) { return "archiving.16.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Retrieving Archived Claims") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.16.6.html") ) { return "archiving.16.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Purging Archived Claims") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.16.7.html") ) { return "archiving.16.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Claim Archiving") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.16.8.html") ) { return "archiving.16.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"More Information on Archiving") && Guidewire_FMSourceFileMatch(SRCFILE,"archiving.16.9.html") ) { return "archiving.16.9.html";}
else if (Guidewire_TopicMatch(TOPIC,"Validation") && Guidewire_FMSourceFileMatch(SRCFILE,"validation.17.1.html") ) { return "validation.17.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Field-level Validation") && Guidewire_FMSourceFileMatch(SRCFILE,"validation.17.2.html") ) { return "validation.17.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Validation Rules") && Guidewire_FMSourceFileMatch(SRCFILE,"validation.17.3.html") ) { return "validation.17.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Fraud") && Guidewire_FMSourceFileMatch(SRCFILE,"fraud.18.1.html") ) { return "fraud.18.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Fraud Detection Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"fraud.18.2.html") ) { return "fraud.18.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"How Rules Can Evaluate Risk Potential") && Guidewire_FMSourceFileMatch(SRCFILE,"fraud.18.3.html") ) { return "fraud.18.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"How Question Sets Evaluate Risk Potential") && Guidewire_FMSourceFileMatch(SRCFILE,"fraud.18.4.html") ) { return "fraud.18.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Evaluating the Special Investigations Score") && Guidewire_FMSourceFileMatch(SRCFILE,"fraud.18.5.html") ) { return "fraud.18.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the Special Investigation Details Screen") && Guidewire_FMSourceFileMatch(SRCFILE,"fraud.18.6.html") ) { return "fraud.18.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Assessments") && Guidewire_FMSourceFileMatch(SRCFILE,"assessments.19.1.html") ) { return "assessments.19.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Assessment Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"assessments.19.2.html") ) { return "assessments.19.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Assessments") && Guidewire_FMSourceFileMatch(SRCFILE,"assessments.19.3.html") ) { return "assessments.19.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Data Model for Assessments") && Guidewire_FMSourceFileMatch(SRCFILE,"assessments.19.4.html") ) { return "assessments.19.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Catastrophes and Disasters") && Guidewire_FMSourceFileMatch(SRCFILE,"catastrophes.20.1.html") ) { return "catastrophes.20.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Catastrophe Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"catastrophes.20.2.html") ) { return "catastrophes.20.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Catastrophes") && Guidewire_FMSourceFileMatch(SRCFILE,"catastrophes.20.3.html") ) { return "catastrophes.20.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Catastrophe Bulk Association") && Guidewire_FMSourceFileMatch(SRCFILE,"catastrophes.20.4.html") ) { return "catastrophes.20.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Associating a Claim with a Catastrophe") && Guidewire_FMSourceFileMatch(SRCFILE,"catastrophes.20.5.html") ) { return "catastrophes.20.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Catastrophe Dashboard") && Guidewire_FMSourceFileMatch(SRCFILE,"catastrophes.20.6.html") ) { return "catastrophes.20.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Service Provider Performance Reviews") && Guidewire_FMSourceFileMatch(SRCFILE,"serviceprovidermgmt.html") ) { return "serviceprovidermgmt.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Lines of Business") && Guidewire_FMSourceFileMatch(SRCFILE,"p-lobs.html") ) { return "p-lobs.html";}
else if (Guidewire_TopicMatch(TOPIC,"Homeowners Line of Business") && Guidewire_FMSourceFileMatch(SRCFILE,"homeowners.23.1.html") ) { return "homeowners.23.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Homeowners Screens") && Guidewire_FMSourceFileMatch(SRCFILE,"homeowners.23.2.html") ) { return "homeowners.23.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Homeowners Coverage Types") && Guidewire_FMSourceFileMatch(SRCFILE,"homeowners.23.3.html") ) { return "homeowners.23.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Personal Travel Line of Business") && Guidewire_FMSourceFileMatch(SRCFILE,"travel.24.1.html") ) { return "travel.24.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Personal Travel Insurance Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"travel.24.2.html") ) { return "travel.24.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with the Personal Travel Line of Business") && Guidewire_FMSourceFileMatch(SRCFILE,"travel.24.3.html") ) { return "travel.24.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Personal Travel Screens") && Guidewire_FMSourceFileMatch(SRCFILE,"travel.24.4.html") ) { return "travel.24.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Personal Travel Coverage Types") && Guidewire_FMSourceFileMatch(SRCFILE,"travel.24.5.html") ) { return "travel.24.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workers\u2019 Compensation Line of Business") && Guidewire_FMSourceFileMatch(SRCFILE,"workers_comp.25.1.html") ) { return "workers_comp.25.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workers\u2019 Compensation Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"workers_comp.25.2.html") ) { return "workers_comp.25.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workers\u2019 Compensation Screens") && Guidewire_FMSourceFileMatch(SRCFILE,"workers_comp.25.3.html") ) { return "workers_comp.25.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Compensability Decision") && Guidewire_FMSourceFileMatch(SRCFILE,"workers_comp.25.4.html") ) { return "workers_comp.25.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Finding Injured Workers") && Guidewire_FMSourceFileMatch(SRCFILE,"workers_comp.25.5.html") ) { return "workers_comp.25.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Jurisdictional Benefit Calculation Management") && Guidewire_FMSourceFileMatch(SRCFILE,"workers_comp.25.6.html") ) { return "workers_comp.25.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workers\u2019 Compensation Administration") && Guidewire_FMSourceFileMatch(SRCFILE,"workers_comp.25.7.html") ) { return "workers_comp.25.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Workers\u2019 Compensation Coverage Types") && Guidewire_FMSourceFileMatch(SRCFILE,"workers_comp.25.8.html") ) { return "workers_comp.25.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Additional Features of ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"p-components.html") ) { return "p-components.html";}
else if (Guidewire_TopicMatch(TOPIC,"Work Assignment") && Guidewire_FMSourceFileMatch(SRCFILE,"assignments.27.1.html") ) { return "assignments.27.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"How Assignment Models the Way a Carrier Distributes Work") && Guidewire_FMSourceFileMatch(SRCFILE,"assignments.27.2.html") ) { return "assignments.27.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Assignable Work") && Guidewire_FMSourceFileMatch(SRCFILE,"assignments.27.3.html") ) { return "assignments.27.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"How Work is Assigned") && Guidewire_FMSourceFileMatch(SRCFILE,"assignments.27.4.html") ) { return "assignments.27.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Assignment Methods") && Guidewire_FMSourceFileMatch(SRCFILE,"assignments.27.5.html") ) { return "assignments.27.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Queues") && Guidewire_FMSourceFileMatch(SRCFILE,"assignments.27.6.html") ) { return "assignments.27.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Weighted Workload") && Guidewire_FMSourceFileMatch(SRCFILE,"weighted_workload.28.1.html") ) { return "weighted_workload.28.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Weighted Workload Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"weighted_workload.28.2.html") ) { return "weighted_workload.28.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Weighted Workload Classifications") && Guidewire_FMSourceFileMatch(SRCFILE,"weighted_workload.28.3.html") ) { return "weighted_workload.28.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Calculating Weights") && Guidewire_FMSourceFileMatch(SRCFILE,"weighted_workload.28.4.html") ) { return "weighted_workload.28.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Weighted Workload Assignment") && Guidewire_FMSourceFileMatch(SRCFILE,"weighted_workload.28.5.html") ) { return "weighted_workload.28.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Viewing Weights") && Guidewire_FMSourceFileMatch(SRCFILE,"weighted_workload.28.6.html") ) { return "weighted_workload.28.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Segmentation") && Guidewire_FMSourceFileMatch(SRCFILE,"segmentations.29.1.html") ) { return "segmentations.29.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Automated Claim Setup") && Guidewire_FMSourceFileMatch(SRCFILE,"segmentations.29.2.html") ) { return "segmentations.29.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Segmentation Rules") && Guidewire_FMSourceFileMatch(SRCFILE,"segmentations.29.3.html") ) { return "segmentations.29.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Comparing Strategy to Segmentation") && Guidewire_FMSourceFileMatch(SRCFILE,"segmentations.29.4.html") ) { return "segmentations.29.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Uses of Segmentation") && Guidewire_FMSourceFileMatch(SRCFILE,"segmentations.29.5.html") ) { return "segmentations.29.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Activities") && Guidewire_FMSourceFileMatch(SRCFILE,"activities.30.1.html") ) { return "activities.30.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Activities Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"activities.30.2.html") ) { return "activities.30.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Viewing Activities") && Guidewire_FMSourceFileMatch(SRCFILE,"activities.30.3.html") ) { return "activities.30.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Activity Patterns") && Guidewire_FMSourceFileMatch(SRCFILE,"activities.30.4.html") ) { return "activities.30.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Activity Calendars") && Guidewire_FMSourceFileMatch(SRCFILE,"activities.30.5.html") ) { return "activities.30.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Activities and the Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"activities.30.6.html") ) { return "activities.30.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Email") && Guidewire_FMSourceFileMatch(SRCFILE,"email.31.1.html") ) { return "email.31.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Email in Claims") && Guidewire_FMSourceFileMatch(SRCFILE,"email.31.2.html") ) { return "email.31.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"How Emails are Sent") && Guidewire_FMSourceFileMatch(SRCFILE,"email.31.3.html") ) { return "email.31.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Incidents") && Guidewire_FMSourceFileMatch(SRCFILE,"incidents.32.1.html") ) { return "incidents.32.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Incident Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"incidents.32.2.html") ) { return "incidents.32.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Incidents, Exposures, and Claims") && Guidewire_FMSourceFileMatch(SRCFILE,"incidents.32.3.html") ) { return "incidents.32.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"The Incident Entity and Its Subtypes") && Guidewire_FMSourceFileMatch(SRCFILE,"incidents.32.4.html") ) { return "incidents.32.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating Incidents") && Guidewire_FMSourceFileMatch(SRCFILE,"incidents.32.5.html") ) { return "incidents.32.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Incident-Only Claims") && Guidewire_FMSourceFileMatch(SRCFILE,"incidents.32.6.html") ) { return "incidents.32.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Legal Matters") && Guidewire_FMSourceFileMatch(SRCFILE,"matters.33.1.html") ) { return "matters.33.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Legal Matters Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"matters.33.2.html") ) { return "matters.33.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Matters") && Guidewire_FMSourceFileMatch(SRCFILE,"matters.33.3.html") ) { return "matters.33.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"notes.34.1.html") ) { return "notes.34.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Differences Between Notes and Documents") && Guidewire_FMSourceFileMatch(SRCFILE,"notes.34.2.html") ) { return "notes.34.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"notes.34.3.html") ) { return "notes.34.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Notes Security") && Guidewire_FMSourceFileMatch(SRCFILE,"notes.34.4.html") ) { return "notes.34.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Notes and Note Templates") && Guidewire_FMSourceFileMatch(SRCFILE,"notes.34.5.html") ) { return "notes.34.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Holidays and Business Weeks") && Guidewire_FMSourceFileMatch(SRCFILE,"holidays.35.1.html") ) { return "holidays.35.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Specifying Holiday Dates") && Guidewire_FMSourceFileMatch(SRCFILE,"holidays.35.2.html") ) { return "holidays.35.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Holidays, Weekends, and Business Weeks") && Guidewire_FMSourceFileMatch(SRCFILE,"holidays.35.3.html") ) { return "holidays.35.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using Gosu Methods to Work with Holidays") && Guidewire_FMSourceFileMatch(SRCFILE,"holidays.35.4.html") ) { return "holidays.35.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Business Weeks and Business Hours") && Guidewire_FMSourceFileMatch(SRCFILE,"holidays.35.5.html") ) { return "holidays.35.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Holiday Permissions") && Guidewire_FMSourceFileMatch(SRCFILE,"holidays.35.6.html") ) { return "holidays.35.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Vacation Status") && Guidewire_FMSourceFileMatch(SRCFILE,"vacations.html") ) { return "vacations.html";}
else if (Guidewire_TopicMatch(TOPIC,"Question Sets") && Guidewire_FMSourceFileMatch(SRCFILE,"questionset.37.1.html") ) { return "questionset.37.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Service Provider Question Sets") && Guidewire_FMSourceFileMatch(SRCFILE,"questionset.37.2.html") ) { return "questionset.37.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Fraud Question Sets and Points") && Guidewire_FMSourceFileMatch(SRCFILE,"questionset.37.3.html") ) { return "questionset.37.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Question Sets") && Guidewire_FMSourceFileMatch(SRCFILE,"questionset.37.4.html") ) { return "questionset.37.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Question Set Entities") && Guidewire_FMSourceFileMatch(SRCFILE,"questionset.37.5.html") ) { return "questionset.37.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Subrogation") && Guidewire_FMSourceFileMatch(SRCFILE,"subrogations.38.1.html") ) { return "subrogations.38.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working With Subrogation") && Guidewire_FMSourceFileMatch(SRCFILE,"subrogations.38.2.html") ) { return "subrogations.38.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Enabling Subrogation") && Guidewire_FMSourceFileMatch(SRCFILE,"subrogations.38.3.html") ) { return "subrogations.38.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Subrogation Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"subrogations.38.4.html") ) { return "subrogations.38.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Financials") && Guidewire_FMSourceFileMatch(SRCFILE,"p-financials.html") ) { return "p-financials.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Financials") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.01.html") ) { return "financials.40.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financial Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.02.html") ) { return "financials.40.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Transactions") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.03.html") ) { return "financials.40.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reserves") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.04.html") ) { return "financials.40.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reserve Lines") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.05.html") ) { return "financials.40.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Payments") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.06.html") ) { return "financials.40.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Checks") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.07.html") ) { return "financials.40.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Electronic Funds Transfer (EFT)") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.08.html") ) { return "financials.40.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Recoveries and Recovery Reserves") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.09.html") ) { return "financials.40.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working With Transactions and Checks") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.10.html") ) { return "financials.40.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"How Transactions Affect Financial Values") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.11.html") ) { return "financials.40.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Lifecycles of Financial Objects") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.12.html") ) { return "financials.40.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Lifecycles of Transactions") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.13.html") ) { return "financials.40.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Lifecycles of Checks") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.14.html") ) { return "financials.40.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financial Holds") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.15.html") ) { return "financials.40.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Integration with External Financial Systems") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.16.html") ) { return "financials.40.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Financial Calculations") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.17.html") ) { return "financials.40.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financial Transactions Outside the User Interface") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.18.html") ) { return "financials.40.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financials Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.19.html") ) { return "financials.40.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"Transaction Business Rules") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.20.html") ) { return "financials.40.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"Financial Permissions and Authority Limits") && Guidewire_FMSourceFileMatch(SRCFILE,"financials.40.21.html") ) { return "financials.40.21.html";}
else if (Guidewire_TopicMatch(TOPIC,"Multiple Currencies") && Guidewire_FMSourceFileMatch(SRCFILE,"multicurrency.41.1.html") ) { return "multicurrency.41.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Multicurrency Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"multicurrency.41.2.html") ) { return "multicurrency.41.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Multicurrency Display") && Guidewire_FMSourceFileMatch(SRCFILE,"multicurrency.41.3.html") ) { return "multicurrency.41.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Multicurrency Reserving") && Guidewire_FMSourceFileMatch(SRCFILE,"multicurrency.41.4.html") ) { return "multicurrency.41.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Multicurrency Financial Summaries") && Guidewire_FMSourceFileMatch(SRCFILE,"multicurrency.41.5.html") ) { return "multicurrency.41.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Examples") && Guidewire_FMSourceFileMatch(SRCFILE,"multicurrency.41.6.html") ) { return "multicurrency.41.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Exchange Rates") && Guidewire_FMSourceFileMatch(SRCFILE,"multicurrency.41.7.html") ) { return "multicurrency.41.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Foreign Exchange Adjustments") && Guidewire_FMSourceFileMatch(SRCFILE,"multicurrency.41.8.html") ) { return "multicurrency.41.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Deductible Handling") && Guidewire_FMSourceFileMatch(SRCFILE,"deductible_handling.42.1.html") ) { return "deductible_handling.42.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Deductible Handling Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"deductible_handling.42.2.html") ) { return "deductible_handling.42.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Deductibles") && Guidewire_FMSourceFileMatch(SRCFILE,"deductible_handling.42.3.html") ) { return "deductible_handling.42.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Viewing Deductibles") && Guidewire_FMSourceFileMatch(SRCFILE,"deductible_handling.42.4.html") ) { return "deductible_handling.42.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Applying Deductibles") && Guidewire_FMSourceFileMatch(SRCFILE,"deductible_handling.42.5.html") ) { return "deductible_handling.42.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Editing Deductibles") && Guidewire_FMSourceFileMatch(SRCFILE,"deductible_handling.42.6.html") ) { return "deductible_handling.42.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Waiving Deductibles") && Guidewire_FMSourceFileMatch(SRCFILE,"deductible_handling.42.7.html") ) { return "deductible_handling.42.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting Up Deductibles") && Guidewire_FMSourceFileMatch(SRCFILE,"deductible_handling.42.8.html") ) { return "deductible_handling.42.8.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bulk Invoices") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.01.html") ) { return "bulkinvoice.43.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bulk Invoice Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.02.html") ) { return "bulkinvoice.43.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bulk Invoice Process Flow") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.03.html") ) { return "bulkinvoice.43.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using the Bulk Invoice Screens") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.04.html") ) { return "bulkinvoice.43.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Bulk Invoice Line Items") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.05.html") ) { return "bulkinvoice.43.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Stopping or Voiding a Bulk Invoice") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.06.html") ) { return "bulkinvoice.43.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bulk Invoice Validation") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.07.html") ) { return "bulkinvoice.43.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bulk Invoice Approval") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.08.html") ) { return "bulkinvoice.43.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Invoice Line Item Validation") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.09.html") ) { return "bulkinvoice.43.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bulk Invoice Checks") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.10.html") ) { return "bulkinvoice.43.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bulk Invoice Escalation") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.11.html") ) { return "bulkinvoice.43.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Lifecycle of a Bulk Invoice and its Line Items") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.12.html") ) { return "bulkinvoice.43.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bulk Invoice Events and Acknowledgements") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.13.html") ) { return "bulkinvoice.43.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bulk Invoices and Multicurrency") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.14.html") ) { return "bulkinvoice.43.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bulk Invoice Financial Permissions and Authority Limits") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.15.html") ) { return "bulkinvoice.43.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bulk Invoice Web Service API") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.16.html") ) { return "bulkinvoice.43.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Bulk Invoice Data Model") && Guidewire_FMSourceFileMatch(SRCFILE,"bulkinvoice.43.17.html") ) { return "bulkinvoice.43.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Services") && Guidewire_FMSourceFileMatch(SRCFILE,"p-services.html") ) { return "p-services.html";}
else if (Guidewire_TopicMatch(TOPIC,"Services") && Guidewire_FMSourceFileMatch(SRCFILE,"services.45.01.html") ) { return "services.45.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Services Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"services.45.02.html") ) { return "services.45.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating a Service Request") && Guidewire_FMSourceFileMatch(SRCFILE,"services.45.03.html") ) { return "services.45.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Viewing Service Requests") && Guidewire_FMSourceFileMatch(SRCFILE,"services.45.04.html") ) { return "services.45.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Promoting Service Requests") && Guidewire_FMSourceFileMatch(SRCFILE,"services.45.05.html") ) { return "services.45.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Canceling or Declining Service Requests") && Guidewire_FMSourceFileMatch(SRCFILE,"services.45.06.html") ) { return "services.45.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Assigning Service Requests") && Guidewire_FMSourceFileMatch(SRCFILE,"services.45.07.html") ) { return "services.45.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Service Request Documents") && Guidewire_FMSourceFileMatch(SRCFILE,"services.45.08.html") ) { return "services.45.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Making Payments") && Guidewire_FMSourceFileMatch(SRCFILE,"services.45.09.html") ) { return "services.45.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Lifecycle of a Service Request") && Guidewire_FMSourceFileMatch(SRCFILE,"services.45.10.html") ) { return "services.45.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Service Request Metrics") && Guidewire_FMSourceFileMatch(SRCFILE,"services.45.11.html") ) { return "services.45.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Service Requests") && Guidewire_FMSourceFileMatch(SRCFILE,"services.45.12.html") ) { return "services.45.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Management") && Guidewire_FMSourceFileMatch(SRCFILE,"p-management.html") ) { return "p-management.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Performance Monitoring") && Guidewire_FMSourceFileMatch(SRCFILE,"claim_perf_monitor.47.1.html") ) { return "claim_perf_monitor.47.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Health Metrics") && Guidewire_FMSourceFileMatch(SRCFILE,"claim_perf_monitor.47.2.html") ) { return "claim_perf_monitor.47.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Aggregated Metric Data") && Guidewire_FMSourceFileMatch(SRCFILE,"claim_perf_monitor.47.3.html") ) { return "claim_perf_monitor.47.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Summary") && Guidewire_FMSourceFileMatch(SRCFILE,"claim_perf_monitor.47.4.html") ) { return "claim_perf_monitor.47.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Claim Status Screen") && Guidewire_FMSourceFileMatch(SRCFILE,"claim_perf_monitor.47.5.html") ) { return "claim_perf_monitor.47.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Administering Metrics and Thresholds") && Guidewire_FMSourceFileMatch(SRCFILE,"claim_perf_monitor.47.6.html") ) { return "claim_perf_monitor.47.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Team Management") && Guidewire_FMSourceFileMatch(SRCFILE,"team.48.1.html") ) { return "team.48.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Team Management Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"team.48.2.html") ) { return "team.48.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"My Groups on the Team Tab") && Guidewire_FMSourceFileMatch(SRCFILE,"team.48.3.html") ) { return "team.48.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Groups on the Team Tab") && Guidewire_FMSourceFileMatch(SRCFILE,"team.48.4.html") ) { return "team.48.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Group Members on the Team Tab") && Guidewire_FMSourceFileMatch(SRCFILE,"team.48.5.html") ) { return "team.48.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Using Flags") && Guidewire_FMSourceFileMatch(SRCFILE,"team.48.6.html") ) { return "team.48.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Administering the Team Tab") && Guidewire_FMSourceFileMatch(SRCFILE,"team.48.7.html") ) { return "team.48.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"Dashboard") && Guidewire_FMSourceFileMatch(SRCFILE,"dashboard.html") ) { return "dashboard.html";}
else if (Guidewire_TopicMatch(TOPIC,"Integrations") && Guidewire_FMSourceFileMatch(SRCFILE,"p-key-integrations.html") ) { return "p-key-integrations.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Integration Points") && Guidewire_FMSourceFileMatch(SRCFILE,"key_integrations.html") ) { return "key_integrations.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy Administration System Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"pas.52.1.html") ) { return "pas.52.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Policy Administration System Integration Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"pas.52.2.html") ) { return "pas.52.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Retrieving a Policy in ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"pas.52.3.html") ) { return "pas.52.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Viewing Policies in a Policy Administration System (PAS)") && Guidewire_FMSourceFileMatch(SRCFILE,"pas.52.4.html") ) { return "pas.52.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Large Loss Notifications") && Guidewire_FMSourceFileMatch(SRCFILE,"pas.52.5.html") ) { return "pas.52.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Permissions for Working with Policies") && Guidewire_FMSourceFileMatch(SRCFILE,"pas.52.6.html") ) { return "pas.52.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Coverage Term Mapping Between ClaimCenter and PolicyCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"pas.52.7.html") ) { return "pas.52.7.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Contacts") && Guidewire_FMSourceFileMatch(SRCFILE,"contacts.53.1.html") ) { return "contacts.53.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Types of Contacts") && Guidewire_FMSourceFileMatch(SRCFILE,"contacts.53.2.html") ) { return "contacts.53.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"ContactManager Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"contacts.53.3.html") ) { return "contacts.53.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Contacts in ClaimCenter and ContactManager") && Guidewire_FMSourceFileMatch(SRCFILE,"contacts.53.4.html") ) { return "contacts.53.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Document Management") && Guidewire_FMSourceFileMatch(SRCFILE,"documents.54.1.html") ) { return "documents.54.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Document Security") && Guidewire_FMSourceFileMatch(SRCFILE,"documents.54.2.html") ) { return "documents.54.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Documents") && Guidewire_FMSourceFileMatch(SRCFILE,"documents.54.3.html") ) { return "documents.54.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Document Management") && Guidewire_FMSourceFileMatch(SRCFILE,"documents.54.4.html") ) { return "documents.54.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Document Management Integration") && Guidewire_FMSourceFileMatch(SRCFILE,"documents.54.5.html") ) { return "documents.54.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Metropolitan Reports") && Guidewire_FMSourceFileMatch(SRCFILE,"metro_reports.55.1.html") ) { return "metro_reports.55.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Metropolitan Reports Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"metro_reports.55.2.html") ) { return "metro_reports.55.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Metropolitan Reports") && Guidewire_FMSourceFileMatch(SRCFILE,"metro_reports.55.3.html") ) { return "metro_reports.55.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuring Metropolitan Reports") && Guidewire_FMSourceFileMatch(SRCFILE,"metro_reports.55.4.html") ) { return "metro_reports.55.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Metropolitan Report Workflow") && Guidewire_FMSourceFileMatch(SRCFILE,"metro_reports.55.5.html") ) { return "metro_reports.55.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO and Claims") && Guidewire_FMSourceFileMatch(SRCFILE,"iso.56.1.html") ) { return "iso.56.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"How ISO Interacts with Claims and Exposures") && Guidewire_FMSourceFileMatch(SRCFILE,"iso.56.2.html") ) { return "iso.56.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"How ISO Works with ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"iso.56.3.html") ) { return "iso.56.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"ISO Permissions") && Guidewire_FMSourceFileMatch(SRCFILE,"iso.56.4.html") ) { return "iso.56.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reinsurance Management") && Guidewire_FMSourceFileMatch(SRCFILE,"p-reinsurance.html") ) { return "p-reinsurance.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reinsurance Management Concepts") && Guidewire_FMSourceFileMatch(SRCFILE,"reinsurance-concepts.58.1.html") ) { return "reinsurance-concepts.58.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reinsurance General Overview") && Guidewire_FMSourceFileMatch(SRCFILE,"reinsurance-concepts.58.2.html") ) { return "reinsurance-concepts.58.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reinsurance Management in ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"reinsurance.59.1.html") ) { return "reinsurance.59.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Reinsurance in ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"reinsurance.59.2.html") ) { return "reinsurance.59.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Setting up Reinsurance Users and Groups") && Guidewire_FMSourceFileMatch(SRCFILE,"reinsurance.59.3.html") ) { return "reinsurance.59.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Reinsurance Agreements and Transactions") && Guidewire_FMSourceFileMatch(SRCFILE,"reinsurance.59.4.html") ) { return "reinsurance.59.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Marking a Claim as Reinsurance Reportable") && Guidewire_FMSourceFileMatch(SRCFILE,"reinsurance.59.5.html") ) { return "reinsurance.59.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Associating Claims") && Guidewire_FMSourceFileMatch(SRCFILE,"reinsurance.59.6.html") ) { return "reinsurance.59.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"ClaimCenter Administration") && Guidewire_FMSourceFileMatch(SRCFILE,"p-administering.html") ) { return "p-administering.html";}
else if (Guidewire_TopicMatch(TOPIC,"Users, Groups, and Regions") && Guidewire_FMSourceFileMatch(SRCFILE,"groups_users_queues.61.1.html") ) { return "groups_users_queues.61.1.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Groups") && Guidewire_FMSourceFileMatch(SRCFILE,"groups_users_queues.61.2.html") ) { return "groups_users_queues.61.2.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Users") && Guidewire_FMSourceFileMatch(SRCFILE,"groups_users_queues.61.3.html") ) { return "groups_users_queues.61.3.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Roles") && Guidewire_FMSourceFileMatch(SRCFILE,"groups_users_queues.61.4.html") ) { return "groups_users_queues.61.4.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Assignment Queues") && Guidewire_FMSourceFileMatch(SRCFILE,"groups_users_queues.61.5.html") ) { return "groups_users_queues.61.5.html";}
else if (Guidewire_TopicMatch(TOPIC,"Understanding Regions") && Guidewire_FMSourceFileMatch(SRCFILE,"groups_users_queues.61.6.html") ) { return "groups_users_queues.61.6.html";}
else if (Guidewire_TopicMatch(TOPIC,"Security: Roles, Permissions, and Access Controls") && Guidewire_FMSourceFileMatch(SRCFILE,"securityrole.62.01.html") ) { return "securityrole.62.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Role-Based Security") && Guidewire_FMSourceFileMatch(SRCFILE,"securityrole.62.02.html") ) { return "securityrole.62.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Data-based Security and Claim Access Control") && Guidewire_FMSourceFileMatch(SRCFILE,"securityrole.62.03.html") ) { return "securityrole.62.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Access Control for Documents and Notes") && Guidewire_FMSourceFileMatch(SRCFILE,"securityrole.62.04.html") ) { return "securityrole.62.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Access Control for Exposures") && Guidewire_FMSourceFileMatch(SRCFILE,"securityrole.62.05.html") ) { return "securityrole.62.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Working with Exposure Security") && Guidewire_FMSourceFileMatch(SRCFILE,"securityrole.62.06.html") ) { return "securityrole.62.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"User Login and Passwords") && Guidewire_FMSourceFileMatch(SRCFILE,"securityrole.62.07.html") ) { return "securityrole.62.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Security Dictionary") && Guidewire_FMSourceFileMatch(SRCFILE,"securityrole.62.08.html") ) { return "securityrole.62.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Configuration Files for Access Control Profiles") && Guidewire_FMSourceFileMatch(SRCFILE,"securityrole.62.09.html") ) { return "securityrole.62.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Security for Contacts") && Guidewire_FMSourceFileMatch(SRCFILE,"securityrole.62.10.html") ) { return "securityrole.62.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Administering ClaimCenter") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.01.html") ) { return "administration.63.01.html";}
else if (Guidewire_TopicMatch(TOPIC,"Personal Administration Settings and Views") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.02.html") ) { return "administration.63.02.html";}
else if (Guidewire_TopicMatch(TOPIC,"Administration Tab") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.03.html") ) { return "administration.63.03.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Accounts") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.04.html") ) { return "administration.63.04.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Users and Groups") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.05.html") ) { return "administration.63.05.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Activity Patterns") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.06.html") ) { return "administration.63.06.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Attributes") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.07.html") ) { return "administration.63.07.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Catastrophes") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.08.html") ) { return "administration.63.08.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Authority Limit Profiles") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.09.html") ) { return "administration.63.09.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Roles") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.10.html") ) { return "administration.63.10.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Regions") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.11.html") ) { return "administration.63.11.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Holidays") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.12.html") ) { return "administration.63.12.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Messages Queues") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.13.html") ) { return "administration.63.13.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Script Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.14.html") ) { return "administration.63.14.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Workflows") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.15.html") ) { return "administration.63.15.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Importing and Exporting Data") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.16.html") ) { return "administration.63.16.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Security Zones") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.17.html") ) { return "administration.63.17.html";}
else if (Guidewire_TopicMatch(TOPIC,"Creating and Managing Reference Tables") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.18.html") ) { return "administration.63.18.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Coverage Verification") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.19.html") ) { return "administration.63.19.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing WC Parameters") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.20.html") ) { return "administration.63.20.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Reinsurance Thresholds") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.21.html") ) { return "administration.63.21.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing ICD Codes") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.22.html") ) { return "administration.63.22.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Metrics and Thresholds") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.23.html") ) { return "administration.63.23.html";}
else if (Guidewire_TopicMatch(TOPIC,"Managing Business Weeks") && Guidewire_FMSourceFileMatch(SRCFILE,"administration.63.24.html") ) { return "administration.63.24.html";}
else { return("../wwhelp/topic_cannot_be_found.html"); } }

function  WWHBookData_MatchTopic(P)
{
var C=null;P=decodeURIComponent(decodeURIComponent(escape(P)));//workaround epub bug with UTF8 processing!
if(P=="Documents_and_Their_Management")C="documents.54.1.html";
if (C) { return C } else { return GUIDEWIRE_TOPIC_TO_FILE(P,Guidewire_ExtractSrcFromURL());}
}
