package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/summary/indicator/ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimIndicatorInputSet_CoverageInQuestionClaimIndicatorExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/summary/indicator/ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimIndicatorInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 41, column 45
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      indicator.Claim.CoverageInQuestion = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 41, column 45
    function editable_7 () : java.lang.Boolean {
      return editCovInQuestion()
    }
    
    // 'iconColor' attribute on Link (id=CoverageInQuestionIcon) at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 29, column 35
    function iconColor_4 () : gw.api.web.color.GWColor {
      return indicator.IconColor
    }
    
    // 'icon' attribute on Link (id=CoverageInQuestionIcon) at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 29, column 35
    function icon_3 () : java.lang.String {
      return indicator.Icon
    }
    
    // 'initialValue' attribute on Variable at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 15, column 23
    function initialValue_0 () : boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'initialValue' attribute on Variable at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 19, column 75
    function initialValue_1 () : java.util.HashMap<java.lang.Object, java.lang.Object> {
      return indicator.Claim.getCoverageInQuestionFactors()
    }
    
    // 'label' attribute on Link (id=CoverageInQuestionText) at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 32, column 33
    function label_5 () : java.lang.Object {
      return indicator.Text
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 41, column 45
    function valueRoot_11 () : java.lang.Object {
      return indicator.Claim
    }
    
    // 'value' attribute on TextAreaInput (id=CoverageInQuestionReasons_Input) at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 49, column 265
    function value_16 () : java.lang.String {
      return indicator.Claim.CoverageInQuestionFormattedReasons
    }
    
    // 'value' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 41, column 45
    function value_9 () : java.lang.Boolean {
      return indicator.Claim.CoverageInQuestion
    }
    
    // 'visible' attribute on TextAreaInput (id=CoverageInQuestionReasons_Input) at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 49, column 265
    function visible_15 () : java.lang.Boolean {
      return coverageInQuestionFactors.containsKey(DisplayKey.get("Web.Claim.CoverageInQuestionClaimIndicator.PolicyStatus")) or coverageInQuestionFactors.containsKey(DisplayKey.get("Web.Claim.CoverageInQuestionClaimIndicator.LossDate"))
    }
    
    // 'visible' attribute on Link (id=CoverageInQuestionIcon) at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 29, column 35
    function visible_2 () : java.lang.Boolean {
      return indicator.IsOn
    }
    
    // 'visible' attribute on InputSet at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 43, column 89
    function visible_20 () : java.lang.Boolean {
      return !coverageInQuestionFactors.Empty and indicator.Claim.CoverageInQuestion
    }
    
    // 'visible' attribute on ContentInput (id=CoverageInQuestionOnLabel) at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 23, column 29
    function visible_6 () : java.lang.Boolean {
      return !inEditMode
    }
    
    // 'visible' attribute on BooleanRadioInput (id=CoverageInQuestion_Input) at ClaimIndicatorInputSet.CoverageInQuestionClaimIndicator.pcf: line 41, column 45
    function visible_8 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    property get coverageInQuestionFactors () : java.util.HashMap<java.lang.Object, java.lang.Object> {
      return getVariableValue("coverageInQuestionFactors", 0) as java.util.HashMap<java.lang.Object, java.lang.Object>
    }
    
    property set coverageInQuestionFactors ($arg :  java.util.HashMap<java.lang.Object, java.lang.Object>) {
      setVariableValue("coverageInQuestionFactors", 0, $arg)
    }
    
    property get inEditMode () : boolean {
      return getVariableValue("inEditMode", 0) as java.lang.Boolean
    }
    
    property set inEditMode ($arg :  boolean) {
      setVariableValue("inEditMode", 0, $arg)
    }
    
    property get indicator () : ClaimIndicator {
      return getRequireValue("indicator", 0) as ClaimIndicator
    }
    
    property set indicator ($arg :  ClaimIndicator) {
      setRequireValue("indicator", 0, $arg)
    }
    
    // Used to allow editing the CoverageInQuestion field. Allow editing the field if the value is not true, otherwise only
    // allow editing if the user has the unsetcovinquestion permission   
    function editCovInQuestion() : Boolean{
       if( indicator.Claim.CoverageInQuestion != true)
         return true
       else if(indicator.Claim.CoverageInQuestion == true and perm.System.unsetcovinquestion == true) 
         return true
       return false    
    }
    
    
  }
  
  
}