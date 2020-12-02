package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/lossdetails/sidetails/SIDetails.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SIDetailsExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/sidetails/SIDetails.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PanelIteratorEntryExpressionsImpl extends SIDetailsExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on PanelRef at SIDetails.pcf: line 56, column 55
    function def_onEnter_8 (def :  pcf.QuestionSetLV) : void {
      def.onEnter(QuestionSet, Claim)
    }
    
    // 'def' attribute on PanelRef at SIDetails.pcf: line 56, column 55
    function def_refreshVariables_9 (def :  pcf.QuestionSetLV) : void {
      def.refreshVariables(QuestionSet, Claim)
    }
    
    // 'title' attribute on TitleBar (id=QuestionSetTitle) at SIDetails.pcf: line 59, column 104
    function title_7 () : java.lang.String {
      return DisplayKey.get("NVV.Claim.SubView.Questionnaire", QuestionSet.Name)
    }
    
    property get QuestionSet () : entity.QuestionSet {
      return getIteratedValue(1) as entity.QuestionSet
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/lossdetails/sidetails/SIDetails.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SIDetailsExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (Claim :  Claim) : int {
      return 0
    }
    
    // 'canEdit' attribute on Page (id=SIDetails) at SIDetails.pcf: line 9, column 61
    function canEdit_36 () : java.lang.Boolean {
      return perm.Claim.edit(Claim)
    }
    
    // 'canVisit' attribute on Page (id=SIDetails) at SIDetails.pcf: line 9, column 61
    static function canVisit_37 (Claim :  Claim) : java.lang.Boolean {
      return perm.Claim.view(Claim) and perm.System.viewclaimbasics
    }
    
    // 'def' attribute on PanelRef at SIDetails.pcf: line 29, column 39
    function def_onEnter_2 (def :  pcf.SItriggersLV) : void {
      def.onEnter(Claim)
    }
    
    // 'def' attribute on PanelRef at SIDetails.pcf: line 29, column 39
    function def_refreshVariables_3 (def :  pcf.SItriggersLV) : void {
      def.refreshVariables(Claim)
    }
    
    // 'value' attribute on TypeKeyInput (id=SIinfo_SIescalateSIU_Input) at SIDetails.pcf: line 95, column 43
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.SIEscalateSIU = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on TextInput (id=SIinfo_SIEscalateSIUNote_Input) at SIDetails.pcf: line 109, column 60
    function defaultSetter_31 (__VALUE_TO_SET :  java.lang.Object) : void {
      Claim.SIEscalateSIUNote = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on TypeKeyInput (id=SIinfo_SIescalateSIU_Input) at SIDetails.pcf: line 95, column 43
    function editable_17 () : java.lang.Boolean {
      return perm.System.editSensSIUdetails and Claim.SIEscalateSIU == TC_NO 
    }
    
    // 'editable' attribute on TextInput (id=SIinfo_SIEscalateSIUNote_Input) at SIDetails.pcf: line 109, column 60
    function editable_28 () : java.lang.Boolean {
      return perm.System.editSensSIUdetails
    }
    
    // 'initialValue' attribute on Variable at SIDetails.pcf: line 18, column 29
    function initialValue_0 () : QuestionSet[] {
      return Claim.getQuestionSets(util.QuestionUtils.getAppropriateQuestionSet(Claim))
    }
    
    // EditButtons at SIDetails.pcf: line 22, column 23
    function label_1 () : java.lang.Object {
      return gw.api.util.LocationUtil.hasOwnBundle(CurrentLocation) ? DisplayKey.get("Button.Update") : DisplayKey.get("Button.OK")
    }
    
    // 'label' attribute on TextInput (id=SIinfo_SITotalScore_Input) at SIDetails.pcf: line 86, column 48
    function label_13 () : java.lang.Object {
      return DisplayKey.get("NVV.Claim.SubView.SIinfo.SITotalScore", ScriptParameters.SpecialInvestigation_CreateActivityForSupervisorThreshold)
    }
    
    // Page (id=SIDetails) at SIDetails.pcf: line 9, column 61
    static function parent_38 (Claim :  Claim) : pcf.api.Destination {
      return pcf.ClaimLossDetailsGroup.createDestination(Claim)
    }
    
    // 'value' attribute on TextInput (id=SIinfo_SIscore_Input) at SIDetails.pcf: line 40, column 48
    function valueRoot_5 () : java.lang.Object {
      return Claim
    }
    
    // 'value' attribute on PanelIterator (id=SIUQuestionSetIterator) at SIDetails.pcf: line 54, column 46
    function value_10 () : entity.QuestionSet[] {
      return QuestionSets
    }
    
    // 'value' attribute on TextInput (id=SIUQuestionSetTotalScore_Input) at SIDetails.pcf: line 69, column 48
    function value_11 () : java.lang.Integer {
      return util.QuestionUtils.getQuestionSetTotalScore(Claim, QuestionSets)
    }
    
    // 'value' attribute on TextInput (id=SIinfo_SITotalScore_Input) at SIDetails.pcf: line 86, column 48
    function value_14 () : java.lang.Integer {
      return util.SIUTotalScore.getSIUTotalScore(Claim)
    }
    
    // 'value' attribute on TypeKeyInput (id=SIinfo_SIescalateSIU_Input) at SIDetails.pcf: line 95, column 43
    function value_18 () : typekey.YesNo {
      return Claim.SIEscalateSIU
    }
    
    // 'value' attribute on DateInput (id=SIinfo_SIescalateSIUdate_Input) at SIDetails.pcf: line 102, column 60
    function value_24 () : java.util.Date {
      return Claim.SIEscalateSIUdate
    }
    
    // 'value' attribute on TextInput (id=SIinfo_SIEscalateSIUNote_Input) at SIDetails.pcf: line 109, column 60
    function value_30 () : java.lang.String {
      return Claim.SIEscalateSIUNote
    }
    
    // 'value' attribute on TextInput (id=SIinfo_SIscore_Input) at SIDetails.pcf: line 40, column 48
    function value_4 () : java.lang.Integer {
      return Claim.SIScore
    }
    
    // 'visible' attribute on DateInput (id=SIinfo_SIescalateSIUdate_Input) at SIDetails.pcf: line 102, column 60
    function visible_23 () : java.lang.Boolean {
      return  Claim.SIEscalateSIU == TC_YES 
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    override property get CurrentLocation () : pcf.SIDetails {
      return super.CurrentLocation as pcf.SIDetails
    }
    
    property get QuestionSets () : QuestionSet[] {
      return getVariableValue("QuestionSets", 0) as QuestionSet[]
    }
    
    property set QuestionSets ($arg :  QuestionSet[]) {
      setVariableValue("QuestionSets", 0, $arg)
    }
    
    
  }
  
  
}