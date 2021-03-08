package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/workspace/activity/ActivityDetailsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityDetailsInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/workspace/activity/ActivityDetailsInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityDetailsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=RelatedToLink_Input) at ActivityDetailsInputSet.pcf: line 44, column 59
    function action_20 () : void {
      ClaimServiceRequests.goInMain(Activity.Claim, Activity.ServiceRequest)
    }
    
    // 'action' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_75 () : void {
      AddressBookPickerPopup.push(statictypeof (Activity.ExternalOwner), Activity.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 18, column 285
    function action_77 () : void {
      if (Activity.ExternalOwner != null) { ClaimContactDetailPopup.push(Activity.ExternalOwner, Activity.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_78 () : void {
      ClaimContactDetailPopup.push(Activity.ExternalOwner, Activity.Claim)
    }
    
    // 'action' attribute on TextInput (id=RelatedToLink_Input) at ActivityDetailsInputSet.pcf: line 44, column 59
    function action_dest_21 () : pcf.api.Destination {
      return pcf.ClaimServiceRequests.createDestination(Activity.Claim, Activity.ServiceRequest)
    }
    
    // 'action' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_76 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (Activity.ExternalOwner), Activity.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_79 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(Activity.ExternalOwner, Activity.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_72 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (Activity.ExternalOwner), null, Activity.Claim)
    }
    
    // 'def' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_73 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (Activity.ExternalOwner), null, Activity.Claim)
    }
    
    // 'value' attribute on TextInput (id=Activity_Subject_Input) at ActivityDetailsInputSet.pcf: line 18, column 33
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.Subject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailsInputSet.pcf: line 36, column 64
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.RelatedTo = (__VALUE_TO_SET as gw.pl.persistence.core.Bean)
    }
    
    // 'value' attribute on DateInput (id=Activity_DueDate_Input) at ActivityDetailsInputSet.pcf: line 52, column 53
    function defaultSetter_29 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.TargetDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=Activity_EndDate_Input) at ActivityDetailsInputSet.pcf: line 69, column 53
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=Activity_EscalationDate_Input) at ActivityDetailsInputSet.pcf: line 75, column 40
    function defaultSetter_47 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.EscalationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextAreaInput (id=Activity_Description_Input) at ActivityDetailsInputSet.pcf: line 24, column 37
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Activity_Priority_Input) at ActivityDetailsInputSet.pcf: line 82, column 37
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.Priority = (__VALUE_TO_SET as typekey.Priority)
    }
    
    // 'value' attribute on TypeKeyInput (id=Activity_Importance_Input) at ActivityDetailsInputSet.pcf: line 89, column 44
    function defaultSetter_55 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.Importance = (__VALUE_TO_SET as typekey.ImportanceLevel)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Activity_Mandatory_Input) at ActivityDetailsInputSet.pcf: line 95, column 35
    function defaultSetter_60 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.Mandatory = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExternallyOwned_Input) at ActivityDetailsInputSet.pcf: line 106, column 41
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.ExternallyOwned = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      Activity.ExternalOwner = (__VALUE_TO_SET as entity.Contact)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=Activity_Mandatory_Input) at ActivityDetailsInputSet.pcf: line 95, column 35
    function editable_58 () : java.lang.Boolean {
      return Activity.canMakeMandatory()
    }
    
    // 'onPick' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function onPick_80 (PickedValue :  Contact) : void {
      var contactType = statictypeof (Activity.ExternalOwner); var result = eval("Activity.ExternalOwner = Activity.Claim.resolveContact(Activity.ExternalOwner) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'optionGroupLabel' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailsInputSet.pcf: line 36, column 64
    function optionGroupLabel_12 (VALUE :  gw.pl.persistence.core.Bean) : java.lang.String {
      return gw.pcf.RelatedToUtil.getOptionGroupLabel(VALUE as KeyableBean)
    }
    
    // 'optionLabel' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailsInputSet.pcf: line 36, column 64
    function optionLabel_13 (VALUE :  gw.pl.persistence.core.Bean) : java.lang.String {
      return gw.pcf.RelatedToUtil.getOptionLabel(VALUE as KeyableBean)
    }
    
    // 'required' attribute on DateInput (id=Activity_DueDate_Input) at ActivityDetailsInputSet.pcf: line 52, column 53
    function required_27 () : java.lang.Boolean {
      return Activity.Importance != TC_NOTONCALENDAR
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailsInputSet.pcf: line 36, column 64
    function valueRange_14 () : java.lang.Object {
      return Activity.Claim.RelatedToCandidates
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_84 () : java.lang.Object {
      return Activity.Claim.RelatedContacts
    }
    
    // 'value' attribute on TextInput (id=Activity_Subject_Input) at ActivityDetailsInputSet.pcf: line 18, column 33
    function valueRoot_2 () : java.lang.Object {
      return Activity
    }
    
    // 'value' attribute on TextInput (id=RelatedToLink_Input) at ActivityDetailsInputSet.pcf: line 44, column 59
    function valueRoot_23 () : java.lang.Object {
      return (Activity.RelatedTo as ServiceRequest)
    }
    
    // 'value' attribute on TextInput (id=Activity_Subject_Input) at ActivityDetailsInputSet.pcf: line 18, column 33
    function value_0 () : java.lang.String {
      return Activity.Subject
    }
    
    // 'value' attribute on TextInput (id=RelatedToLink_Input) at ActivityDetailsInputSet.pcf: line 44, column 59
    function value_22 () : java.lang.String {
      return (Activity.RelatedTo as ServiceRequest).ShortDisplayName
    }
    
    // 'value' attribute on DateInput (id=Activity_DueDate_Input) at ActivityDetailsInputSet.pcf: line 52, column 53
    function value_28 () : java.util.Date {
      return Activity.TargetDate
    }
    
    // 'value' attribute on TextAreaInput (id=Activity_Description_Input) at ActivityDetailsInputSet.pcf: line 24, column 37
    function value_4 () : java.lang.String {
      return Activity.Description
    }
    
    // 'value' attribute on DateInput (id=Activity_EndDate_Input) at ActivityDetailsInputSet.pcf: line 69, column 53
    function value_41 () : java.util.Date {
      return Activity.EndDate
    }
    
    // 'value' attribute on DateInput (id=Activity_EscalationDate_Input) at ActivityDetailsInputSet.pcf: line 75, column 40
    function value_46 () : java.util.Date {
      return Activity.EscalationDate
    }
    
    // 'value' attribute on TypeKeyInput (id=Activity_Priority_Input) at ActivityDetailsInputSet.pcf: line 82, column 37
    function value_50 () : typekey.Priority {
      return Activity.Priority
    }
    
    // 'value' attribute on TypeKeyInput (id=Activity_Importance_Input) at ActivityDetailsInputSet.pcf: line 89, column 44
    function value_54 () : typekey.ImportanceLevel {
      return Activity.Importance
    }
    
    // 'value' attribute on BooleanRadioInput (id=Activity_Mandatory_Input) at ActivityDetailsInputSet.pcf: line 95, column 35
    function value_59 () : java.lang.Boolean {
      return Activity.Mandatory
    }
    
    // 'value' attribute on TypeKeyInput (id=Activity_Status_Input) at ActivityDetailsInputSet.pcf: line 100, column 43
    function value_64 () : typekey.ActivityStatus {
      return Activity.Status
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExternallyOwned_Input) at ActivityDetailsInputSet.pcf: line 106, column 41
    function value_67 () : java.lang.Boolean {
      return Activity.ExternallyOwned
    }
    
    // 'value' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function value_81 () : entity.Contact {
      return Activity.ExternalOwner
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailsInputSet.pcf: line 36, column 64
    function value_9 () : gw.pl.persistence.core.Bean {
      return Activity.RelatedTo
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailsInputSet.pcf: line 36, column 64
    function verifyValueRangeIsAllowedType_15 ($$arg :  gw.pl.persistence.core.Bean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailsInputSet.pcf: line 36, column 64
    function verifyValueRangeIsAllowedType_15 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_85 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_85 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_85 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailsInputSet.pcf: line 36, column 64
    function verifyValueRange_16 () : void {
      var __valueRangeArg = Activity.Claim.RelatedToCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_15(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_86 () : void {
      var __valueRangeArg = Activity.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_85(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=RelatedToLink_Input) at ActivityDetailsInputSet.pcf: line 44, column 59
    function visible_19 () : java.lang.Boolean {
      return Activity.RelatedTo typeis ServiceRequest
    }
    
    // 'visible' attribute on DateInput (id=Activity_DueDate_Input) at ActivityDetailsInputSet.pcf: line 52, column 53
    function visible_26 () : java.lang.Boolean {
      return Activity.ActivityClass != TC_EVENT
    }
    
    // 'visible' attribute on DateInput (id=Activity_StartDate_Input) at ActivityDetailsInputSet.pcf: line 61, column 53
    function visible_33 () : java.lang.Boolean {
      return Activity.ActivityClass == TC_EVENT
    }
    
    // 'visible' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 14, column 229
    function visible_71 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactInput (id=ExternalOwner_Input) at ClaimContactWidget.xml: line 16, column 225
    function visible_74 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (Activity.ExternalOwner), Activity.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    // 'visible' attribute on RangeInput (id=RelatedTo_Input) at ActivityDetailsInputSet.pcf: line 36, column 64
    function visible_8 () : java.lang.Boolean {
      return not (Activity.RelatedTo typeis ServiceRequest)
    }
    
    property get Activity () : Activity {
      return getRequireValue("Activity", 0) as Activity
    }
    
    property set Activity ($arg :  Activity) {
      setRequireValue("Activity", 0, $arg)
    }
    
    
  }
  
  
}