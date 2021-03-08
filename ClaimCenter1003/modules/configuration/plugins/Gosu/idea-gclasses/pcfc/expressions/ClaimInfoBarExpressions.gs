package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/ClaimInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimInfoBarExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/ClaimInfoBar.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimInfoBarExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'iconColor' attribute on InfoBarElement (id=ClaimOpenCloseIcon) at ClaimInfoBar.pcf: line 15, column 42
    function iconColor_2 () : gw.api.web.color.GWColor {
      return Claim.Closed ? null : gw.api.web.color.GWColor.THEME_ALERT_INFO
    }
    
    // 'iconColor' attribute on InfoBarElement (id=FlagClaimIndicator) at ClaimInfoBar.pcf: line 52, column 48
    function iconColor_21 () : gw.api.web.color.GWColor {
      return gw.api.web.color.GWColor.THEME_ALERT_ERROR
    }
    
    // 'icon' attribute on InfoBarElement (id=ClaimOpenCloseIcon) at ClaimInfoBar.pcf: line 15, column 42
    function icon_1 () : java.lang.String {
      return Claim.Closed ? "closed" : "circle"
    }
    
    // 'icon' attribute on InfoBarElement (id=LargeLossClaimIndicator) at ClaimInfoBar.pcf: line 33, column 53
    function icon_11 () : java.lang.String {
      return Claim.LargeLossClaimIndicator.Icon
    }
    
    // 'icon' attribute on InfoBarElement (id=CoverageInQuestionClaimIndicator) at ClaimInfoBar.pcf: line 39, column 62
    function icon_14 () : java.lang.String {
      return Claim.CoverageInQuestionClaimIndicator.Icon
    }
    
    // 'icon' attribute on InfoBarElement (id=SIUClaimIndicator) at ClaimInfoBar.pcf: line 45, column 47
    function icon_17 () : java.lang.String {
      return Claim.SIUClaimIndicator.Icon
    }
    
    // 'icon' attribute on InfoBarElement (id=FlagClaimIndicator) at ClaimInfoBar.pcf: line 52, column 48
    function icon_20 () : java.lang.String {
      return Claim.FlagClaimIndicator.Icon
    }
    
    // 'icon' attribute on InfoBarElement (id=SubrogationClaimIndicator) at ClaimInfoBar.pcf: line 58, column 55
    function icon_24 () : java.lang.String {
      return Claim.SubrogationClaimIndicator.Icon
    }
    
    // 'icon' attribute on InfoBarElement (id=PolicyIcon) at ClaimInfoBar.pcf: line 63, column 103
    function icon_26 () : java.lang.String {
      return Claim.Policy.PolicyType.Icon
    }
    
    // 'icon' attribute on InfoBarElement (id=LitigationClaimIndicator) at ClaimInfoBar.pcf: line 21, column 54
    function icon_5 () : java.lang.String {
      return Claim.LitigationClaimIndicator.Icon
    }
    
    // 'icon' attribute on InfoBarElement (id=FatalityClaimIndicator) at ClaimInfoBar.pcf: line 27, column 52
    function icon_8 () : java.lang.String {
      return Claim.FatalityClaimIndicator.Icon
    }
    
    // 'tooltip' attribute on InfoBarElement (id=ClaimOpenCloseIcon) at ClaimInfoBar.pcf: line 15, column 42
    function tooltip_0 () : java.lang.String {
      return Claim.State.DisplayName
    }
    
    // 'tooltip' attribute on InfoBarElement (id=LargeLossClaimIndicator) at ClaimInfoBar.pcf: line 33, column 53
    function tooltip_10 () : java.lang.String {
      return Claim.LargeLossClaimIndicator.HoverText
    }
    
    // 'tooltip' attribute on InfoBarElement (id=CoverageInQuestionClaimIndicator) at ClaimInfoBar.pcf: line 39, column 62
    function tooltip_13 () : java.lang.String {
      return Claim.CoverageInQuestionClaimIndicator.HoverText
    }
    
    // 'tooltip' attribute on InfoBarElement (id=SIUClaimIndicator) at ClaimInfoBar.pcf: line 45, column 47
    function tooltip_16 () : java.lang.String {
      return Claim.SIUClaimIndicator.HoverText
    }
    
    // 'tooltip' attribute on InfoBarElement (id=FlagClaimIndicator) at ClaimInfoBar.pcf: line 52, column 48
    function tooltip_19 () : java.lang.String {
      return Claim.FlagClaimIndicator.HoverText
    }
    
    // 'tooltip' attribute on InfoBarElement (id=SubrogationClaimIndicator) at ClaimInfoBar.pcf: line 58, column 55
    function tooltip_23 () : java.lang.String {
      return Claim.SubrogationClaimIndicator.HoverText
    }
    
    // 'tooltip' attribute on InfoBarElement (id=PolicyIcon) at ClaimInfoBar.pcf: line 63, column 103
    function tooltip_25 () : java.lang.String {
      return Claim.Policy.PolicyType == null ? "" : Claim.Policy.PolicyType.DisplayName
    }
    
    // 'tooltip' attribute on InfoBarElement (id=LitigationClaimIndicator) at ClaimInfoBar.pcf: line 21, column 54
    function tooltip_4 () : java.lang.String {
      return Claim.LitigationClaimIndicator.HoverText
    }
    
    // 'tooltip' attribute on InfoBarElement (id=FatalityClaimIndicator) at ClaimInfoBar.pcf: line 27, column 52
    function tooltip_7 () : java.lang.String {
      return Claim.FatalityClaimIndicator.HoverText
    }
    
    // 'value' attribute on InfoBarElement (id=PolicyNumber) at ClaimInfoBar.pcf: line 67, column 42
    function value_27 () : java.lang.Object {
      return Claim.Policy.PolicyNumber
    }
    
    // 'value' attribute on InfoBarElement (id=Insured) at ClaimInfoBar.pcf: line 71, column 48
    function value_28 () : java.lang.Object {
      return Claim.InsuredDenorm.DisplayName
    }
    
    // 'value' attribute on InfoBarElement (id=Claimant) at ClaimInfoBar.pcf: line 76, column 82
    function value_30 () : java.lang.Object {
      return Claim.ClaimantDenorm.DisplayName
    }
    
    // 'value' attribute on InfoBarElement (id=LossDate) at ClaimInfoBar.pcf: line 80, column 88
    function value_31 () : java.lang.Object {
      return gw.api.util.StringUtil.formatDate( Claim.LossDate, "short" ) 
    }
    
    // 'value' attribute on InfoBarElement (id=Adjuster) at ClaimInfoBar.pcf: line 85, column 42
    function value_33 () : java.lang.Object {
      return Claim.AssigneeAndGroupDisplayString
    }
    
    // 'visible' attribute on InfoBarElement (id=CoverageInQuestionClaimIndicator) at ClaimInfoBar.pcf: line 39, column 62
    function visible_12 () : java.lang.Boolean {
      return Claim.CoverageInQuestionClaimIndicator.IsOn
    }
    
    // 'visible' attribute on InfoBarElement (id=SIUClaimIndicator) at ClaimInfoBar.pcf: line 45, column 47
    function visible_15 () : java.lang.Boolean {
      return Claim.SIUClaimIndicator.IsOn
    }
    
    // 'visible' attribute on InfoBarElement (id=FlagClaimIndicator) at ClaimInfoBar.pcf: line 52, column 48
    function visible_18 () : java.lang.Boolean {
      return Claim.FlagClaimIndicator.IsOn
    }
    
    // 'visible' attribute on InfoBarElement (id=SubrogationClaimIndicator) at ClaimInfoBar.pcf: line 58, column 55
    function visible_22 () : java.lang.Boolean {
      return Claim.SubrogationClaimIndicator.IsOn
    }
    
    // 'visible' attribute on InfoBarElement (id=Claimant) at ClaimInfoBar.pcf: line 76, column 82
    function visible_29 () : java.lang.Boolean {
      return gw.config.LOBAbstraction.ForClaim.ForLossType.isWorkComp(Claim)
    }
    
    // 'visible' attribute on InfoBarElement (id=LitigationClaimIndicator) at ClaimInfoBar.pcf: line 21, column 54
    function visible_3 () : java.lang.Boolean {
      return Claim.LitigationClaimIndicator.IsOn
    }
    
    // 'visible' attribute on InfoBarElement (id=Adjuster) at ClaimInfoBar.pcf: line 85, column 42
    function visible_32 () : java.lang.Boolean {
      return Claim.State != TC_DRAFT
    }
    
    // 'visible' attribute on InfoBarElement (id=FatalityClaimIndicator) at ClaimInfoBar.pcf: line 27, column 52
    function visible_6 () : java.lang.Boolean {
      return Claim.FatalityClaimIndicator.IsOn
    }
    
    // 'visible' attribute on InfoBarElement (id=LargeLossClaimIndicator) at ClaimInfoBar.pcf: line 33, column 53
    function visible_9 () : java.lang.Boolean {
      return Claim.LargeLossClaimIndicator.IsOn
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    
  }
  
  
}