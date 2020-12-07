package acme.ta.batch.doctorspeciality

uses gw.processes.BatchProcessBase
uses gw.transaction.Transaction
uses gw.api.database.Query

class FlagDoctorWithoutSpecialityBatch extends BatchProcessBase {

  construct() {
    super(BatchProcessType.TC_FLAGDOCTORWITHOUTSPECIALITY)
  }

  override function doWork() {
    print("Starting batch job to flag the doctor without having any speciality")

    Transaction.runWithNewBundle(\bundle->
    {
      var doctor= Query.make(entity.ABDoctor).select()
      doctor.each( \ doc ->
      {
        if(doc.Specialty==null && !doc.FlagEntries.hasMatch( \ flag ->flag.Reason==typekey.FlagEntryReason.TC_DOCTOR_SPECIALTY_UNSPECIFIED ))
        {
          var flag= new FlagEntry();
          flag.FlagDate = gw.api.util.DateUtil.currentDate()
          flag.Reason =typekey.FlagEntryReason.TC_DOCTOR_SPECIALTY_UNSPECIFIED
          doc.addToFlagEntries(flag)
           print("doctor is flagged")
        }
      }
      )
    },"su")
  }
}