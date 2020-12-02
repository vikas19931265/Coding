package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/newcheckwizard/NewCheckWizardAddressBookPickerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewCheckWizardAddressBookPickerPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/newcheckwizard/NewCheckWizardAddressBookPickerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewCheckWizardAddressBookPickerPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (requiredContactType :  Type, claim :  Claim) : int {
      return 0
    }
    
    // 'afterReturnFromPopup' attribute on Popup (id=NewCheckWizardAddressBookPickerPopup) at NewCheckWizardAddressBookPickerPopup.pcf: line 12, column 69
    function afterReturnFromPopup_54 (popupCommitted :  boolean) : void {
      if (popupCommitted) { CurrentLocation.pickValueAndCommit(pickedContact) }
    }
    
    // 'canVisit' attribute on Popup (id=NewCheckWizardAddressBookPickerPopup) at NewCheckWizardAddressBookPickerPopup.pcf: line 12, column 69
    static function canVisit_55 (claim :  Claim, requiredContactType :  Type) : java.lang.Boolean {
      return perm.Contact.viewsearchab
    }
    
    // 'initialValue' attribute on Variable at NewCheckWizardAddressBookPickerPopup.pcf: line 25, column 21
    function initialValue_0 () : Claim {
      return null
    }
    
    override property get CurrentLocation () : pcf.NewCheckWizardAddressBookPickerPopup {
      return super.CurrentLocation as pcf.NewCheckWizardAddressBookPickerPopup
    }
    
    property get claim () : Claim {
      return getVariableValue("claim", 0) as Claim
    }
    
    property set claim ($arg :  Claim) {
      setVariableValue("claim", 0, $arg)
    }
    
    property get externalSearchEnabled () : boolean {
      return getVariableValue("externalSearchEnabled", 0) as java.lang.Boolean
    }
    
    property set externalSearchEnabled ($arg :  boolean) {
      setVariableValue("externalSearchEnabled", 0, $arg)
    }
    
    property get pickedContact () : Contact {
      return getVariableValue("pickedContact", 0) as Contact
    }
    
    property set pickedContact ($arg :  Contact) {
      setVariableValue("pickedContact", 0, $arg)
    }
    
    property get requiredContactType () : Type {
      return getVariableValue("requiredContactType", 0) as Type
    }
    
    property set requiredContactType ($arg :  Type) {
      setVariableValue("requiredContactType", 0, $arg)
    }
    
    property get showCancel () : boolean {
      return getVariableValue("showCancel", 0) as java.lang.Boolean
    }
    
    property set showCancel ($arg :  boolean) {
      setVariableValue("showCancel", 0, $arg)
    }
    
    
          function newSearchCriteria() : ContactSearchCriteria {
            var aCriteria = new ContactSearchCriteria();
            aCriteria.ContactSubtype = typekey.Contact.get(requiredContactType.RelativeName);
            aCriteria.SearchType = TC_INTERNAL;
            if (claim != null) {
              aCriteria.initializeProximitySearch(claim.Addresses?.toList(), claim.LossLocation);
            }
            return aCriteria;
          }
    
          function isLeafSearch(searchCriteria : ContactSearchCriteria) : Boolean {
            return searchCriteria == null ? false
              : searchCriteria.ContactIntrinsicType != Contact
              and searchCriteria.ContactIntrinsicType != Person
              and searchCriteria.ContactIntrinsicType != PersonVendor
              and searchCriteria.ContactIntrinsicType != Company
              and searchCriteria.ContactIntrinsicType != CompanyVendor
              and searchCriteria.ContactIntrinsicType != Place
              ;
          }
    
        
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/newcheckwizard/NewCheckWizardAddressBookPickerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewCheckWizardAddressBookSearchScreenExpressionsImpl extends NewCheckWizardAddressBookPickerPopupExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=cancel) at NewCheckWizardAddressBookPickerPopup.pcf: line 52, column 33
    function action_4 () : void {
      CurrentLocation.cancel()
    }
    
    // 'initialValue' attribute on Variable at NewCheckWizardAddressBookPickerPopup.pcf: line 38, column 60
    function initialValue_1 () : gw.api.contact.CCProximitySearchPageHelper {
      return new gw.api.contact.CCProximitySearchPageHelper()
    }
    
    // 'initialValue' attribute on Variable at NewCheckWizardAddressBookPickerPopup.pcf: line 46, column 44
    function initialValue_2 () : gw.pcf.ContactSearchHelper {
      return new gw.pcf.ContactSearchHelper(false)
    }
    
    // 'visible' attribute on ToolbarButton (id=cancel) at NewCheckWizardAddressBookPickerPopup.pcf: line 52, column 33
    function visible_3 () : java.lang.Boolean {
      return showCancel
    }
    
    property get PageHelper () : gw.api.contact.CCProximitySearchPageHelper {
      return getVariableValue("PageHelper", 1) as gw.api.contact.CCProximitySearchPageHelper
    }
    
    property set PageHelper ($arg :  gw.api.contact.CCProximitySearchPageHelper) {
      setVariableValue("PageHelper", 1, $arg)
    }
    
    property get PrintTargetLV () : java.lang.String {
      return getVariableValue("PrintTargetLV", 1) as java.lang.String
    }
    
    property set PrintTargetLV ($arg :  java.lang.String) {
      setVariableValue("PrintTargetLV", 1, $arg)
    }
    
    property get contactSearchHelper () : gw.pcf.ContactSearchHelper {
      return getVariableValue("contactSearchHelper", 1) as gw.pcf.ContactSearchHelper
    }
    
    property set contactSearchHelper ($arg :  gw.pcf.ContactSearchHelper) {
      setVariableValue("contactSearchHelper", 1, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/newcheckwizard/NewCheckWizardAddressBookPickerPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SearchPanelExpressionsImpl extends NewCheckWizardAddressBookSearchScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 2)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ToolbarButton (id=ClaimSearchScreen_PrintButton) at NewCheckWizardAddressBookPickerPopup.pcf: line 85, column 29
    function action_10 () : void {
      gw.api.print.ListViewPrintOptionPopupAction.printListViewOnlyWithOptions(PrintTargetLV, DisplayKey.get("Web.Search.Results"), null)
    }
    
    // 'action' attribute on PickerToolbarButton (id=ClaimSearchScreen_CreateNewContactButton) at NewCheckWizardAddressBookPickerPopup.pcf: line 93, column 146
    function action_12 () : void {
      AddressBookSearchNewContactPopup.push(searchCriteria, searchCriteria.ContactSubtype, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_NewPerson) at NewCheckWizardAddressBookPickerPopup.pcf: line 103, column 55
    function action_15 () : void {
      AddressBookSearchNewContactPopup.push(searchCriteria, typekey.Contact.TC_PERSON, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_AutoRepairShop) at NewCheckWizardAddressBookPickerPopup.pcf: line 111, column 57
    function action_18 () : void {
      AddressBookSearchNewContactPopup.push(searchCriteria, typekey.Contact.TC_AUTOREPAIRSHOP, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_AutoTowingAgcy) at NewCheckWizardAddressBookPickerPopup.pcf: line 116, column 57
    function action_21 () : void {
      AddressBookSearchNewContactPopup.push(searchCriteria, typekey.Contact.TC_AUTOTOWINGAGCY, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_Doctor) at NewCheckWizardAddressBookPickerPopup.pcf: line 121, column 57
    function action_24 () : void {
      AddressBookSearchNewContactPopup.push(searchCriteria, typekey.Contact.TC_DOCTOR, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_MedicalCareOrg) at NewCheckWizardAddressBookPickerPopup.pcf: line 126, column 57
    function action_27 () : void {
      AddressBookSearchNewContactPopup.push(searchCriteria, typekey.Contact.TC_MEDICALCAREORG, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_CompanyVendor) at NewCheckWizardAddressBookPickerPopup.pcf: line 131, column 57
    function action_30 () : void {
      AddressBookSearchNewContactPopup.push(searchCriteria, typekey.Contact.TC_COMPANYVENDOR, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_Company) at NewCheckWizardAddressBookPickerPopup.pcf: line 137, column 55
    function action_33 () : void {
      AddressBookSearchNewContactPopup.push(searchCriteria, typekey.Contact.TC_COMPANY, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_Adjudicator) at NewCheckWizardAddressBookPickerPopup.pcf: line 145, column 57
    function action_36 () : void {
      AddressBookSearchNewContactPopup.push(searchCriteria, typekey.Contact.TC_ADJUDICATOR, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_Attorney) at NewCheckWizardAddressBookPickerPopup.pcf: line 150, column 57
    function action_39 () : void {
      AddressBookSearchNewContactPopup.push(searchCriteria, typekey.Contact.TC_ATTORNEY, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_LawFirm) at NewCheckWizardAddressBookPickerPopup.pcf: line 155, column 57
    function action_42 () : void {
      AddressBookSearchNewContactPopup.push(searchCriteria, typekey.Contact.TC_LAWFIRM, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_LegalVenue) at NewCheckWizardAddressBookPickerPopup.pcf: line 160, column 57
    function action_45 () : void {
      AddressBookSearchNewContactPopup.push(searchCriteria, typekey.Contact.TC_LEGALVENUE, null, claim)
    }
    
    // 'action' attribute on PickerToolbarButton (id=ClaimSearchScreen_CreateNewContactButton) at NewCheckWizardAddressBookPickerPopup.pcf: line 93, column 146
    function action_dest_13 () : pcf.api.Destination {
      return pcf.AddressBookSearchNewContactPopup.createDestination(searchCriteria, searchCriteria.ContactSubtype, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_NewPerson) at NewCheckWizardAddressBookPickerPopup.pcf: line 103, column 55
    function action_dest_16 () : pcf.api.Destination {
      return pcf.AddressBookSearchNewContactPopup.createDestination(searchCriteria, typekey.Contact.TC_PERSON, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_AutoRepairShop) at NewCheckWizardAddressBookPickerPopup.pcf: line 111, column 57
    function action_dest_19 () : pcf.api.Destination {
      return pcf.AddressBookSearchNewContactPopup.createDestination(searchCriteria, typekey.Contact.TC_AUTOREPAIRSHOP, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_AutoTowingAgcy) at NewCheckWizardAddressBookPickerPopup.pcf: line 116, column 57
    function action_dest_22 () : pcf.api.Destination {
      return pcf.AddressBookSearchNewContactPopup.createDestination(searchCriteria, typekey.Contact.TC_AUTOTOWINGAGCY, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_Doctor) at NewCheckWizardAddressBookPickerPopup.pcf: line 121, column 57
    function action_dest_25 () : pcf.api.Destination {
      return pcf.AddressBookSearchNewContactPopup.createDestination(searchCriteria, typekey.Contact.TC_DOCTOR, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_MedicalCareOrg) at NewCheckWizardAddressBookPickerPopup.pcf: line 126, column 57
    function action_dest_28 () : pcf.api.Destination {
      return pcf.AddressBookSearchNewContactPopup.createDestination(searchCriteria, typekey.Contact.TC_MEDICALCAREORG, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_CompanyVendor) at NewCheckWizardAddressBookPickerPopup.pcf: line 131, column 57
    function action_dest_31 () : pcf.api.Destination {
      return pcf.AddressBookSearchNewContactPopup.createDestination(searchCriteria, typekey.Contact.TC_COMPANYVENDOR, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_Company) at NewCheckWizardAddressBookPickerPopup.pcf: line 137, column 55
    function action_dest_34 () : pcf.api.Destination {
      return pcf.AddressBookSearchNewContactPopup.createDestination(searchCriteria, typekey.Contact.TC_COMPANY, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_Adjudicator) at NewCheckWizardAddressBookPickerPopup.pcf: line 145, column 57
    function action_dest_37 () : pcf.api.Destination {
      return pcf.AddressBookSearchNewContactPopup.createDestination(searchCriteria, typekey.Contact.TC_ADJUDICATOR, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_Attorney) at NewCheckWizardAddressBookPickerPopup.pcf: line 150, column 57
    function action_dest_40 () : pcf.api.Destination {
      return pcf.AddressBookSearchNewContactPopup.createDestination(searchCriteria, typekey.Contact.TC_ATTORNEY, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_LawFirm) at NewCheckWizardAddressBookPickerPopup.pcf: line 155, column 57
    function action_dest_43 () : pcf.api.Destination {
      return pcf.AddressBookSearchNewContactPopup.createDestination(searchCriteria, typekey.Contact.TC_LAWFIRM, null, claim)
    }
    
    // 'action' attribute on PickerMenuItem (id=ClaimContacts_LegalVenue) at NewCheckWizardAddressBookPickerPopup.pcf: line 160, column 57
    function action_dest_46 () : pcf.api.Destination {
      return pcf.AddressBookSearchNewContactPopup.createDestination(searchCriteria, typekey.Contact.TC_LEGALVENUE, null, claim)
    }
    
    // 'allCheckedRowsAction' attribute on CheckedValuesToolbarButton (id=RetrieveRequested) at NewCheckWizardAddressBookPickerPopup.pcf: line 78, column 61
    function allCheckedRowsAction_8 (CheckedValues :  Contact[], CheckedValuesErrors :  java.util.Map) : void {
      PageHelper.getDrivingDirectionsCache().getSelectedDirections(CheckedValues, searchCriteria);
    }
    
    // 'available' attribute on ToolbarButton (id=ClaimSearchScreen_PrintButton) at NewCheckWizardAddressBookPickerPopup.pcf: line 85, column 29
    function available_9 () : java.lang.Boolean {
      return perm.User.printlistviews
    }
    
    // 'def' attribute on PanelRef at NewCheckWizardAddressBookPickerPopup.pcf: line 68, column 124
    function def_onEnter_49 (def :  pcf.AddressBookSearchLV) : void {
      def.onEnter(null, PageHelper, searchCriteria.ExternalContactSource, searchResults, searchCriteria)
    }
    
    // 'def' attribute on PanelRef at NewCheckWizardAddressBookPickerPopup.pcf: line 66, column 145
    function def_onEnter_5 (def :  pcf.AddressBookSearchDV) : void {
      def.onEnter(searchCriteria, PageHelper, requiredContactType, externalSearchEnabled, claim, false, contactSearchHelper)
    }
    
    // 'def' attribute on PanelRef at NewCheckWizardAddressBookPickerPopup.pcf: line 68, column 124
    function def_refreshVariables_50 (def :  pcf.AddressBookSearchLV) : void {
      def.refreshVariables(null, PageHelper, searchCriteria.ExternalContactSource, searchResults, searchCriteria)
    }
    
    // 'def' attribute on PanelRef at NewCheckWizardAddressBookPickerPopup.pcf: line 66, column 145
    function def_refreshVariables_6 (def :  pcf.AddressBookSearchDV) : void {
      def.refreshVariables(searchCriteria, PageHelper, requiredContactType, externalSearchEnabled, claim, false, contactSearchHelper)
    }
    
    // 'maxSearchResults' attribute on SearchPanel at NewCheckWizardAddressBookPickerPopup.pcf: line 64, column 62
    function maxSearchResults_51 () : java.lang.Object {
      return gw.api.search.MaxSearchResults.forContacts()
    }
    
    // 'onPick' attribute on PickerToolbarButton (id=ClaimSearchScreen_CreateNewContactButton) at NewCheckWizardAddressBookPickerPopup.pcf: line 93, column 146
    function onPick_14 (PickedValue :  Contact) : void {
      pickedContact = PickedValue
    }
    
    // 'searchCriteria' attribute on SearchPanel at NewCheckWizardAddressBookPickerPopup.pcf: line 64, column 62
    function searchCriteria_53 () : entity.ContactSearchCriteria {
      return newSearchCriteria()
    }
    
    // 'search' attribute on SearchPanel at NewCheckWizardAddressBookPickerPopup.pcf: line 64, column 62
    function search_52 () : java.lang.Object {
      return PageHelper.performProximitySearch(CurrentLocation,searchCriteria)
    }
    
    // 'visible' attribute on PickerToolbarButton (id=ClaimSearchScreen_CreateNewContactButton) at NewCheckWizardAddressBookPickerPopup.pcf: line 93, column 146
    function visible_11 () : java.lang.Boolean {
      return claim != null and isLeafSearch(searchCriteria) and perm.Claim.managepartiesinvolved(claim) and perm.Contact.createlocal
    }
    
    // 'visible' attribute on ToolbarButton (id=ClaimContacts_CreateNewContactButton) at NewCheckWizardAddressBookPickerPopup.pcf: line 98, column 148
    function visible_48 () : java.lang.Boolean {
      return claim != null and (!isLeafSearch(searchCriteria)) and perm.Claim.managepartiesinvolved(claim) and perm.Contact.createlocal
    }
    
    // 'visible' attribute on CheckedValuesToolbarButton (id=RetrieveRequested) at NewCheckWizardAddressBookPickerPopup.pcf: line 78, column 61
    function visible_7 () : java.lang.Boolean {
      return searchCriteria.isProximitySearch()
    }
    
    property get searchCriteria () : entity.ContactSearchCriteria {
      return getCriteriaValue(2) as entity.ContactSearchCriteria
    }
    
    property set searchCriteria ($arg :  entity.ContactSearchCriteria) {
      setCriteriaValue(2, $arg)
    }
    
    property get searchResults () : gw.api.database.IQueryBeanResult {
      return getResultsValue(2) as gw.api.database.IQueryBeanResult
    }
    
    
  }
  
  
}