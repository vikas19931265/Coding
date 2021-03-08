package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/bizrules/StartRuleCsvImportPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class StartRuleCsvImportPopupExpressions {
  @javax.annotation.Generated("config/web/pcf/bizrules/StartRuleCsvImportPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class StartRuleCsvImportPopupExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    static function __constructorIndex (context :  gw.bizrules.CCRulesNavigationContext, pageHelper :  gw.bizrules.CCRulesListPageHelper) : int {
      return 0
    }
    
    // 'action' attribute on ToolbarButton (id=ImportButton) at StartRuleCsvImportPopup.pcf: line 42, column 75
    function action_4 () : void {
      csvUploader.upload(file, uploadSummary);
    }
    
    // 'action' attribute on ToolbarButton (id=CancelButton) at StartRuleCsvImportPopup.pcf: line 46, column 52
    function action_5 () : void {
      CurrentLocation.cancel()
    }
    
    // 'action' attribute on AlertBar (id=UploadSummaryAlert) at StartRuleCsvImportPopup.pcf: line 52, column 43
    function action_7 () : void {
      uploadSummary.reset()
    }
    
    // 'available' attribute on ToolbarButton (id=ImportButton) at StartRuleCsvImportPopup.pcf: line 42, column 75
    function available_3 () : java.lang.Boolean {
      return file != null
    }
    
    // 'canVisit' attribute on Popup (id=StartRuleCsvImportPopup) at StartRuleCsvImportPopup.pcf: line 12, column 63
    static function canVisit_12 (context :  gw.bizrules.CCRulesNavigationContext, pageHelper :  gw.bizrules.CCRulesListPageHelper) : java.lang.Boolean {
      return pageHelper.CsvButtonsAvailable
    }
    
    // 'value' attribute on FileInput (id=File_Input) at StartRuleCsvImportPopup.pcf: line 65, column 29
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      file = (__VALUE_TO_SET as gw.api.web.WebFile)
    }
    
    // 'initialValue' attribute on Variable at StartRuleCsvImportPopup.pcf: line 24, column 93
    function initialValue_0 () : gw.bizrules.csv.CsvFileUploaderFactory {
      return new gw.bizrules.csv.CsvFileUploaderFactory(context, CurrentLocation)
    }
    
    // 'initialValue' attribute on Variable at StartRuleCsvImportPopup.pcf: line 28, column 59
    function initialValue_1 () : gw.bizrules.csv.CsvFileUploader {
      return csvUploaderFactory.createUploader()
    }
    
    // 'initialValue' attribute on Variable at StartRuleCsvImportPopup.pcf: line 32, column 45
    function initialValue_2 () : gw.bizrules.csv.UploadSummary {
      return new gw.bizrules.csv.UploadSummary()
    }
    
    // 'label' attribute on AlertBar (id=UploadSummaryAlert) at StartRuleCsvImportPopup.pcf: line 52, column 43
    function label_8 () : java.lang.Object {
      return uploadSummary.Message
    }
    
    // 'value' attribute on FileInput (id=File_Input) at StartRuleCsvImportPopup.pcf: line 65, column 29
    function value_9 () : gw.api.web.WebFile {
      return file
    }
    
    // 'visible' attribute on AlertBar (id=UploadSummaryAlert) at StartRuleCsvImportPopup.pcf: line 52, column 43
    function visible_6 () : java.lang.Boolean {
      return uploadSummary.Finished
    }
    
    override property get CurrentLocation () : pcf.StartRuleCsvImportPopup {
      return super.CurrentLocation as pcf.StartRuleCsvImportPopup
    }
    
    property get context () : gw.bizrules.CCRulesNavigationContext {
      return getVariableValue("context", 0) as gw.bizrules.CCRulesNavigationContext
    }
    
    property set context ($arg :  gw.bizrules.CCRulesNavigationContext) {
      setVariableValue("context", 0, $arg)
    }
    
    property get csvUploader () : gw.bizrules.csv.CsvFileUploader {
      return getVariableValue("csvUploader", 0) as gw.bizrules.csv.CsvFileUploader
    }
    
    property set csvUploader ($arg :  gw.bizrules.csv.CsvFileUploader) {
      setVariableValue("csvUploader", 0, $arg)
    }
    
    property get csvUploaderFactory () : gw.bizrules.csv.CsvFileUploaderFactory {
      return getVariableValue("csvUploaderFactory", 0) as gw.bizrules.csv.CsvFileUploaderFactory
    }
    
    property set csvUploaderFactory ($arg :  gw.bizrules.csv.CsvFileUploaderFactory) {
      setVariableValue("csvUploaderFactory", 0, $arg)
    }
    
    property get file () : gw.api.web.WebFile {
      return getVariableValue("file", 0) as gw.api.web.WebFile
    }
    
    property set file ($arg :  gw.api.web.WebFile) {
      setVariableValue("file", 0, $arg)
    }
    
    property get pageHelper () : gw.bizrules.CCRulesListPageHelper {
      return getVariableValue("pageHelper", 0) as gw.bizrules.CCRulesListPageHelper
    }
    
    property set pageHelper ($arg :  gw.bizrules.CCRulesListPageHelper) {
      setVariableValue("pageHelper", 0, $arg)
    }
    
    property get uploadSummary () : gw.bizrules.csv.UploadSummary {
      return getVariableValue("uploadSummary", 0) as gw.bizrules.csv.UploadSummary
    }
    
    property set uploadSummary ($arg :  gw.bizrules.csv.UploadSummary) {
      setVariableValue("uploadSummary", 0, $arg)
    }
    
    
  }
  
  
}