package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NotesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_NotesScreenExpressions {
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NotesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_NotesScreenExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on RowIterator at FNOLWizard_NotesScreen.pcf: line 19, column 35
    function value_26 () : entity.Note[] {
      return Claim.Notes
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.Generated("config/web/pcf/claim/FNOL/FNOLWizard_NotesScreen.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends FNOLWizard_NotesScreenExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=EditLink) at FNOLWizard_NotesScreen.pcf: line 30, column 69
    function action_0 () : void {
      FNOLWizard_EditNotePopup.push(Note, Claim)
    }
    
    // 'action' attribute on Link (id=PrintLink) at FNOLWizard_NotesScreen.pcf: line 42, column 70
    function action_3 () : void {
      gw.api.print.PrintNoteAction.printNote(Note)
    }
    
    // 'action' attribute on Link (id=EditLink) at FNOLWizard_NotesScreen.pcf: line 30, column 69
    function action_dest_1 () : pcf.api.Destination {
      return pcf.FNOLWizard_EditNotePopup.createDestination(Note, Claim)
    }
    
    // 'available' attribute on Link (id=PrintLink) at FNOLWizard_NotesScreen.pcf: line 42, column 70
    function available_2 () : java.lang.Boolean {
      return Claim.State != ClaimState.TC_DRAFT
    }
    
    // 'label' attribute on TextInput (id=AuthoringDate_Input) at FNOLWizard_NotesScreen.pcf: line 77, column 97
    function label_14 () : java.lang.Object {
      return gw.api.util.StringUtil.formatDate(Note.AuthoringDate, "medium")
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at FNOLWizard_NotesScreen.pcf: line 50, column 40
    function valueRoot_5 () : java.lang.Object {
      return Note
    }
    
    // 'value' attribute on TextInput (id=RelatedTo_Input) at FNOLWizard_NotesScreen.pcf: line 63, column 48
    function value_10 () : java.lang.String {
      return Note.getNoteRelatedTo()
    }
    
    // 'value' attribute on TextInput (id=AuthoringDate_Input) at FNOLWizard_NotesScreen.pcf: line 77, column 97
    function value_15 () : java.lang.String {
      return gw.api.util.StringUtil.formatTime(Note.AuthoringDate, "short")
    }
    
    // 'value' attribute on TextInput (id=Subject_Input) at FNOLWizard_NotesScreen.pcf: line 83, column 47
    function value_19 () : java.lang.String {
      return Note.Subject
    }
    
    // 'value' attribute on NoteBodyInput (id=Body_Input) at FNOLWizard_NotesScreen.pcf: line 87, column 34
    function value_23 () : java.lang.String {
      return Note.Body
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at FNOLWizard_NotesScreen.pcf: line 50, column 40
    function value_4 () : entity.User {
      return Note.Author
    }
    
    // 'value' attribute on TextInput (id=Topic_Input) at FNOLWizard_NotesScreen.pcf: line 57, column 50
    function value_7 () : typekey.NoteTopicType {
      return Note.Topic
    }
    
    // 'visible' attribute on TextInput (id=Confidential_Input) at FNOLWizard_NotesScreen.pcf: line 68, column 44
    function visible_12 () : java.lang.Boolean {
      return Note.Confidential
    }
    
    // 'visible' attribute on TextInput (id=Subject_Input) at FNOLWizard_NotesScreen.pcf: line 83, column 47
    function visible_18 () : java.lang.Boolean {
      return Note.Subject != null
    }
    
    property get Note () : entity.Note {
      return getIteratedValue(1) as entity.Note
    }
    
    
  }
  
  
}