package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/servicerequests/ServiceRequestMessageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ServiceRequestMessageDVExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/servicerequests/ServiceRequestMessageDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ServiceRequestMessageDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=MessageFrom_Input) at ServiceRequestMessageDV.pcf: line 15, column 45
    function valueRoot_1 () : java.lang.Object {
      return message.Author
    }
    
    // 'value' attribute on DateInput (id=MessageSendDate_Input) at ServiceRequestMessageDV.pcf: line 24, column 35
    function valueRoot_4 () : java.lang.Object {
      return message
    }
    
    // 'value' attribute on TextInput (id=MessageFrom_Input) at ServiceRequestMessageDV.pcf: line 15, column 45
    function value_0 () : java.lang.String {
      return message.Author.DisplayName
    }
    
    // 'value' attribute on DateInput (id=MessageSendDate_Input) at ServiceRequestMessageDV.pcf: line 24, column 35
    function value_3 () : java.util.Date {
      return message.SendDate
    }
    
    // 'value' attribute on TypeKeyInput (id=MessageType_Input) at ServiceRequestMessageDV.pcf: line 31, column 56
    function value_6 () : typekey.ServiceRequestMessageType {
      return message.Type
    }
    
    // 'value' attribute on PreFormattedTextInput (id=MessageBody_Input) at ServiceRequestMessageDV.pcf: line 37, column 31
    function value_9 () : java.lang.String {
      return message.Body
    }
    
    property get message () : ServiceRequestMessage {
      return getRequireValue("message", 0) as ServiceRequestMessage
    }
    
    property set message ($arg :  ServiceRequestMessage) {
      setRequireValue("message", 0, $arg)
    }
    
    
  }
  
  
}