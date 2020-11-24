package libraries

enhancement Verifiable_ExtEnhancement : entity.Verifiable_Ext {
  
/* This functions sets the due date for a verification based on the
   priority. High and urgent objects are set for 3 days. Normal objects
   (and objects without a priority) are set to 7 days. Low-priority
   objects are set for 14 days.
*/  
   function setDueDateFromPriority() : void {

      var today = gw.api.util.DateUtil.currentDate()
      
      if ((this.Priority == "high") or (this.Priority == "urgent")) {
         this.VerificationDueDate = gw.api.util.DateUtil.addDays(today, 3)
      }
      if ((this.Priority == "normal") or (this.Priority == null)) {
         this.VerificationDueDate = gw.api.util.DateUtil.addDays(today, 7)
      }
      if (this.Priority == "low") {
         this.VerificationDueDate = gw.api.util.DateUtil.addDays(today, 14)
      }
      
   } // end of function  
  
}

