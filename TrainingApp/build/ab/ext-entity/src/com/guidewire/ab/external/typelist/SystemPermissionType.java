package com.guidewire.ab.external.typelist;

import java.util.Collection;
import java.util.Map;
import java.util.LinkedHashMap;
import gw.pl.external.typelist.TypeKey;
import gw.pl.external.i18n.ILocale;
import gw.pl.external.Invoker;

/**
 * 
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public class SystemPermissionType implements TypeKey, Comparable<SystemPermissionType> {
  /**
   * Permission to add a data change gosu program.
   */
  public static SystemPermissionType WSDATACHANGEEDIT;
  /**
   * Permission to administer integration events
   */
  public static SystemPermissionType INTEGADMIN;
  /**
   * Permission to run Guidewire Studio or import rules
   */
  public static SystemPermissionType RULEADMIN;
  /**
   * Permission to access all Internal Tools
   */
  public static SystemPermissionType INTERNALTOOLS;
  /**
   * Permission to archive objects
   */
  public static SystemPermissionType ARCHIVE;
  /**
   * Client Application (should not access via UI)
   */
  public static SystemPermissionType CLIENTAPP;
  /**
   * Permission to create a new contact in the address book
   */
  public static SystemPermissionType ABCREATE;
  /**
   * Permission to add a preferred vendor to the address book
   */
  public static SystemPermissionType ABCREATEPREF;
  /**
   * Permission to create a new contact regardless of which tag(s) it has
   */
  public static SystemPermissionType ANYTAGCREATE;
  /**
   * Permission to create groups
   */
  public static SystemPermissionType GROUPCREATE;
  /**
   * Permission to create an organization.
   */
  public static SystemPermissionType ORGCREATE;
  /**
   * Permission to create a new user
   */
  public static SystemPermissionType USERCREATE;
  /**
   * Permission to delete an existing contact in the address book
   */
  public static SystemPermissionType ABDELETE;
  /**
   * Permission to delete an existing preferred vendor address book entry
   */
  public static SystemPermissionType ABDELETEPREF;
  /**
   * Permission to delete a contact regardless of which tag(s) it has
   */
  public static SystemPermissionType ANYTAGDELETE;
  /**
   * Permission to delete groups
   */
  public static SystemPermissionType GROUPDELETE;
  /**
   * Permission to delete an organization.
   */
  public static SystemPermissionType ORGDELETE;
  /**
   * Permission to delete a user (Note: if a user has had any activity it's recommended to make them non-active rather than delete)
   */
  public static SystemPermissionType USERDELETE;
  /**
   * Permission to edit an existing contact in the address book
   */
  public static SystemPermissionType ABEDIT;
  /**
   * Permission to modify an existing preferred vendor address book entry
   */
  public static SystemPermissionType ABEDITPREF;
  /**
   * Permission to edit the BatchProcess Internal Tools page
   */
  public static SystemPermissionType TOOLSBATCHPROCESSEDIT;
  /**
   * Permission to edit the Cluster Internal Tools page
   */
  public static SystemPermissionType TOOLSCLUSTEREDIT;
  /**
   * Permission to edit the details of a contact regardless of which tag(s) it has
   */
  public static SystemPermissionType ANYTAGEDIT;
  /**
   * Permission to edit documents
   */
  public static SystemPermissionType DOCEDIT;
  /**
   * Permission to edit groups
   */
  public static SystemPermissionType GROUPEDIT;
  /**
   * Permission to edit the JProfiler Internal Tools page
   */
  public static SystemPermissionType TOOLSJPROFILEREDIT;
  /**
   * Permission to edit the Log Internal Tools page
   */
  public static SystemPermissionType TOOLSLOGEDIT;
  /**
   * Permission to edit the ManagementBeans presented on Internal Tools page
   */
  public static SystemPermissionType TOOLSJMXBEANSEDIT;
  /**
   * Permission to edit an organization's basic info.
   */
  public static SystemPermissionType ORGEDITBASIC;
  /**
   * Permission to edit the Profiler Internal Tools page
   */
  public static SystemPermissionType TOOLSPROFILEREDIT;
  /**
   * Permission to edit the StartablePlugin Internal Tools page
   */
  public static SystemPermissionType TOOLSPLUGINEDIT;
  /**
   * Permission to edit language
   */
  public static SystemPermissionType USEREDITLANG;
  /**
   * Permission to edit an existing user, except for roles, authority limits, or attributes
   */
  public static SystemPermissionType USEREDIT;
  /**
   * Permission to edit the WorkQueue Internal Tools page
   */
  public static SystemPermissionType TOOLSWORKQUEUEEDIT;
  /**
   * Permission to execute the data change.
   */
  public static SystemPermissionType ADMINDATACHANGEEXEC;
  /**
   * Permission to grant or revoke roles
   */
  public static SystemPermissionType USERGRANTROLES;
  /**
   * Permission to create, edit, or delete admin zones
   */
  public static SystemPermissionType ZONEMANAGE;
  /**
   * Permission to create, edit, or delete business week
   */
  public static SystemPermissionType BUSWKMANAGE;
  /**
   * Permission to create, edit, and delete regions
   */
  public static SystemPermissionType REGIONMANAGE;
  /**
   * Permission to create, edit, or delete roles
   */
  public static SystemPermissionType ROLEMANAGE;
  /**
   * Permission to create, edit, or delete script parameters
   */
  public static SystemPermissionType SCRPRMMANAGE;
  /**
   * Permission to view the ManageWorkflow page
   */
  public static SystemPermissionType WORKFLOWMANAGE;
  /**
   * Permission to purge objects from the database
   */
  public static SystemPermissionType PURGE;
  /**
   * Permission to resolve flag entries
   */
  public static SystemPermissionType FLAGENTRYRESOLVE;
  /**
   * Permission to resync message
   */
  public static SystemPermissionType RESYNCMESSAGE;
  /**
   * Permission to try to resend the failed message
   */
  public static SystemPermissionType RETRYMESSAGE;
  /**
   * Permission to search for organizations.
   */
  public static SystemPermissionType ORGSEARCH;
  /**
   * Permission to skip the failed message
   */
  public static SystemPermissionType SKIPMESSAGE;
  /**
   * Permission to use the SOAP APIs
   */
  public static SystemPermissionType SOAPADMIN;
  /**
   * Permission to search contact entries in the address book
   */
  public static SystemPermissionType ABVIEWSEARCH;
  /**
   * Permission to view the details of contact entries in the address book
   */
  public static SystemPermissionType ABVIEW;
  /**
   * Permission to view the list of admin zones
   */
  public static SystemPermissionType ZONEVIEW;
  /**
   * Permission to see users in all visible groups
   */
  public static SystemPermissionType USERVIEWALL;
  /**
   * Permission to access the BatchProcess Internal Tools page
   */
  public static SystemPermissionType TOOLSBATCHPROCESSVIEW;
  /**
   * Permission to view the list of business week
   */
  public static SystemPermissionType BUSWKVIEW;
  /**
   * Permission to view the CacheInfo Internal Tools page
   */
  public static SystemPermissionType TOOLSCACHEINFOVIEW;
  /**
   * Permission to access the Cluster Internal Tools page
   */
  public static SystemPermissionType TOOLSCLUSTERVIEW;
  /**
   * Permission to view the details of a contact regardless of which tag(s) it has
   */
  public static SystemPermissionType ANYTAGVIEW;
  /**
   * Permission to view the data change page.
   */
  public static SystemPermissionType ADMINDATACHANGEVIEW;
  /**
   * Permission to view the event messages page
   */
  public static SystemPermissionType EVENTMESSAGEVIEW;
  /**
   * Permission to see the user/group tree on the Administration tab
   */
  public static SystemPermissionType GROUPTREEVIEW;
  /**
   * Permission to view details of a group
   */
  public static SystemPermissionType GROUPVIEW;
  /**
   * Permission to access the Info Internal Tools page
   */
  public static SystemPermissionType TOOLSINFOVIEW;
  /**
   * Permission to access the Log Internal Tools page
   */
  public static SystemPermissionType TOOLSLOGVIEW;
  /**
   * Permission to access the ManagementBeans Internal Tools page
   */
  public static SystemPermissionType TOOLSJMXBEANSVIEW;
  /**
   * Permission to view the merge pages
   */
  public static SystemPermissionType ABVIEWMERGE;
  /**
   * Permission to view notes
   */
  public static SystemPermissionType NOTEVIEW;
  /**
   * Permission to view an organization's basic info.
   */
  public static SystemPermissionType ORGVIEWBASIC;
  /**
   * Permission to view the pending changes page
   */
  public static SystemPermissionType ABVIEWPENDING;
  /**
   * Permission to access the Profiler Internal Tools page
   */
  public static SystemPermissionType TOOLSPROFILERVIEW;
  /**
   * Permission to view the list of regions and region details
   */
  public static SystemPermissionType REGIONVIEW;
  /**
   * Permission to view the list of Reviews Summaries and the reviews tab on an ABContact
   */
  public static SystemPermissionType REVSUMVIEWLIST;
  /**
   * Permission view the Review Summary page to see the category scores for each summarized Review
   */
  public static SystemPermissionType REVSUMVIEWDETAIL;
  /**
   * Permission to view the list of roles and role details
   */
  public static SystemPermissionType ROLEVIEW;
  /**
   * Permission to view the list of script parameters or details of an individual script parameter
   */
  public static SystemPermissionType SCRPRMVIEW;
  /**
   * Permission to access the StartablePlugin Internal Tools page
   */
  public static SystemPermissionType TOOLSPLUGINVIEW;
  /**
   * Permission to view details of a user
   */
  public static SystemPermissionType USERVIEW;
  /**
   * Permission to view the Workflow page
   */
  public static SystemPermissionType WORKFLOWVIEW;
  /**
   * Permission to access the WorkQueue Internal Tools page
   */
  public static SystemPermissionType TOOLSWORKQUEUEVIEW;
  /**
   * Administer report server settings
   */
  public static SystemPermissionType REPORTING_ADMIN;
  /**
   * Permission to access debug tools, even when they are disabled by a configuration parameter
   */
  public static SystemPermissionType DEBUGTOOLS;
  /**
   * Permission to approve any approval activity even if the activity is assigned to someone else; the approver is still subject to authority limit restrictions
   */
  public static SystemPermissionType ACTAPPROVEANY;
  /**
   * Permission to create new activities
   */
  public static SystemPermissionType ACTCREATE;
  /**
   * Permission to create new activity patterns
   */
  public static SystemPermissionType ACTPATCREATE;
  /**
   * Permission to add documents
   */
  public static SystemPermissionType DOCCREATE;
  /**
   * Permission to create a new local contact
   */
  public static SystemPermissionType CTCCREATE;
  /**
   * Permission to add notes
   */
  public static SystemPermissionType NOTECREATE;
  /**
   * Permission to delete activity patterns
   */
  public static SystemPermissionType ACTPATDELETE;
  /**
   * Permission to remove documents
   */
  public static SystemPermissionType DOCDELETE;
  /**
   * Permission to remove notes
   */
  public static SystemPermissionType NOTEDELETE;
  /**
   * Permission to edit activity patterns
   */
  public static SystemPermissionType ACTPATEDIT;
  /**
   * Permission to edit an existing local contact
   */
  public static SystemPermissionType CTCEDIT;
  /**
   * Permission to edit the notes
   */
  public static SystemPermissionType NOTEEDIT;
  /**
   * Permission to edit the body of notes
   */
  public static SystemPermissionType NOTEEDITBODY;
  /**
   * Permission to modify (edit/skip/close) activities owned by other users
   */
  public static SystemPermissionType ACTEDITUNOWNED;
  /**
   * Permission to edit attributes for a user
   */
  public static SystemPermissionType USEREDITATTRS;
  /**
   * Permission to get the next activity off of a queue
   */
  public static SystemPermissionType ACTQUEUENEXT;
  /**
   * Permission to grant or change an authority limit for a user
   */
  public static SystemPermissionType USERGRANTAUTH;
  /**
   * Permission to set whether an activity is mandatory
   */
  public static SystemPermissionType ACTMAKEMAND;
  /**
   * Permission to create, edit, or delete user attributes
   */
  public static SystemPermissionType ATTRMANAGE;
  /**
   * Permission to create, edit, and delete holidays
   */
  public static SystemPermissionType HOLIDAYMANAGE;
  /**
   * Permission to modify the load factors on all users and groups
   */
  public static SystemPermissionType MANAGELDFCTRS;
  /**
   * Permission to create, edit, and delete security zones
   */
  public static SystemPermissionType SECZONEMANAGE;
  /**
   * Permission to edit or delete all documents, regardless of the permissions set on the individual documents
   */
  public static SystemPermissionType DOCMODIFYALL;
  /**
   * Permission to own an activity and to see the Desktop Activities page
   */
  public static SystemPermissionType ACTOWN;
  /**
   * Permission to pick an activity from a queue
   */
  public static SystemPermissionType ACTQUEUEPICK;
  /**
   * Permission to print listviews
   */
  public static SystemPermissionType LVPRINT;
  /**
   * Permission to reassign your own activities
   */
  public static SystemPermissionType ACTRAOWN;
  /**
   * Permission to reassign activities owned by other users
   */
  public static SystemPermissionType ACTRAUNOWN;
  /**
   * Permission to review and approve manually-approved assignables
   */
  public static SystemPermissionType ACTREVIEWASSIGN;
  /**
   * Permission to view activities
   */
  public static SystemPermissionType ACTVIEW;
  /**
   * Permission to view activity calendar of other users
   */
  public static SystemPermissionType VIEWACTCAL;
  /**
   * Permission to view the list of activity patterns or activity pattern details
   */
  public static SystemPermissionType ACTPATVIEW;
  /**
   * Permission to view all activity queues, even those in other security zones
   */
  public static SystemPermissionType ACTVIEWALLQUEUES;
  /**
   * Permission to view all documents, regardless of the permissions set on the individual documents
   */
  public static SystemPermissionType DOCVIEWALL;
  /**
   * Permission to view the list of user attributes or attribute details
   */
  public static SystemPermissionType ATTRVIEW;
  /**
   * Permission to view authority limit profiles
   */
  public static SystemPermissionType ALPVIEW;
  /**
   * Permission to view the Desktop
   */
  public static SystemPermissionType VIEWDESKTOP;
  /**
   * Permission to view documents
   */
  public static SystemPermissionType DOCVIEW;
  /**
   * Permission to view global workload statistics of other users
   */
  public static SystemPermissionType VIEWWORKLOAD;
  /**
   * Permission to view a list of holidays or holiday details
   */
  public static SystemPermissionType HOLIDAYVIEW;
  /**
   * Permission to view and search local contact entries
   */
  public static SystemPermissionType CTCVIEW;
  /**
   * Permission to view the Report tab, if the add-on reporting module is installed
   */
  public static SystemPermissionType REPORTING_VIEW;
  /**
   * Permission to view the Search tab
   */
  public static SystemPermissionType VIEWSEARCH;
  /**
   * Permission to view the Team tab
   */
  public static SystemPermissionType VIEWTEAM;
  private static final Map<String, SystemPermissionType> ALL_CODES = new LinkedHashMap<String, SystemPermissionType>();


  private static void initTypecodes0() {
    WSDATACHANGEEDIT = new SystemPermissionType("wsdatachangeedit", 0);
    INTEGADMIN = new SystemPermissionType("integadmin", 1);
    RULEADMIN = new SystemPermissionType("ruleadmin", 2);
    INTERNALTOOLS = new SystemPermissionType("internaltools", 3);
    ARCHIVE = new SystemPermissionType("archive", 4);
    CLIENTAPP = new SystemPermissionType("clientapp", 5);
    ABCREATE = new SystemPermissionType("abcreate", 6);
    ABCREATEPREF = new SystemPermissionType("abcreatepref", 7);
    ANYTAGCREATE = new SystemPermissionType("anytagcreate", 8);
    GROUPCREATE = new SystemPermissionType("groupcreate", 9);
    ORGCREATE = new SystemPermissionType("orgcreate", 10);
    USERCREATE = new SystemPermissionType("usercreate", 11);
    ABDELETE = new SystemPermissionType("abdelete", 12);
    ABDELETEPREF = new SystemPermissionType("abdeletepref", 13);
    ANYTAGDELETE = new SystemPermissionType("anytagdelete", 14);
    GROUPDELETE = new SystemPermissionType("groupdelete", 15);
    ORGDELETE = new SystemPermissionType("orgdelete", 16);
    USERDELETE = new SystemPermissionType("userdelete", 17);
    ABEDIT = new SystemPermissionType("abedit", 18);
    ABEDITPREF = new SystemPermissionType("abeditpref", 19);
    TOOLSBATCHPROCESSEDIT = new SystemPermissionType("toolsBatchProcessedit", 20);
    TOOLSCLUSTEREDIT = new SystemPermissionType("toolsClusteredit", 21);
    ANYTAGEDIT = new SystemPermissionType("anytagedit", 22);
    DOCEDIT = new SystemPermissionType("docedit", 23);
    GROUPEDIT = new SystemPermissionType("groupedit", 24);
    TOOLSJPROFILEREDIT = new SystemPermissionType("toolsJProfileredit", 25);
    TOOLSLOGEDIT = new SystemPermissionType("toolsLogedit", 26);
    TOOLSJMXBEANSEDIT = new SystemPermissionType("toolsJMXBeansEdit", 27);
    ORGEDITBASIC = new SystemPermissionType("orgeditbasic", 28);
    TOOLSPROFILEREDIT = new SystemPermissionType("toolsProfileredit", 29);
    TOOLSPLUGINEDIT = new SystemPermissionType("toolsPluginedit", 30);
    USEREDITLANG = new SystemPermissionType("usereditlang", 31);
    USEREDIT = new SystemPermissionType("useredit", 32);
    TOOLSWORKQUEUEEDIT = new SystemPermissionType("toolsWorkQueueedit", 33);
    ADMINDATACHANGEEXEC = new SystemPermissionType("admindatachangeexec", 34);
    USERGRANTROLES = new SystemPermissionType("usergrantroles", 35);
    ZONEMANAGE = new SystemPermissionType("zonemanage", 36);
    BUSWKMANAGE = new SystemPermissionType("buswkmanage", 37);
    REGIONMANAGE = new SystemPermissionType("regionmanage", 38);
    ROLEMANAGE = new SystemPermissionType("rolemanage", 39);
    SCRPRMMANAGE = new SystemPermissionType("scrprmmanage", 40);
    WORKFLOWMANAGE = new SystemPermissionType("workflowmanage", 41);
    PURGE = new SystemPermissionType("purge", 42);
    FLAGENTRYRESOLVE = new SystemPermissionType("flagentryresolve", 43);
    RESYNCMESSAGE = new SystemPermissionType("resyncmessage", 44);
    RETRYMESSAGE = new SystemPermissionType("retrymessage", 45);
    ORGSEARCH = new SystemPermissionType("orgsearch", 46);
    SKIPMESSAGE = new SystemPermissionType("skipmessage", 47);
    SOAPADMIN = new SystemPermissionType("soapadmin", 48);
    ABVIEWSEARCH = new SystemPermissionType("abviewsearch", 49);
    ABVIEW = new SystemPermissionType("abview", 50);
    ZONEVIEW = new SystemPermissionType("zoneview", 51);
    USERVIEWALL = new SystemPermissionType("userviewall", 52);
    TOOLSBATCHPROCESSVIEW = new SystemPermissionType("toolsBatchProcessview", 53);
    BUSWKVIEW = new SystemPermissionType("buswkview", 54);
    TOOLSCACHEINFOVIEW = new SystemPermissionType("toolsCacheinfoview", 55);
    TOOLSCLUSTERVIEW = new SystemPermissionType("toolsClusterview", 56);
    ANYTAGVIEW = new SystemPermissionType("anytagview", 57);
    ADMINDATACHANGEVIEW = new SystemPermissionType("admindatachangeview", 58);
    EVENTMESSAGEVIEW = new SystemPermissionType("eventmessageview", 59);
    GROUPTREEVIEW = new SystemPermissionType("grouptreeview", 60);
    GROUPVIEW = new SystemPermissionType("groupview", 61);
    TOOLSINFOVIEW = new SystemPermissionType("toolsInfoview", 62);
    TOOLSLOGVIEW = new SystemPermissionType("toolsLogview", 63);
    TOOLSJMXBEANSVIEW = new SystemPermissionType("toolsJMXBeansview", 64);
    ABVIEWMERGE = new SystemPermissionType("abviewmerge", 65);
    NOTEVIEW = new SystemPermissionType("noteview", 66);
    ORGVIEWBASIC = new SystemPermissionType("orgviewbasic", 67);
    ABVIEWPENDING = new SystemPermissionType("abviewpending", 68);
    TOOLSPROFILERVIEW = new SystemPermissionType("toolsProfilerview", 69);
    REGIONVIEW = new SystemPermissionType("regionview", 70);
    REVSUMVIEWLIST = new SystemPermissionType("revsumviewlist", 71);
    REVSUMVIEWDETAIL = new SystemPermissionType("revsumviewdetail", 72);
    ROLEVIEW = new SystemPermissionType("roleview", 73);
    SCRPRMVIEW = new SystemPermissionType("scrprmview", 74);
    TOOLSPLUGINVIEW = new SystemPermissionType("toolsPluginview", 75);
    USERVIEW = new SystemPermissionType("userview", 76);
    WORKFLOWVIEW = new SystemPermissionType("workflowview", 77);
    TOOLSWORKQUEUEVIEW = new SystemPermissionType("toolsWorkQueueview", 78);
    REPORTING_ADMIN = new SystemPermissionType("reporting_admin", 79);
    DEBUGTOOLS = new SystemPermissionType("debugtools", 80);
    ACTAPPROVEANY = new SystemPermissionType("actapproveany", 81);
    ACTCREATE = new SystemPermissionType("actcreate", 82);
    ACTPATCREATE = new SystemPermissionType("actpatcreate", 83);
    DOCCREATE = new SystemPermissionType("doccreate", 84);
    CTCCREATE = new SystemPermissionType("ctccreate", 85);
    NOTECREATE = new SystemPermissionType("notecreate", 86);
    ACTPATDELETE = new SystemPermissionType("actpatdelete", 87);
    DOCDELETE = new SystemPermissionType("docdelete", 88);
    NOTEDELETE = new SystemPermissionType("notedelete", 89);
    ACTPATEDIT = new SystemPermissionType("actpatedit", 90);
    CTCEDIT = new SystemPermissionType("ctcedit", 91);
    NOTEEDIT = new SystemPermissionType("noteedit", 92);
    NOTEEDITBODY = new SystemPermissionType("noteeditbody", 93);
    ACTEDITUNOWNED = new SystemPermissionType("acteditunowned", 94);
    USEREDITATTRS = new SystemPermissionType("usereditattrs", 95);
    ACTQUEUENEXT = new SystemPermissionType("actqueuenext", 96);
    USERGRANTAUTH = new SystemPermissionType("usergrantauth", 97);
    ACTMAKEMAND = new SystemPermissionType("actmakemand", 98);
    ATTRMANAGE = new SystemPermissionType("attrmanage", 99);
    HOLIDAYMANAGE = new SystemPermissionType("holidaymanage", 100);
    MANAGELDFCTRS = new SystemPermissionType("manageldfctrs", 101);
    SECZONEMANAGE = new SystemPermissionType("seczonemanage", 102);
    DOCMODIFYALL = new SystemPermissionType("docmodifyall", 103);
    ACTOWN = new SystemPermissionType("actown", 104);
    ACTQUEUEPICK = new SystemPermissionType("actqueuepick", 105);
    LVPRINT = new SystemPermissionType("lvprint", 106);
    ACTRAOWN = new SystemPermissionType("actraown", 107);
    ACTRAUNOWN = new SystemPermissionType("actraunown", 108);
    ACTREVIEWASSIGN = new SystemPermissionType("actreviewassign", 109);
    ACTVIEW = new SystemPermissionType("actview", 110);
    VIEWACTCAL = new SystemPermissionType("viewactcal", 111);
    ACTPATVIEW = new SystemPermissionType("actpatview", 112);
    ACTVIEWALLQUEUES = new SystemPermissionType("actviewallqueues", 113);
    DOCVIEWALL = new SystemPermissionType("docviewall", 114);
    ATTRVIEW = new SystemPermissionType("attrview", 115);
    ALPVIEW = new SystemPermissionType("alpview", 116);
    VIEWDESKTOP = new SystemPermissionType("viewdesktop", 117);
    DOCVIEW = new SystemPermissionType("docview", 118);
    VIEWWORKLOAD = new SystemPermissionType("viewworkload", 119);
    HOLIDAYVIEW = new SystemPermissionType("holidayview", 120);
    CTCVIEW = new SystemPermissionType("ctcview", 121);
    REPORTING_VIEW = new SystemPermissionType("reporting_view", 122);
    VIEWSEARCH = new SystemPermissionType("viewsearch", 123);
    VIEWTEAM = new SystemPermissionType("viewteam", 124);
  }

  static {
    initTypecodes0();
  }

  /**
   * Retrieves a typekey constant by its code.  Note that codes are case-insensitive.
   *
   * @param code the code to retrieve
   * @return the appropriate SystemPermissionType instance, or null if no such code is present in the list
   */
  public static SystemPermissionType getByCode(String code) {
    return ALL_CODES.get(code.toLowerCase());
  }

  /**
   * Gets all the typekeys in this typelist, in the order declared.
   */
  public static SystemPermissionType[] values() {
    Collection<SystemPermissionType> keys = ALL_CODES.values();
    return keys.toArray(new SystemPermissionType[keys.size()]);
  }

  private final String _code;
  private final int _ordinal;

  private SystemPermissionType(String code, int ordinal) {
    _code = code;
    _ordinal = ordinal;
    ALL_CODES.put(_code.toLowerCase(), this);
  }

  public String getCode() {
    return _code;
  }

  public String getListName() {
    return "SystemPermissionType";
  }

  public String getTypeListName() {
    return getListName();
  }

  public String getName() {
    return getUnlocalizedName();
  }

  public String getDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SystemPermissionType.class, "Description");
  }

  public boolean isRetired() {
    return (Boolean) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SystemPermissionType.class, "Retired");
  }

  public boolean hasCategory(TypeKey categoryToCheck) {
    return (Boolean) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SystemPermissionType.class, "hasCategory", new Class[] { TypeKey.class }, new Object[] { categoryToCheck });
  }

  public String getUnlocalizedName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SystemPermissionType.class, "UnlocalizedName");
  }

  public String getDisplayName(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SystemPermissionType.class, "getDisplayName", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getDisplayName() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SystemPermissionType.class, "DisplayName");
  }

  public String getDescription(ILocale locale) {
    return (String) Invoker.getInstance().invokeMethod(this, com.guidewire.ab.external.typelist.SystemPermissionType.class, "getDescription", new Class[] { ILocale.class }, new Object[] { locale });
  }

  public String getUnlocalizedDescription() {
    return (String) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SystemPermissionType.class, "UnlocalizedDescription");
  }

  public int getPriority() {
    return (Integer) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SystemPermissionType.class, "Priority");
  }

  public TypeKey[] getCategories() {
    return (TypeKey[]) Invoker.getInstance().getProperty(this, com.guidewire.ab.external.typelist.SystemPermissionType.class, "Categories");
  }

  /**
   * Compares two SystemPermissionType instances. Ordering is defined by the order in which the typekeys are declared.
   */
  public int compareTo(SystemPermissionType o) {
    return _ordinal - o._ordinal; // safe, since _ordinal is always non-negative
  }

  /**
   * Gets the 0-based position of this typekey.
   */
  public int ordinal() {
    return _ordinal;
  }
}
