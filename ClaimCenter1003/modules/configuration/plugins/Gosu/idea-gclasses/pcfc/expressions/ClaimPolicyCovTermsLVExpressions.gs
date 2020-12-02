package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/policy/CovTerm/ClaimPolicyCovTermsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ClaimPolicyCovTermsLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/policy/CovTerm/ClaimPolicyCovTermsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ClaimPolicyCovTermsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'editable' attribute on RowIterator at ClaimPolicyCovTermsLV.pcf: line 20, column 36
    function editable_5 () : java.lang.Boolean {
      return !Coverage.Policy.Verified
    }
    
    // 'sortBy' attribute on IteratorSort at ClaimPolicyCovTermsLV.pcf: line 23, column 24
    function sortBy_0 (covTerm :  entity.CovTerm) : java.lang.Object {
      return covTerm.CovTermOrder
    }
    
    // 'value' attribute on TypeKeyCell (id=CovTermPattern_Cell) at ClaimPolicyCovTermsLV.pcf: line 32, column 47
    function sortValue_1 (covTerm :  entity.CovTerm) : java.lang.Object {
      return covTerm.CovTermPattern
    }
    
    // 'value' attribute on TypeKeyCell (id=ModelRestriction_Cell) at ClaimPolicyCovTermsLV.pcf: line 39, column 25
    function sortValue_2 (covTerm :  entity.CovTerm) : java.lang.Object {
      return covTerm.ModelRestriction
    }
    
    // 'value' attribute on TextCell (id=CovTermUnits_Cell) at ClaimPolicyCovTermsLV.pcf: line 48, column 57
    function sortValue_3 (covTerm :  entity.CovTerm) : java.lang.Object {
      return covTerm typeis NumericCovTerm ? (covTerm as NumericCovTerm).Units.DisplayName : covTerm.DisplayName
    }
    
    // 'value' attribute on TypeKeyCell (id=ModelAggregation_Cell) at ClaimPolicyCovTermsLV.pcf: line 54, column 25
    function sortValue_4 (covTerm :  entity.CovTerm) : java.lang.Object {
      return covTerm.ModelAggregation
    }
    
    // 'toRemove' attribute on RowIterator at ClaimPolicyCovTermsLV.pcf: line 20, column 36
    function toRemove_29 (covTerm :  entity.CovTerm) : void {
      Coverage.removeFromCovTerms(covTerm)
    }
    
    // 'value' attribute on RowIterator at ClaimPolicyCovTermsLV.pcf: line 20, column 36
    function value_30 () : entity.CovTerm[] {
      return Coverage.CovTerms
    }
    
    property get Coverage () : Coverage {
      return getRequireValue("Coverage", 0) as Coverage
    }
    
    property set Coverage ($arg :  Coverage) {
      setRequireValue("Coverage", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/policy/CovTerm/ClaimPolicyCovTermsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends ClaimPolicyCovTermsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TypeKeyCell (id=CovTermPattern_Cell) at ClaimPolicyCovTermsLV.pcf: line 32, column 47
    function action_6 () : void {
      CovTermPopup.push(covTerm, CurrentLocation.InEditMode)
    }
    
    // 'action' attribute on TypeKeyCell (id=CovTermPattern_Cell) at ClaimPolicyCovTermsLV.pcf: line 32, column 47
    function action_dest_7 () : pcf.api.Destination {
      return pcf.CovTermPopup.createDestination(covTerm, CurrentLocation.InEditMode)
    }
    
    // 'def' attribute on ModalCellRef at ClaimPolicyCovTermsLV.pcf: line 43, column 39
    function def_onEnter_14 (def :  pcf.CovTermAmount_Classification) : void {
      def.onEnter(covTerm)
    }
    
    // 'def' attribute on ModalCellRef at ClaimPolicyCovTermsLV.pcf: line 43, column 39
    function def_onEnter_16 (def :  pcf.CovTermAmount_Financial) : void {
      def.onEnter(covTerm)
    }
    
    // 'def' attribute on ModalCellRef at ClaimPolicyCovTermsLV.pcf: line 43, column 39
    function def_onEnter_18 (def :  pcf.CovTermAmount_Numeric) : void {
      def.onEnter(covTerm)
    }
    
    // 'def' attribute on ModalCellRef at ClaimPolicyCovTermsLV.pcf: line 43, column 39
    function def_onEnter_20 (def :  pcf.CovTermAmount_default) : void {
      def.onEnter(covTerm)
    }
    
    // 'def' attribute on ModalCellRef at ClaimPolicyCovTermsLV.pcf: line 43, column 39
    function def_refreshVariables_15 (def :  pcf.CovTermAmount_Classification) : void {
      def.refreshVariables(covTerm)
    }
    
    // 'def' attribute on ModalCellRef at ClaimPolicyCovTermsLV.pcf: line 43, column 39
    function def_refreshVariables_17 (def :  pcf.CovTermAmount_Financial) : void {
      def.refreshVariables(covTerm)
    }
    
    // 'def' attribute on ModalCellRef at ClaimPolicyCovTermsLV.pcf: line 43, column 39
    function def_refreshVariables_19 (def :  pcf.CovTermAmount_Numeric) : void {
      def.refreshVariables(covTerm)
    }
    
    // 'def' attribute on ModalCellRef at ClaimPolicyCovTermsLV.pcf: line 43, column 39
    function def_refreshVariables_21 (def :  pcf.CovTermAmount_default) : void {
      def.refreshVariables(covTerm)
    }
    
    // 'mode' attribute on ModalCellRef at ClaimPolicyCovTermsLV.pcf: line 43, column 39
    function mode_22 () : java.lang.Object {
      return covTerm.CovTermMode
    }
    
    // 'value' attribute on TypeKeyCell (id=CovTermPattern_Cell) at ClaimPolicyCovTermsLV.pcf: line 32, column 47
    function valueRoot_9 () : java.lang.Object {
      return covTerm
    }
    
    // 'value' attribute on TypeKeyCell (id=ModelRestriction_Cell) at ClaimPolicyCovTermsLV.pcf: line 39, column 25
    function value_11 () : typekey.CovTermModelRest {
      return covTerm.ModelRestriction
    }
    
    // 'value' attribute on TextCell (id=CovTermUnits_Cell) at ClaimPolicyCovTermsLV.pcf: line 48, column 57
    function value_24 () : java.lang.String {
      return covTerm typeis NumericCovTerm ? (covTerm as NumericCovTerm).Units.DisplayName : covTerm.DisplayName
    }
    
    // 'value' attribute on TypeKeyCell (id=ModelAggregation_Cell) at ClaimPolicyCovTermsLV.pcf: line 54, column 25
    function value_26 () : typekey.CovTermModelAgg {
      return covTerm.ModelAggregation
    }
    
    // 'value' attribute on TypeKeyCell (id=CovTermPattern_Cell) at ClaimPolicyCovTermsLV.pcf: line 32, column 47
    function value_8 () : typekey.CovTermPattern {
      return covTerm.CovTermPattern
    }
    
    // 'valueVisible' attribute on TextCell (id=CovTermUnits_Cell) at ClaimPolicyCovTermsLV.pcf: line 48, column 57
    function visible_23 () : java.lang.Boolean {
      return covTerm typeis NumericCovTerm
    }
    
    property get covTerm () : entity.CovTerm {
      return getIteratedValue(1) as entity.CovTerm
    }
    
    
  }
  
  
}