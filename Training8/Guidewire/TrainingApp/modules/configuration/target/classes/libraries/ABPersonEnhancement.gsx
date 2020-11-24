package libraries

uses gw.api.util.DateUtil
uses gw.api.util.Math

enhancement ABPersonEnhancement: entity.ABPerson {
  /* Concatenates first name, middle name (if any), and last name.
  */

  property get FullName(): String {
    if (this.MiddleName == null) {
      return this.FirstName + " " + this.LastName
    } else {
      return this.FirstName + " " + this.MiddleName + " " + this.LastName
    }
  }

  // end of property


  /* Calculates age as string if date of birth is known. Otherwise,
     returns "Unknown".
  */

  property get Age(): String {
    if (this.DateOfBirth == null) {
      return "Unknown"
    } else {
      var today = DateUtil.currentDate()
      var ageInDays = DateUtil.daysBetween(this.DateOfBirth, today)
      var ageInYears = Math.roundDown(ageInDays / 365)
      return ageInYears as java.lang.String
      //      var today = DateUtil.currentDate()
      //      var todaysYear = DateUtil.getYear(today)
      //      var todaysDayOfYear = DateUtil.getDayOfYear(today)
      //      var birthYear = DateUtil.getYear(this.DateOfBirth)
      //      var birthDayOfYear = DateUtil.getDayOfYear(this.DateOfBirth)
      //      var yearDifference = (todaysYear - birthYear)
      //      if (birthDayOfYear < todaysDayOfYear) {
      //        // birthday has not yet occurred this year
      //        yearDifference = yearDifference - 1
      //      }
      //      return yearDifference as java.lang.String
    }
  }

  // end of property


  /* Sets whichever phone is primary phone to given new phone number.
  */

  property set NewPrimaryPhone(newPhoneNumber: String) {
    if (this.PrimaryPhone == "home") {
      this.HomePhone = newPhoneNumber
    }
    if (this.PrimaryPhone == "work") {
      this.WorkPhone = newPhoneNumber
    }
    if (this.PrimaryPhone == "mobile") {
      this.CellPhone = newPhoneNumber
    }
  }

  // end of property


  /* Generates occupation if occupation is not set. Results are either
     "Attorney", "Doctor", "Employee of <employer name>", or "Unknown".
     Not created as a setter because it doesn't receive a value to use
     when determining how to set the Occupation field.
  */

  function assignDefaultOccupation(): void {
    if (this.Occupation == null) {
      if (this.Subtype == "ABAttorney") {
        this.Occupation = "Attorney"
      } else {
        if (this.Subtype == "ABDoctor") {
          this.Occupation = "Doctor"
        } else {
          if (this.Employer != null) {
            this.Occupation = "Employee of " + this.Employer.Name
          } else {
            this.Occupation = "Unknown"
          }
        }
      }
    }
    // end null check
  }

  // end of function

}

// end ABPersonEnhancement enhancement




















// CurrDev: Add ABPersonEnhancement.gsx to TrainingApp
