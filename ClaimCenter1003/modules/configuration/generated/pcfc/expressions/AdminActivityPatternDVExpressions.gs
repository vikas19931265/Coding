package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
uses gw.document.SymbolProvider
uses gw.document.SimpleSymbol
uses gw.document.GosuCaseInsensitiveBackwardsCompatibleSymbolProvider
@javax.annotation.Generated("config/web/pcf/admin/activitypatterns/AdminActivityPatternDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AdminActivityPatternDVExpressions {
  @javax.annotation.Generated("config/web/pcf/admin/activitypatterns/AdminActivityPatternDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AdminActivityPatternDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=CreateDocument_Input) at AdminActivityPatternDV.pcf: line 113, column 39
    function action_61 () : void {
      DocumentTemplateSearchPopup.push(symbolProvider)
    }
    
    // 'pickLocation' attribute on PickerInput (id=EmailTemplate_Input) at AdminActivityPatternDV.pcf: line 123, column 39
    function action_68 () : void {
      PickEmailTemplatePopup.push(new gw.api.email.EmailTemplateSearchCriteria({"Activity","Claim"}))
    }
    
    // 'pickLocation' attribute on DocumentTemplateInput (id=CreateDocument_Input) at AdminActivityPatternDV.pcf: line 113, column 39
    function action_dest_62 () : pcf.api.Destination {
      return pcf.DocumentTemplateSearchPopup.createDestination(symbolProvider)
    }
    
    // 'pickLocation' attribute on PickerInput (id=EmailTemplate_Input) at AdminActivityPatternDV.pcf: line 123, column 39
    function action_dest_69 () : pcf.api.Destination {
      return pcf.PickEmailTemplatePopup.createDestination(new gw.api.email.EmailTemplateSearchCriteria({"Activity","Claim"}))
    }
    
    // 'conversionExpression' attribute on DocumentTemplateInput (id=CreateDocument_Input) at AdminActivityPatternDV.pcf: line 113, column 39
    function conversionExpression_63 (PickedValue :  gw.plugin.document.IDocumentTemplateDescriptor) : java.lang.String {
      return PickedValue.TemplateId
    }
    
    // 'conversionExpression' attribute on PickerInput (id=EmailTemplate_Input) at AdminActivityPatternDV.pcf: line 123, column 39
    function conversionExpression_70 (PickedValue :  gw.plugin.email.IEmailTemplateDescriptor) : java.lang.String {
      return PickedValue.getFilename()
    }
    
    // 'value' attribute on TypeKeyInput (id=TargetIncludeDays_Input) at AdminActivityPatternDV.pcf: line 169, column 60
    function defaultSetter_104 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.TargetIncludeDays = (__VALUE_TO_SET as typekey.IncludeDaysType)
    }
    
    // 'value' attribute on TypeKeyInput (id=ActivityClass_Input) at AdminActivityPatternDV.pcf: line 38, column 43
    function defaultSetter_11 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.ActivityClass = (__VALUE_TO_SET as typekey.ActivityClass)
    }
    
    // 'value' attribute on RangeInput (id=TargetBusCalType_Input) at AdminActivityPatternDV.pcf: line 180, column 89
    function defaultSetter_110 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.TargetBusCalType = (__VALUE_TO_SET as gw.api.activity.BusCalType)
    }
    
    // 'value' attribute on TextInput (id=EscalationDays_Input) at AdminActivityPatternDV.pcf: line 186, column 40
    function defaultSetter_118 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.EscalationDays = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=EscalationHours_Input) at AdminActivityPatternDV.pcf: line 192, column 40
    function defaultSetter_122 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.EscalationHours = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=EscalationStartPoint_Input) at AdminActivityPatternDV.pcf: line 198, column 45
    function defaultSetter_126 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.EscalationStartPt = (__VALUE_TO_SET as typekey.StartPointType)
    }
    
    // 'value' attribute on TypeKeyInput (id=EscalationIncludeDays_Input) at AdminActivityPatternDV.pcf: line 204, column 45
    function defaultSetter_130 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.EscalationInclDays = (__VALUE_TO_SET as typekey.IncludeDaysType)
    }
    
    // 'value' attribute on RangeInput (id=EscalationBusCalType_Input) at AdminActivityPatternDV.pcf: line 215, column 90
    function defaultSetter_135 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.EscalationBusCalType = (__VALUE_TO_SET as gw.api.activity.BusCalType)
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at AdminActivityPatternDV.pcf: line 24, column 41
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.Subject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Category_Input) at AdminActivityPatternDV.pcf: line 52, column 47
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.Category = (__VALUE_TO_SET as typekey.ActivityCategory)
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at AdminActivityPatternDV.pcf: line 58, column 39
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.Code = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=Priority_Input) at AdminActivityPatternDV.pcf: line 65, column 39
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.Priority = (__VALUE_TO_SET as typekey.Priority)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Mandatory_Input) at AdminActivityPatternDV.pcf: line 71, column 44
    function defaultSetter_36 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.Mandatory = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Importance_Input) at AdminActivityPatternDV.pcf: line 78, column 46
    function defaultSetter_40 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.Importance = (__VALUE_TO_SET as typekey.ImportanceLevel)
    }
    
    // 'value' attribute on TypeKeyInput (id=ClaimLossType_Input) at AdminActivityPatternDV.pcf: line 84, column 39
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.ClaimLossType = (__VALUE_TO_SET as typekey.LossType)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AutomatedOnly_Input) at AdminActivityPatternDV.pcf: line 90, column 47
    function defaultSetter_49 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.AutomatedOnly = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AvailableForClosedClaim_Input) at AdminActivityPatternDV.pcf: line 98, column 52
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.ClosedClaimAvlble = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExternallyOwned_Input) at AdminActivityPatternDV.pcf: line 104, column 50
    function defaultSetter_58 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.ExternallyOwned = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=ShortSubject_Input) at AdminActivityPatternDV.pcf: line 31, column 47
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.ShortSubject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DocumentTemplateInput (id=CreateDocument_Input) at AdminActivityPatternDV.pcf: line 113, column 39
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.DocumentTemplate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on PickerInput (id=EmailTemplate_Input) at AdminActivityPatternDV.pcf: line 123, column 39
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.EmailTemplate = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Recurring_Input) at AdminActivityPatternDV.pcf: line 129, column 44
    function defaultSetter_77 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.Recurring = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at AdminActivityPatternDV.pcf: line 135, column 45
    function defaultSetter_81 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=TargetDays_Input) at AdminActivityPatternDV.pcf: line 148, column 61
    function defaultSetter_86 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.TargetDays = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TextInput (id=TargetHours_Input) at AdminActivityPatternDV.pcf: line 155, column 61
    function defaultSetter_92 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.TargetHours = (__VALUE_TO_SET as java.lang.Integer)
    }
    
    // 'value' attribute on TypeKeyInput (id=TargetStartPoint_Input) at AdminActivityPatternDV.pcf: line 162, column 61
    function defaultSetter_98 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivityPattern.TargetStartPoint = (__VALUE_TO_SET as typekey.StartPointType)
    }
    
    // 'editable' attribute on TypeKeyInput (id=ActivityClass_Input) at AdminActivityPatternDV.pcf: line 38, column 43
    function editable_9 () : java.lang.Boolean {
      return !ActivityPattern.SystemPattern
    }
    
    // 'initialValue' attribute on Variable at AdminActivityPatternDV.pcf: line 14, column 46
    function initialValue_0 () : gw.document.SymbolProvider {
      return createSymbolProvider()
    }
    
    // 'outputConversion' attribute on PickerInput (id=EmailTemplate_Input) at AdminActivityPatternDV.pcf: line 123, column 39
    function outputConversion_71 (VALUE :  java.lang.String) : java.lang.String {
      return getDisplayName(VALUE)
    }
    
    // 'required' attribute on TypeKeyInput (id=Category_Input) at AdminActivityPatternDV.pcf: line 52, column 47
    function required_19 () : java.lang.Boolean {
      return !ActivityPattern.AutomatedOnly
    }
    
    // 'valueRange' attribute on RangeInput (id=TargetBusCalType_Input) at AdminActivityPatternDV.pcf: line 180, column 89
    function valueRange_112 () : java.lang.Object {
      return getBusCalTypeRange()
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at AdminActivityPatternDV.pcf: line 24, column 41
    function valueRoot_3 () : java.lang.Object {
      return ActivityPattern
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at AdminActivityPatternDV.pcf: line 24, column 41
    function value_1 () : java.lang.String {
      return ActivityPattern.Subject
    }
    
    // 'value' attribute on TypeKeyInput (id=ActivityClass_Input) at AdminActivityPatternDV.pcf: line 38, column 43
    function value_10 () : typekey.ActivityClass {
      return ActivityPattern.ActivityClass
    }
    
    // 'value' attribute on TypeKeyInput (id=TargetIncludeDays_Input) at AdminActivityPatternDV.pcf: line 169, column 60
    function value_103 () : typekey.IncludeDaysType {
      return ActivityPattern.TargetIncludeDays
    }
    
    // 'value' attribute on RangeInput (id=TargetBusCalType_Input) at AdminActivityPatternDV.pcf: line 180, column 89
    function value_109 () : gw.api.activity.BusCalType {
      return ActivityPattern.TargetBusCalType
    }
    
    // 'value' attribute on TextInput (id=EscalationDays_Input) at AdminActivityPatternDV.pcf: line 186, column 40
    function value_117 () : java.lang.Integer {
      return ActivityPattern.EscalationDays
    }
    
    // 'value' attribute on TextInput (id=EscalationHours_Input) at AdminActivityPatternDV.pcf: line 192, column 40
    function value_121 () : java.lang.Integer {
      return ActivityPattern.EscalationHours
    }
    
    // 'value' attribute on TypeKeyInput (id=EscalationStartPoint_Input) at AdminActivityPatternDV.pcf: line 198, column 45
    function value_125 () : typekey.StartPointType {
      return ActivityPattern.EscalationStartPt
    }
    
    // 'value' attribute on TypeKeyInput (id=EscalationIncludeDays_Input) at AdminActivityPatternDV.pcf: line 204, column 45
    function value_129 () : typekey.IncludeDaysType {
      return ActivityPattern.EscalationInclDays
    }
    
    // 'value' attribute on RangeInput (id=EscalationBusCalType_Input) at AdminActivityPatternDV.pcf: line 215, column 90
    function value_134 () : gw.api.activity.BusCalType {
      return ActivityPattern.EscalationBusCalType
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at AdminActivityPatternDV.pcf: line 45, column 43
    function value_15 () : typekey.ActivityType {
      return ActivityPattern.Type
    }
    
    // 'value' attribute on TypeKeyInput (id=Category_Input) at AdminActivityPatternDV.pcf: line 52, column 47
    function value_20 () : typekey.ActivityCategory {
      return ActivityPattern.Category
    }
    
    // 'value' attribute on TextInput (id=Code_Input) at AdminActivityPatternDV.pcf: line 58, column 39
    function value_26 () : java.lang.String {
      return ActivityPattern.Code
    }
    
    // 'value' attribute on TypeKeyInput (id=Priority_Input) at AdminActivityPatternDV.pcf: line 65, column 39
    function value_31 () : typekey.Priority {
      return ActivityPattern.Priority
    }
    
    // 'value' attribute on BooleanRadioInput (id=Mandatory_Input) at AdminActivityPatternDV.pcf: line 71, column 44
    function value_35 () : java.lang.Boolean {
      return ActivityPattern.Mandatory
    }
    
    // 'value' attribute on TypeKeyInput (id=Importance_Input) at AdminActivityPatternDV.pcf: line 78, column 46
    function value_39 () : typekey.ImportanceLevel {
      return ActivityPattern.Importance
    }
    
    // 'value' attribute on TypeKeyInput (id=ClaimLossType_Input) at AdminActivityPatternDV.pcf: line 84, column 39
    function value_43 () : typekey.LossType {
      return ActivityPattern.ClaimLossType
    }
    
    // 'value' attribute on BooleanRadioInput (id=AutomatedOnly_Input) at AdminActivityPatternDV.pcf: line 90, column 47
    function value_48 () : java.lang.Boolean {
      return ActivityPattern.AutomatedOnly
    }
    
    // 'value' attribute on TextInput (id=ShortSubject_Input) at AdminActivityPatternDV.pcf: line 31, column 47
    function value_5 () : java.lang.String {
      return ActivityPattern.ShortSubject
    }
    
    // 'value' attribute on BooleanRadioInput (id=AvailableForClosedClaim_Input) at AdminActivityPatternDV.pcf: line 98, column 52
    function value_53 () : java.lang.Boolean {
      return ActivityPattern.ClosedClaimAvlble
    }
    
    // 'value' attribute on BooleanRadioInput (id=ExternallyOwned_Input) at AdminActivityPatternDV.pcf: line 104, column 50
    function value_57 () : java.lang.Boolean {
      return ActivityPattern.ExternallyOwned
    }
    
    // 'value' attribute on DocumentTemplateInput (id=CreateDocument_Input) at AdminActivityPatternDV.pcf: line 113, column 39
    function value_64 () : java.lang.String {
      return ActivityPattern.DocumentTemplate
    }
    
    // 'value' attribute on PickerInput (id=EmailTemplate_Input) at AdminActivityPatternDV.pcf: line 123, column 39
    function value_72 () : java.lang.String {
      return ActivityPattern.EmailTemplate
    }
    
    // 'value' attribute on BooleanRadioInput (id=Recurring_Input) at AdminActivityPatternDV.pcf: line 129, column 44
    function value_76 () : java.lang.Boolean {
      return ActivityPattern.Recurring
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at AdminActivityPatternDV.pcf: line 135, column 45
    function value_80 () : java.lang.String {
      return ActivityPattern.Description
    }
    
    // 'value' attribute on TextInput (id=TargetDays_Input) at AdminActivityPatternDV.pcf: line 148, column 61
    function value_85 () : java.lang.Integer {
      return ActivityPattern.TargetDays
    }
    
    // 'value' attribute on TextInput (id=TargetHours_Input) at AdminActivityPatternDV.pcf: line 155, column 61
    function value_91 () : java.lang.Integer {
      return ActivityPattern.TargetHours
    }
    
    // 'value' attribute on TypeKeyInput (id=TargetStartPoint_Input) at AdminActivityPatternDV.pcf: line 162, column 61
    function value_97 () : typekey.StartPointType {
      return ActivityPattern.TargetStartPoint
    }
    
    // 'valueRange' attribute on RangeInput (id=TargetBusCalType_Input) at AdminActivityPatternDV.pcf: line 180, column 89
    function verifyValueRangeIsAllowedType_113 ($$arg :  gw.api.activity.BusCalType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TargetBusCalType_Input) at AdminActivityPatternDV.pcf: line 180, column 89
    function verifyValueRangeIsAllowedType_113 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EscalationBusCalType_Input) at AdminActivityPatternDV.pcf: line 215, column 90
    function verifyValueRangeIsAllowedType_138 ($$arg :  gw.api.activity.BusCalType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=EscalationBusCalType_Input) at AdminActivityPatternDV.pcf: line 215, column 90
    function verifyValueRangeIsAllowedType_138 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=TargetBusCalType_Input) at AdminActivityPatternDV.pcf: line 180, column 89
    function verifyValueRange_114 () : void {
      var __valueRangeArg = getBusCalTypeRange()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_113(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=EscalationBusCalType_Input) at AdminActivityPatternDV.pcf: line 215, column 90
    function verifyValueRange_139 () : void {
      var __valueRangeArg = getBusCalTypeRange()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_138(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=TargetBusCalType_Input) at AdminActivityPatternDV.pcf: line 180, column 89
    function visible_108 () : java.lang.Boolean {
      return ActivityPattern.TargetIncludeDays == IncludeDaysType.TC_BUSINESSDAYS
    }
    
    // 'visible' attribute on RangeInput (id=EscalationBusCalType_Input) at AdminActivityPatternDV.pcf: line 215, column 90
    function visible_133 () : java.lang.Boolean {
      return ActivityPattern.EscalationInclDays == IncludeDaysType.TC_BUSINESSDAYS
    }
    
    // 'visible' attribute on TextInput (id=TargetDays_Input) at AdminActivityPatternDV.pcf: line 148, column 61
    function visible_84 () : java.lang.Boolean {
      return ActivityPattern.ActivityClass == TC_TASK
    }
    
    property get ActivityPattern () : ActivityPattern {
      return getRequireValue("ActivityPattern", 0) as ActivityPattern
    }
    
    property set ActivityPattern ($arg :  ActivityPattern) {
      setRequireValue("ActivityPattern", 0, $arg)
    }
    
    property get symbolProvider () : gw.document.SymbolProvider {
      return getVariableValue("symbolProvider", 0) as gw.document.SymbolProvider
    }
    
    property set symbolProvider ($arg :  gw.document.SymbolProvider) {
      setVariableValue("symbolProvider", 0, $arg)
    }
    
    
          function createSymbolProvider(): SymbolProvider {
            return new GosuCaseInsensitiveBackwardsCompatibleSymbolProvider({
              "Activity"->new SimpleSymbol(entity.Activity, new Object()),
              "Claim"->new SimpleSymbol(entity.Claim, new Object())
            })
          }
    
          function getBusCalTypeRange(): java.util.List<gw.api.activity.BusCalType> {
            try {
              return gw.api.activity.BusCalType.createListWithLocations(
                {
                  DisplayKey.get("Web.Admin.ActivityPatterns.ClaimLossLocation")->"Activity.Claim.LossLocation"
                });
            } catch (e: java.lang.Throwable) {
              throw new gw.api.util.DisplayableException(DisplayKey.get("Web.ActivityPattern.Configuration.BusinessCalendarLocation.Error"));
            }
          }
    
          function getDisplayName(templateFilename: String): String {
            if (templateFilename == null) {
              return null;
            }
            var ets = gw.pcf.specialhandling.EmailTemplateUtil.EmailTemplatePlugin
            if (ets.getEmailTemplate(templateFilename) == null) {
              return DisplayKey.get("Web.Email.TemplateNotFound");
            }
            return ets.getEmailTemplate(templateFilename).getName();
          }
    
    
  }
  
  
}