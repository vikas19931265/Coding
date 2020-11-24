package libraries

uses gw.api.util.DateUtil

enhancement CalendarEnhancement: java.util.Calendar {
  /*  Compare the number of days between Jan. 1 of the given year and Jan. 1 of the following year.
      if the two days are 366 days apart, then the given year is a leap year.
   */

  static function isLeapYear(yearToCheck: int): boolean {
    var FirstDate = "01/01/" + yearToCheck
    var SecondDate = "01/01/" + ( yearToCheck + 1 )
    var DaysBetween = DateUtil.daysBetween(FirstDate as java.util.Date, SecondDate as java.util.Date)
    return (DaysBetween == 366)
  }
}
