package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/planofaction/EditableNegotiationLinesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableNegotiationLinesLVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/planofaction/EditableNegotiationLinesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableNegotiationLinesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=NegotiationDate_Cell) at EditableNegotiationLinesLV.pcf: line 32, column 25
    function sortValue_0 (NegotiationLine :  entity.NegotiationLine) : java.lang.Object {
      return NegotiationLine.NegotiationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at EditableNegotiationLinesLV.pcf: line 40, column 25
    function sortValue_1 (NegotiationLine :  entity.NegotiationLine) : java.lang.Object {
      return NegotiationLine.Type
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at EditableNegotiationLinesLV.pcf: line 46, column 25
    function sortValue_2 (NegotiationLine :  entity.NegotiationLine) : java.lang.Object {
      return NegotiationLine.Amount
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableNegotiationLinesLV.pcf: line 52, column 41
    function sortValue_3 (NegotiationLine :  entity.NegotiationLine) : java.lang.Object {
      return NegotiationLine.Note
    }
    
    // 'toAdd' attribute on RowIterator at EditableNegotiationLinesLV.pcf: line 22, column 44
    function toAdd_20 (NegotiationLine :  entity.NegotiationLine) : void {
      Negotiation.addToSettleNegotiation(NegotiationLine)
    }
    
    // 'toRemove' attribute on RowIterator at EditableNegotiationLinesLV.pcf: line 22, column 44
    function toRemove_21 (NegotiationLine :  entity.NegotiationLine) : void {
      Negotiation.removeFromSettleNegotiation(NegotiationLine)
    }
    
    // 'value' attribute on RowIterator at EditableNegotiationLinesLV.pcf: line 22, column 44
    function value_22 () : entity.NegotiationLine[] {
      return Negotiation.SettleNegotiation
    }
    
    property get Negotiation () : Negotiation {
      return getRequireValue("Negotiation", 0) as Negotiation
    }
    
    property set Negotiation ($arg :  Negotiation) {
      setRequireValue("Negotiation", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/planofaction/EditableNegotiationLinesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableNegotiationLinesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at EditableNegotiationLinesLV.pcf: line 46, column 25
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      NegotiationLine.Amount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableNegotiationLinesLV.pcf: line 52, column 41
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      NegotiationLine.Note = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on DateCell (id=NegotiationDate_Cell) at EditableNegotiationLinesLV.pcf: line 32, column 25
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      NegotiationLine.NegotiationDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at EditableNegotiationLinesLV.pcf: line 40, column 25
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      NegotiationLine.Type = (__VALUE_TO_SET as typekey.NegotiationType)
    }
    
    // 'value' attribute on DateCell (id=NegotiationDate_Cell) at EditableNegotiationLinesLV.pcf: line 32, column 25
    function valueRoot_6 () : java.lang.Object {
      return NegotiationLine
    }
    
    // 'value' attribute on CurrencyCell (id=Amount_Cell) at EditableNegotiationLinesLV.pcf: line 46, column 25
    function value_12 () : gw.api.financials.CurrencyAmount {
      return NegotiationLine.Amount
    }
    
    // 'value' attribute on TextCell (id=Notes_Cell) at EditableNegotiationLinesLV.pcf: line 52, column 41
    function value_16 () : java.lang.String {
      return NegotiationLine.Note
    }
    
    // 'value' attribute on DateCell (id=NegotiationDate_Cell) at EditableNegotiationLinesLV.pcf: line 32, column 25
    function value_4 () : java.util.Date {
      return NegotiationLine.NegotiationDate
    }
    
    // 'value' attribute on TypeKeyCell (id=Type_Cell) at EditableNegotiationLinesLV.pcf: line 40, column 25
    function value_8 () : typekey.NegotiationType {
      return NegotiationLine.Type
    }
    
    property get NegotiationLine () : entity.NegotiationLine {
      return getIteratedValue(1) as entity.NegotiationLine
    }
    
    
  }
  
  
}