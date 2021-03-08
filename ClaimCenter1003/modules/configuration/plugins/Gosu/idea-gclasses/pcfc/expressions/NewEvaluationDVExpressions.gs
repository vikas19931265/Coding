package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/newother/NewEvaluationDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class NewEvaluationDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/newother/NewEvaluationDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class NewEvaluationDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=SettlementCostEstimate_Name_Input) at NewEvaluationDV.pcf: line 19, column 34
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=LiabilityDistribution_InsuredLiability_Input) at NewEvaluationDV.pcf: line 37, column 42
    function defaultSetter_14 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.InsuredLiability = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=LiabilityDistribution_ClaimantLiability_Input) at NewEvaluationDV.pcf: line 47, column 43
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.ClaimantLiability = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextInput (id=LiabilityDistribution_OtherLiability_Input) at NewEvaluationDV.pcf: line 54, column 43
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.OtherLiability = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_HospitalER_Input) at NewEvaluationDV.pcf: line 64, column 39
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.HospitalER = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_TreatingPhysician_Input) at NewEvaluationDV.pcf: line 74, column 46
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.TreatingPhysician = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_PhysicalTherapy_Input) at NewEvaluationDV.pcf: line 84, column 44
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.PhysicalTherapy = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_Diagnostic_Input) at NewEvaluationDV.pcf: line 94, column 39
    function defaultSetter_38 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.Diagnostic = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_MedicalEquipment_Input) at NewEvaluationDV.pcf: line 104, column 45
    function defaultSetter_42 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.MedicalEquipment = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_FutureMedical_Input) at NewEvaluationDV.pcf: line 114, column 42
    function defaultSetter_46 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.FutureMedical = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on RangeInput (id=Note_RelatedTo_Input) at NewEvaluationDV.pcf: line 30, column 50
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.RelatedTo = (__VALUE_TO_SET as gw.pl.persistence.core.Bean)
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_ClmtOutOfPocket_Input) at NewEvaluationDV.pcf: line 124, column 44
    function defaultSetter_50 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.ClmtOutOfPocket = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_Other_Input) at NewEvaluationDV.pcf: line 134, column 34
    function defaultSetter_54 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.Other = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=NonEconomicDamages_Low_Input) at NewEvaluationDV.pcf: line 154, column 32
    function defaultSetter_61 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.Low = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=NonEconomicDamages_High_Input) at NewEvaluationDV.pcf: line 164, column 33
    function defaultSetter_65 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.High = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=NonEconomicDamages_Likely_Input) at NewEvaluationDV.pcf: line 174, column 35
    function defaultSetter_69 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.Likely = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on CurrencyInput (id=TotalValue_Amount_Input) at NewEvaluationDV.pcf: line 205, column 36
    function defaultSetter_79 (__VALUE_TO_SET :  java.lang.Object) : void {
      Evaluation.Amount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'optionGroupLabel' attribute on RangeInput (id=Note_RelatedTo_Input) at NewEvaluationDV.pcf: line 30, column 50
    function optionGroupLabel_7 (VALUE :  gw.pl.persistence.core.Bean) : java.lang.String {
      return gw.pcf.RelatedToUtil.getOptionGroupLabel(VALUE as KeyableBean)
    }
    
    // 'optionLabel' attribute on RangeInput (id=Note_RelatedTo_Input) at NewEvaluationDV.pcf: line 30, column 50
    function optionLabel_8 (VALUE :  gw.pl.persistence.core.Bean) : java.lang.String {
      return gw.pcf.RelatedToUtil.getOptionLabel(VALUE as KeyableBean)
    }
    
    // 'valueRange' attribute on RangeInput (id=Note_RelatedTo_Input) at NewEvaluationDV.pcf: line 30, column 50
    function valueRange_9 () : java.lang.Object {
      return Evaluation.Claim.RelatedToCandidates
    }
    
    // 'value' attribute on TextInput (id=SettlementCostEstimate_Name_Input) at NewEvaluationDV.pcf: line 19, column 34
    function valueRoot_2 () : java.lang.Object {
      return Evaluation
    }
    
    // 'value' attribute on TextInput (id=SettlementCostEstimate_Name_Input) at NewEvaluationDV.pcf: line 19, column 34
    function value_0 () : java.lang.String {
      return Evaluation.Name
    }
    
    // 'value' attribute on TextInput (id=LiabilityDistribution_InsuredLiability_Input) at NewEvaluationDV.pcf: line 37, column 42
    function value_13 () : java.math.BigDecimal {
      return Evaluation.InsuredLiability
    }
    
    // 'value' attribute on TextInput (id=LiabilityDistribution_ClaimantLiability_Input) at NewEvaluationDV.pcf: line 47, column 43
    function value_17 () : java.math.BigDecimal {
      return Evaluation.ClaimantLiability
    }
    
    // 'value' attribute on TextInput (id=LiabilityDistribution_OtherLiability_Input) at NewEvaluationDV.pcf: line 54, column 43
    function value_21 () : java.math.BigDecimal {
      return Evaluation.OtherLiability
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_HospitalER_Input) at NewEvaluationDV.pcf: line 64, column 39
    function value_25 () : gw.api.financials.CurrencyAmount {
      return Evaluation.HospitalER
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_TreatingPhysician_Input) at NewEvaluationDV.pcf: line 74, column 46
    function value_29 () : gw.api.financials.CurrencyAmount {
      return Evaluation.TreatingPhysician
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_PhysicalTherapy_Input) at NewEvaluationDV.pcf: line 84, column 44
    function value_33 () : gw.api.financials.CurrencyAmount {
      return Evaluation.PhysicalTherapy
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_Diagnostic_Input) at NewEvaluationDV.pcf: line 94, column 39
    function value_37 () : gw.api.financials.CurrencyAmount {
      return Evaluation.Diagnostic
    }
    
    // 'value' attribute on RangeInput (id=Note_RelatedTo_Input) at NewEvaluationDV.pcf: line 30, column 50
    function value_4 () : gw.pl.persistence.core.Bean {
      return Evaluation.RelatedTo
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_MedicalEquipment_Input) at NewEvaluationDV.pcf: line 104, column 45
    function value_41 () : gw.api.financials.CurrencyAmount {
      return Evaluation.MedicalEquipment
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_FutureMedical_Input) at NewEvaluationDV.pcf: line 114, column 42
    function value_45 () : gw.api.financials.CurrencyAmount {
      return Evaluation.FutureMedical
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_ClmtOutOfPocket_Input) at NewEvaluationDV.pcf: line 124, column 44
    function value_49 () : gw.api.financials.CurrencyAmount {
      return Evaluation.ClmtOutOfPocket
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_Other_Input) at NewEvaluationDV.pcf: line 134, column 34
    function value_53 () : gw.api.financials.CurrencyAmount {
      return Evaluation.Other
    }
    
    // 'value' attribute on CurrencyInput (id=EconomicDamages_Total_Input) at NewEvaluationDV.pcf: line 144, column 50
    function value_57 () : gw.api.financials.CurrencyAmount {
      return Evaluation.TotalEconomicDamages
    }
    
    // 'value' attribute on CurrencyInput (id=NonEconomicDamages_Low_Input) at NewEvaluationDV.pcf: line 154, column 32
    function value_60 () : gw.api.financials.CurrencyAmount {
      return Evaluation.Low
    }
    
    // 'value' attribute on CurrencyInput (id=NonEconomicDamages_High_Input) at NewEvaluationDV.pcf: line 164, column 33
    function value_64 () : gw.api.financials.CurrencyAmount {
      return Evaluation.High
    }
    
    // 'value' attribute on CurrencyInput (id=NonEconomicDamages_Likely_Input) at NewEvaluationDV.pcf: line 174, column 35
    function value_68 () : gw.api.financials.CurrencyAmount {
      return Evaluation.Likely
    }
    
    // 'value' attribute on CurrencyInput (id=TotalValue_Low_Input) at NewEvaluationDV.pcf: line 186, column 141
    function value_72 () : gw.api.financials.CurrencyAmount {
      return Evaluation.calculateTotalValue(Evaluation.TotalEconomicDamages.Amount, Evaluation.Low.Amount, Evaluation.InsuredLiability)
    }
    
    // 'value' attribute on CurrencyInput (id=TotalValue_High_Input) at NewEvaluationDV.pcf: line 192, column 142
    function value_74 () : gw.api.financials.CurrencyAmount {
      return Evaluation.calculateTotalValue(Evaluation.TotalEconomicDamages.Amount, Evaluation.High.Amount, Evaluation.InsuredLiability)
    }
    
    // 'value' attribute on CurrencyInput (id=TotalValue_Likely_Input) at NewEvaluationDV.pcf: line 198, column 144
    function value_76 () : gw.api.financials.CurrencyAmount {
      return Evaluation.calculateTotalValue(Evaluation.TotalEconomicDamages.Amount, Evaluation.Likely.Amount, Evaluation.InsuredLiability)
    }
    
    // 'value' attribute on CurrencyInput (id=TotalValue_Amount_Input) at NewEvaluationDV.pcf: line 205, column 36
    function value_78 () : gw.api.financials.CurrencyAmount {
      return Evaluation.Amount
    }
    
    // 'value' attribute on TextInput (id=TotalValue_AvailableReserves_Input) at NewEvaluationDV.pcf: line 209, column 62
    function value_82 () : java.lang.String {
      return Evaluation.getAvailableReservesAsCurrency()
    }
    
    // 'value' attribute on TextInput (id=TotalValue_TotalIncurredNet_Input) at NewEvaluationDV.pcf: line 213, column 61
    function value_84 () : java.lang.String {
      return Evaluation.getTotalIncurredNetAsCurrency()
    }
    
    // 'valueRange' attribute on RangeInput (id=Note_RelatedTo_Input) at NewEvaluationDV.pcf: line 30, column 50
    function verifyValueRangeIsAllowedType_10 ($$arg :  gw.pl.persistence.core.Bean[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Note_RelatedTo_Input) at NewEvaluationDV.pcf: line 30, column 50
    function verifyValueRangeIsAllowedType_10 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Note_RelatedTo_Input) at NewEvaluationDV.pcf: line 30, column 50
    function verifyValueRange_11 () : void {
      var __valueRangeArg = Evaluation.Claim.RelatedToCandidates
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_10(__valueRangeArg)
    }
    
    property get Evaluation () : Evaluation {
      return getRequireValue("Evaluation", 0) as Evaluation
    }
    
    property set Evaluation ($arg :  Evaluation) {
      setRequireValue("Evaluation", 0, $arg)
    }
    
    
  }
  
  
}