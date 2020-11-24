package libraries

uses java.math.BigDecimal

enhancement ABPolicyPersonEnhancement : entity.ABPolicyPerson {


/* Returns the HeightInMeters field in inches. This getter is intended to
   be used in code that needs to work with the height in inches.
*/
    property get HeightInInches() : BigDecimal {
      // Inches * 0.0254 = Meters (value is rounded to nearest whole inch)
      return gw.api.util.Math.roundNearest(this.HeightInMeters / 0.0254)
    } // end of getter


/* Sets the HeightInMeters field using a converted measure that is initially
   provided in inches. This setter is intended to be used in code that needs
   to work with the height in inches.
*/
   property set HeightInInches(height : BigDecimal) {
      // Inches * 0.0254 = Meters
      this.HeightInMeters = (height * 0.0254 )    
   }  // end of setter


/* Returns the HeightInMeters field either in inches or in meters, based on the user's
   preference. This getter is intended to be used in the user interface.
*/
    property get HeightBasedOnUserPreferences() : BigDecimal {
      if (User.util.getCurrentUser().MeasurementSystemPreference == "us_customary") {
        return this.HeightInInches
      } else {
        return this.HeightInMeters
      }
    } // end of getter


/* Sets the HeightInMeters field either in inches or in meters, based on
   the user's preference. This setter is used in the user interface.
*/
    property set HeightBasedOnUserPreferences(height : BigDecimal) {
      if (User.util.getCurrentUser().MeasurementSystemPreference == "us_customary") {
        this.HeightInInches = height
      } else {
        this.HeightInMeters = height
      }
    } // end of setter


} // end ABPolicyPersonEnhancement enhancement




