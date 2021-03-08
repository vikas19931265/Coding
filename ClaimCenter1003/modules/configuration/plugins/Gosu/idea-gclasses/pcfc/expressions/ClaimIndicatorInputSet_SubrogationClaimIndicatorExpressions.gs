package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/summary/indicator/ClaimIndicatorInputSet.SubrogationClaimIndicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimIndicatorInputSet_SubrogationClaimIndicatorExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/summary/indicator/ClaimIndicatorInputSet.SubrogationClaimIndicator.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimIndicatorInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=SubrogationStatusSetter_Input) at ClaimIndicatorInputSet.SubrogationClaimIndicator.pcf: line 18, column 60
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      indicator.Claim.SubrogationStatus = (__VALUE_TO_SET as typekey.SubrogationStatus)
    }
    
    // 'editable' attribute on TypeKeyInput (id=SubrogationStatusSetter_Input) at ClaimIndicatorInputSet.SubrogationClaimIndicator.pcf: line 18, column 60
    function editable_0 () : java.lang.Boolean {
      return indicator.Claim.SubrogationStatus == null
    }
    
    // 'filter' attribute on TypeKeyInput (id=SubrogationStatusSetter_Input) at ClaimIndicatorInputSet.SubrogationClaimIndicator.pcf: line 18, column 60
    function filter_5 (VALUE :  typekey.SubrogationStatus, VALUES :  typekey.SubrogationStatus[]) : java.util.List<typekey.SubrogationStatus> {
      return VALUES.where(\status -> status == TC_OPEN or status == TC_REVIEW).toList()
    }
    
    // 'iconColor' attribute on Link (id=SubrogationStatusIcon) at ClaimIndicatorInputSet.SubrogationClaimIndicator.pcf: line 27, column 35
    function iconColor_11 () : gw.api.web.color.GWColor {
      return indicator.IconColor
    }
    
    // 'icon' attribute on Link (id=SubrogationStatusIcon) at ClaimIndicatorInputSet.SubrogationClaimIndicator.pcf: line 27, column 35
    function icon_10 () : java.lang.String {
      return indicator.Icon
    }
    
    // 'label' attribute on Link (id=SubrogationStatusText) at ClaimIndicatorInputSet.SubrogationClaimIndicator.pcf: line 30, column 33
    function label_12 () : java.lang.Object {
      return indicator.Text
    }
    
    // 'value' attribute on TypeKeyInput (id=SubrogationStatusSetter_Input) at ClaimIndicatorInputSet.SubrogationClaimIndicator.pcf: line 18, column 60
    function valueRoot_4 () : java.lang.Object {
      return indicator.Claim
    }
    
    // 'value' attribute on TypeKeyInput (id=SubrogationStatusSetter_Input) at ClaimIndicatorInputSet.SubrogationClaimIndicator.pcf: line 18, column 60
    function value_2 () : typekey.SubrogationStatus {
      return indicator.Claim.SubrogationStatus
    }
    
    // 'visible' attribute on ContentInput at ClaimIndicatorInputSet.SubrogationClaimIndicator.pcf: line 21, column 59
    function visible_13 () : java.lang.Boolean {
      return indicator.Claim.SubrogationStatus != null
    }
    
    // 'visible' attribute on Link (id=SubrogationStatusIcon) at ClaimIndicatorInputSet.SubrogationClaimIndicator.pcf: line 27, column 35
    function visible_9 () : java.lang.Boolean {
      return indicator.IsOn
    }
    
    property get indicator () : ClaimIndicator {
      return getRequireValue("indicator", 0) as ClaimIndicator
    }
    
    property set indicator ($arg :  ClaimIndicator) {
      setRequireValue("indicator", 0, $arg)
    }
    
    
  }
  
  
}