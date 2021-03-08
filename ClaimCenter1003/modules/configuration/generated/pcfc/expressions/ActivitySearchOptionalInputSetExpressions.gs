package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/search/activities/ActivitySearchOptionalInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivitySearchOptionalInputSetExpressions {
  @javax.annotation.Generated("config/web/pcf/search/activities/ActivitySearchOptionalInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivitySearchOptionalInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function available_31 () : java.lang.Boolean {
      return ActivitySearchCriteria.DateCriterionChoice.DateSearchType == DateSearchType.TC_FROMLIST
    }
    
    // 'available' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function available_40 () : java.lang.Boolean {
      return ActivitySearchCriteria.DateCriterionChoice.DateSearchType == DateSearchType.TC_ENTEREDRANGE
    }
    
    // 'available' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 10, column 97
    function available_59 () : java.lang.Boolean {
      return ActivitySearchCriteria.SubjectCriteria.SubjectSearchType == TC_ACTIVITYPATTERN
    }
    
    // 'available' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 19, column 87
    function available_72 () : java.lang.Boolean {
      return ActivitySearchCriteria.SubjectCriteria.SubjectSearchType == TC_CONTAINS
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at ActivitySearchOptionalInputSet.pcf: line 19, column 43
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.ActivityStatus = (__VALUE_TO_SET as typekey.ActivityStatus)
    }
    
    // 'value' attribute on BooleanDropdownInput (id=OverdueNow_Input) at ActivitySearchOptionalInputSet.pcf: line 38, column 50
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.OverdueNow = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanDropdownInput (id=PendingAssignment_Input) at ActivitySearchOptionalInputSet.pcf: line 44, column 57
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.PendingAssignment = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ActivitySearchOptionalInputSet.pcf: line 51, column 51
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.DateCriterionChoice.ChosenOption = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function defaultSetter_33 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.DateCriterionChoice.DateRangeChoice = (__VALUE_TO_SET as typekey.DateRangeChoiceType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.DateCriterionChoice.DateSearchType = (__VALUE_TO_SET as typekey.DateSearchType)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.DateCriterionChoice.StartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function defaultSetter_48 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.DateCriterionChoice.EndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=Priority_Input) at ActivitySearchOptionalInputSet.pcf: line 26, column 37
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.Priority = (__VALUE_TO_SET as typekey.Priority)
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function defaultSetter_56 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.DateCriterionChoice = (__VALUE_TO_SET as entity.DateCriterionChoice)
    }
    
    // 'value' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 10, column 97
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.SubjectCriteria.Pattern = (__VALUE_TO_SET as entity.ActivityPattern)
    }
    
    // 'value' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 5, column 46
    function defaultSetter_70 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.SubjectCriteria.SubjectSearchType = (__VALUE_TO_SET as typekey.ActivitySubjectSearchType)
    }
    
    // 'value' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 19, column 87
    function defaultSetter_75 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.SubjectCriteria.Subject = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanDropdownInput (id=CompletedLate_Input) at ActivitySearchOptionalInputSet.pcf: line 32, column 53
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      ActivitySearchCriteria.CompletedLate = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'format' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 19, column 87
    function format_73 () : java.lang.String {
      return DisplayKey.get('Java.ActivitySearch.Contains') + " #"
    }
    
    // DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function optionLabel_27 (VALUE :  java.lang.String) : java.lang.String {
      return gw.api.locale.DisplayKey.get(VALUE)
    }
    
    // 'optionLabel' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 10, column 97
    function optionLabel_63 (VALUE :  entity.ActivityPattern) : java.lang.String {
      return VALUE.Subject.HasContent ? VALUE.Subject : DisplayKey.get('Java.NewActivity.NoSubject')
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function valueRange_28 () : java.lang.Object {
      return ActivitySearchCriteria.DateCriterionChoice.Options
    }
    
    // 'valueRange' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 10, column 97
    function valueRange_64 () : java.lang.Object {
      return ActivitySearchCriteria.SubjectCriteria.AllActivityPatterns
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at ActivitySearchOptionalInputSet.pcf: line 19, column 43
    function valueRoot_2 () : java.lang.Object {
      return ActivitySearchCriteria
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function valueRoot_26 () : java.lang.Object {
      return ActivitySearchCriteria.DateCriterionChoice
    }
    
    // 'value' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 10, column 97
    function valueRoot_62 () : java.lang.Object {
      return ActivitySearchCriteria.SubjectCriteria
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at ActivitySearchOptionalInputSet.pcf: line 19, column 43
    function value_0 () : typekey.ActivityStatus {
      return ActivitySearchCriteria.ActivityStatus
    }
    
    // 'value' attribute on BooleanDropdownInput (id=OverdueNow_Input) at ActivitySearchOptionalInputSet.pcf: line 38, column 50
    function value_12 () : java.lang.Boolean {
      return ActivitySearchCriteria.OverdueNow
    }
    
    // 'value' attribute on BooleanDropdownInput (id=PendingAssignment_Input) at ActivitySearchOptionalInputSet.pcf: line 44, column 57
    function value_16 () : java.lang.Boolean {
      return ActivitySearchCriteria.PendingAssignment
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at ActivitySearchOptionalInputSet.pcf: line 51, column 51
    function value_20 () : java.lang.String {
      return ActivitySearchCriteria.Description
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function value_24 () : java.lang.String {
      return ActivitySearchCriteria.DateCriterionChoice.ChosenOption
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function value_32 () : typekey.DateRangeChoiceType {
      return ActivitySearchCriteria.DateCriterionChoice.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function value_36 () : java.lang.Object {
      return ActivitySearchCriteria.DateCriterionChoice.DateRangeChoice
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function value_37 () : typekey.DateSearchType {
      return ActivitySearchCriteria.DateCriterionChoice.DateSearchType
    }
    
    // 'value' attribute on TypeKeyInput (id=Priority_Input) at ActivitySearchOptionalInputSet.pcf: line 26, column 37
    function value_4 () : typekey.Priority {
      return ActivitySearchCriteria.Priority
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function value_41 () : java.util.Date {
      return ActivitySearchCriteria.DateCriterionChoice.StartDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function value_47 () : java.util.Date {
      return ActivitySearchCriteria.DateCriterionChoice.EndDate
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function value_55 () : entity.DateCriterionChoice {
      return ActivitySearchCriteria.DateCriterionChoice
    }
    
    // 'value' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 10, column 97
    function value_60 () : entity.ActivityPattern {
      return ActivitySearchCriteria.SubjectCriteria.Pattern
    }
    
    // 'value' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 5, column 46
    function value_69 () : typekey.ActivitySubjectSearchType {
      return ActivitySearchCriteria.SubjectCriteria.SubjectSearchType
    }
    
    // 'value' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 19, column 87
    function value_74 () : java.lang.String {
      return ActivitySearchCriteria.SubjectCriteria.Subject
    }
    
    // 'value' attribute on BooleanDropdownInput (id=CompletedLate_Input) at ActivitySearchOptionalInputSet.pcf: line 32, column 53
    function value_8 () : java.lang.Boolean {
      return ActivitySearchCriteria.CompletedLate
    }
    
    // 'value' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySearchOptionalInputSet.pcf: line 64, column 55
    function value_82 () : entity.ActivitySubjectSearchCriteria {
      return ActivitySearchCriteria.SubjectCriteria
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function verifyValueRangeIsAllowedType_29 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function verifyValueRangeIsAllowedType_29 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 10, column 97
    function verifyValueRangeIsAllowedType_65 ($$arg :  entity.ActivityPattern[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 10, column 97
    function verifyValueRangeIsAllowedType_65 ($$arg :  gw.api.database.IQueryBeanResult<entity.ActivityPattern>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 10, column 97
    function verifyValueRangeIsAllowedType_65 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'value' attribute on DateCriterionChoiceInput (id=DateSearch_Input) at ActivitySearchOptionalInputSet.pcf: line 58, column 59
    function verifyValueRange_30 () : void {
      var __valueRangeArg = ActivitySearchCriteria.DateCriterionChoice.Options
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_29(__valueRangeArg)
    }
    
    // 'valueRange' attribute on ActivitySubjectSearchInput (id=Subject_Input) at ActivitySubjectSearchWidget.xml: line 10, column 97
    function verifyValueRange_66 () : void {
      var __valueRangeArg = ActivitySearchCriteria.SubjectCriteria.AllActivityPatterns
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_65(__valueRangeArg)
    }
    
    property get ActivitySearchCriteria () : ActivitySearchCriteria {
      return getRequireValue("ActivitySearchCriteria", 0) as ActivitySearchCriteria
    }
    
    property set ActivitySearchCriteria ($arg :  ActivitySearchCriteria) {
      setRequireValue("ActivitySearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}