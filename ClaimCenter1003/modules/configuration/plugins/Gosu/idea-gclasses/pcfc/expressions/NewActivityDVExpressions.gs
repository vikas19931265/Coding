package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.document.GosuCaseInsensitiveBackwardsCompatibleSymbolProvider
@javax.annotation.Generated("config/web/pcf/claim/newactivity/NewActivityDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewActivityDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newactivity/NewActivityDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewActivityDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_67 () : void {
      AddressBookPickerPopup.push(statictypeof (Activity.ExternalOwner), Activity.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_69 () : void {
      if (Activity.ExternalOwner != null) { ClaimContactDetailPopup.push(Activity.ExternalOwner, Activity.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_70 () : void {
      ClaimContactDetailPopup.push(Activity.ExternalOwner, Activity.Claim)
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=Activity_CreateDocument_Input) at NewActivityDV.pcf: line 126, column 39
    function action_82 () : void {
      DocumentTemplateSearchPopup.push(symbolProvider)
    }
    
    // 'pickLocation' attribute on PickerInput (id=EmailTemplate_Input) at NewActivityDV.pcf: line 136, column 39
    function action_91 () : void {
      PickEmailTemplatePopup.push(new gw.api.email.EmailTemplateSearchCriteria({"Activity"}))
    }
    
    // 'action' attribute on MenuItem (id=Activity_AssignActivity_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_99 () : void {
      AssigneePickerPopup.push(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Activity))), Claim)
    }
    
    // 'action' attribute on MenuItem (id=Activity_AssignActivity_PickerButton) at CCAssigneeWidget.xml: line 8, column 25
    function action_dest_100 () : pcf.api.Destination {
      return pcf.AssigneePickerPopup.createDestination(new gw.api.assignment.AssigneePicker(entity.Activity.Type.isAssignableFrom(typeof (Activity))), Claim)
    }
    
    // 'action' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_68 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Activity.ExternalOwner), Activity.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_71 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Activity.ExternalOwner, Activity.Claim)
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=Activity_CreateDocument_Input) at NewActivityDV.pcf: line 126, column 39
    function action_dest_83 () : pcf.api.Destination {
      return pcf.DocumentTemplateSearchPopup.createDestination(symbolProvider)
    }
    
    // 'pickLocation' attribute on PickerInput (id=EmailTemplate_Input) at NewActivityDV.pcf: line 136, column 39
    function action_dest_92 () : pcf.api.Destination {
      return pcf.PickEmailTemplatePopup.createDestination(new gw.api.email.EmailTemplateSearchCriteria({"Activity"}))
    }
    
    // 'available' attribute on DocumentTemplateInput (id=Activity_CreateDocument_Input) at NewActivityDV.pcf: line 126, column 39
    function available_84 () : java.lang.Boolean {
      return new gw.document.DocumentsActionsUIHelper().DocumentTemplateSourceAvailable
    }
    
    // 'conversionExpression' attribute on DocumentTemplateInput (id=Activity_CreateDocument_Input) at NewActivityDV.pcf: line 126, column 39
    function conversionExpression_85 (PickedValue :  gw.plugin.document.IDocumentTemplateDescriptor) : java.lang.String {
      return PickedValue.TemplateId
    }
    
    // 'conversionExpression' attribute on PickerInput (id=EmailTemplate_Input) at NewActivityDV.pcf: line 136, column 39
    function conversionExpression_93 (PickedValue :  gw.plugin.email.IEmailTemplateDescriptor) : java.lang.String {
      return PickedValue.getFilename()
    }
    
    // 'def' attribute on InputSetRef at NewActivityDV.pcf: line 151, column 141
    function def_onEnter_109 (def :  pcf.ActivityDocumentInputSet) : void {
      def.onEnter(Activity)
    }
    
    // 'def' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_64 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Activity.ExternalOwner), null, Activity.Claim)
    }
    
    // 'def' attribute on InputSetRef at NewActivityDV.pcf: line 151, column 141
    function def_refreshVariables_110 (def :  pcf.ActivityDocumentInputSet) : void {
      def.refreshVariables(Activity)
    }
    
    // 'def' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_65 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Activity.ExternalOwner), null, Activity.Claim)
    }
    
    // 'value' attribute on RangeInput (id=Activity_RelatedTo_Input) at NewActivityDV.pcf: line 44, column 49
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.RelatedTo = (__VALUE_TO_SET as gw.pl.persistence.core.Bean)
    }
    
    // 'value' attribute on CCAssigneeInput (id=Activity_AssignActivity_Input) at CCAssigneeWidget.xml: line 8, column 25
    function defaultSetter_102 (__VALUE_TO_SET :  java.lang.Object) : void {
      AssigneeHolder[0] = (__VALUE_TO_SET as gw.api.assignment.Assignee)
    }
    
    // 'value' attribute on TextInput (id=Activity_Subject_Input) at NewActivityDV.pcf: line 27, column 35
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.Subject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateInput (id=Activity_DueDate_Input) at NewActivityDV.pcf: line 55, column 55
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.TargetDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=Activity_EndDate_Input) at NewActivityDV.pcf: line 72, column 55
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=Activity_EscalationDate_Input) at NewActivityDV.pcf: line 78, column 42
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.EscalationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Activity_Priority_Input) at NewActivityDV.pcf: line 85, column 39
    function defaultSetter_43 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.Priority = (__VALUE_TO_SET as typekey.Priority)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Activity_Mandatory_Input) at NewActivityDV.pcf: line 91, column 37
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.Mandatory = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Activity_Importance_Input) at NewActivityDV.pcf: line 98, column 46
    function defaultSetter_53 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.Importance = (__VALUE_TO_SET as typekey.ImportanceLevel)
    }
    
    // 'value' attribute on TextAreaInput (id=Activity_Description_Input) at NewActivityDV.pcf: line 33, column 39
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Activity_ExternallyOwned_Input) at NewActivityDV.pcf: line 108, column 43
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.ExternallyOwned = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_74 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.ExternalOwner = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'value' attribute on DocumentTemplateInput (id=Activity_CreateDocument_Input) at NewActivityDV.pcf: line 126, column 39
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.DocumentTemplate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on PickerInput (id=EmailTemplate_Input) at NewActivityDV.pcf: line 136, column 39
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.EmailTemplate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=Activity_Mandatory_Input) at NewActivityDV.pcf: line 91, column 37
    function editable_46 () : java.lang.Boolean {
      return Activity.canMakeMandatory()
    }
    
    // 'initialValue' attribute on Variable at NewActivityDV.pcf: line 20, column 46
    function initialValue_0 () : gw.document.SymbolProvider {
      return createSymbolProvider()
    }
    
    // 'onPick' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_72 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Activity.ExternalOwner); var result = eval("Activity.ExternalOwner = Activity.Claim.resolveContact(Activity.ExternalOwner) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'optionGroupLabel' attribute on RangeInput (id=Activity_RelatedTo_Input) at NewActivityDV.pcf: line 44, column 49
    function optionGroupLabel_12 (VALUE :  gw.pl.persistence.core.Bean) : java.lang.String {
      return gw.pcf.RelatedToUtil.getOptionGroupLabel(VALUE as KeyableBean)
    }
    
    // 'optionLabel' attribute on RangeInput (id=Activity_RelatedTo_Input) at NewActivityDV.pcf: line 44, column 49
    function optionLabel_13 (VALUE :  gw.pl.persistence.core.Bean) : java.lang.String {
      return gw.pcf.RelatedToUtil.getOptionLabel(VALUE as KeyableBean)
    }
    
    // 'outputConversion' attribute on PickerInput (id=EmailTemplate_Input) at NewActivityDV.pcf: line 136, column 39
    function outputConversion_94 (VALUE :  java.lang.String) : java.lang.String {
      return getDisplayName(VALUE)
    }
    
    // 'required' attribute on DateInput (id=Activity_DueDate_Input) at NewActivityDV.pcf: line 55, column 55
    function required_19 () : java.lang.Boolean {
      return Activity.Importance != TC_NOTONCALENDAR
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=Activity_AssignActivity_Input) at CCAssigneeWidget.xml: line 8, column 25
    function valueRange_103 () : java.lang.Object {
      return Activity.SuggestedAssignees
    }
    
    // 'valueRange' attribute on RangeInput (id=Activity_RelatedTo_Input) at NewActivityDV.pcf: line 44, column 49
    function valueRange_14 () : java.lang.Object {
      return Activity.Claim.RelatedToCandidates
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_76 () : java.lang.Object {
      return Activity.Claim.RelatedContacts
    }
    
    // 'value' attribute on TextInput (id=Activity_Subject_Input) at NewActivityDV.pcf: line 27, column 35
    function valueRoot_3 () : java.lang.Object {
      return Activity
    }
    
    // 'value' attribute on TextInput (id=Activity_Subject_Input) at NewActivityDV.pcf: line 27, column 35
    function value_1 () : java.lang.String {
      return Activity.Subject
    }
    
    // 'value' attribute on CCAssigneeInput (id=Activity_AssignActivity_Input) at CCAssigneeWidget.xml: line 8, column 25
    function value_101 () : gw.api.assignment.Assignee {
      return AssigneeHolder[0]
    }
    
    // 'value' attribute on DateInput (id=Activity_DueDate_Input) at NewActivityDV.pcf: line 55, column 55
    function value_20 () : java.util.Date {
      return Activity.TargetDate
    }
    
    // 'value' attribute on DateInput (id=Activity_EndDate_Input) at NewActivityDV.pcf: line 72, column 55
    function value_33 () : java.util.Date {
      return Activity.EndDate
    }
    
    // 'value' attribute on DateInput (id=Activity_EscalationDate_Input) at NewActivityDV.pcf: line 78, column 42
    function value_38 () : java.util.Date {
      return Activity.EscalationDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Activity_Priority_Input) at NewActivityDV.pcf: line 85, column 39
    function value_42 () : typekey.Priority {
      return Activity.Priority
    }
    
    // 'value' attribute on BooleanRadioInput (id=Activity_Mandatory_Input) at NewActivityDV.pcf: line 91, column 37
    function value_47 () : java.lang.Boolean {
      return Activity.Mandatory
    }
    
    // 'value' attribute on TextAreaInput (id=Activity_Description_Input) at NewActivityDV.pcf: line 33, column 39
    function value_5 () : java.lang.String {
      return Activity.Description
    }
    
    // 'value' attribute on TypeKeyInput (id=Activity_Importance_Input) at NewActivityDV.pcf: line 98, column 46
    function value_52 () : typekey.ImportanceLevel {
      return Activity.Importance
    }
    
    // 'value' attribute on BooleanRadioInput (id=Activity_Recurring_Input) at NewActivityDV.pcf: line 102, column 37
    function value_56 () : java.lang.Boolean {
      return Activity.Recurring
    }
    
    // 'value' attribute on BooleanRadioInput (id=Activity_ExternallyOwned_Input) at NewActivityDV.pcf: line 108, column 43
    function value_59 () : java.lang.Boolean {
      return Activity.ExternallyOwned
    }
    
    // 'value' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_73 () : entity.Contact {
      return Activity.ExternalOwner
    }
    
    // 'value' attribute on DocumentTemplateInput (id=Activity_CreateDocument_Input) at NewActivityDV.pcf: line 126, column 39
    function value_86 () : java.lang.String {
      return Activity.DocumentTemplate
    }
    
    // 'value' attribute on RangeInput (id=Activity_RelatedTo_Input) at NewActivityDV.pcf: line 44, column 49
    function value_9 () : gw.pl.persistence.core.Bean {
      return Activity.RelatedTo
    }
    
    // 'value' attribute on PickerInput (id=EmailTemplate_Input) at NewActivityDV.pcf: line 136, column 39
    function value_95 () : java.lang.String {
      return Activity.EmailTemplate
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=Activity_AssignActivity_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_104 ($$arg :  gw.api.assignment.Assignee[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=Activity_AssignActivity_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRangeIsAllowedType_104 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Activity_RelatedTo_Input) at NewActivityDV.pcf: line 44, column 49
    function verifyValueRangeIsAllowedType_15 ($$arg :  gw.pl.persistence.core.Bean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Activity_RelatedTo_Input) at NewActivityDV.pcf: line 44, column 49
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_77 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_77 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_77 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on CCAssigneeInput (id=Activity_AssignActivity_Input) at CCAssigneeWidget.xml: line 8, column 25
    function verifyValueRange_105 () : void {
      var __valueRangeArg = Activity.SuggestedAssignees
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_104(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Activity_RelatedTo_Input) at NewActivityDV.pcf: line 44, column 49
    function verifyValueRange_16 () : void {
      var __valueRangeArg = Activity.Claim.RelatedToCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_78 () : void {
      var __valueRangeArg = Activity.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_77(__valueRangeArg)
    }
    
    // 'visible' attribute on InputSetRef at NewActivityDV.pcf: line 151, column 141
    function visible_108 () : java.lang.Boolean {
      return gw.document.DocumentsUtil.claimHasDocuments(Activity.Claim) and perm.Claim.view(Activity.Claim) and perm.System.viewdocs
    }
    
    // 'visible' attribute on DateInput (id=Activity_DueDate_Input) at NewActivityDV.pcf: line 55, column 55
    function visible_18 () : java.lang.Boolean {
      return Activity.ActivityClass != TC_EVENT
    }
    
    // 'visible' attribute on DateInput (id=Activity_StartDate_Input) at NewActivityDV.pcf: line 64, column 55
    function visible_25 () : java.lang.Boolean {
      return Activity.ActivityClass == TC_EVENT
    }
    
    // 'visible' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_63 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=Activity_ExternalOwner_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_66 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Activity.ExternalOwner), Activity.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get Activity () : Activity {
      return getRequireValue("Activity", 0) as Activity
    }
    
    property set Activity ($arg :  Activity) {
      setRequireValue("Activity", 0, $arg)
    }
    
    property get AssigneeHolder () : gw.api.assignment.Assignee[] {
      return getRequireValue("AssigneeHolder", 0) as gw.api.assignment.Assignee[]
    }
    
    property set AssigneeHolder ($arg :  gw.api.assignment.Assignee[]) {
      setRequireValue("AssigneeHolder", 0, $arg)
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get symbolProvider () : gw.document.SymbolProvider {
      return getVariableValue("symbolProvider", 0) as gw.document.SymbolProvider
    }
    
    property set symbolProvider ($arg :  gw.document.SymbolProvider) {
      setVariableValue("symbolProvider", 0, $arg)
    }
    
    
    function createSymbolProvider() : GosuCaseInsensitiveBackwardsCompatibleSymbolProvider {
      return new GosuCaseInsensitiveBackwardsCompatibleSymbolProvider({
          "Activity" -> Activity,
          "AssigneeHolder" -> AssigneeHolder,
          "Claim" -> Claim
      })
    }
    
    function getDisplayName(templateFilename:String):String{
      if(templateFilename==null){
        return null;
      }
      var ets=gw.pcf.specialhandling.EmailTemplateUtil.EmailTemplatePlugin
      if(ets.getEmailTemplate(templateFilename)==null){
        return DisplayKey.get("Web.Email.TemplateNotFound")
      }
      return ets.getEmailTemplate(templateFilename).getName()
    }
    
    
  }
  
  
}