package external.gw.api.validation;

/**
 * ValidationResult is used to read and write results of an object's
validation (e.g. validation via rules, or field level validation).
<p/>
ValidationResult stores both entity level errors (general errors not
associated with a particular field) and field level errors (errors associated
with a particular field on an entity).
<p/>
A FieldValidation object can store the bad value which triggered the error
(e.g. a mangled loss date that was imported with the claim) and may also
suggests possible correct values, either as a list of objects or foreign keys
(if the field is a foreign key, e.g. picking from a set of users with the
last name "Shaw" if the imported ClaimDef only identifies "Shaw" as the owner).
See FieldValidation to learn what information may be captured with an
invalid field.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ValidationResultBase extends external.gw.api.validation.IValidationResult
{


  /**
   * Returns False if this validation result contains errors and/or warnings.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Empty")
  public boolean isEmpty();


  /**
   * Returns list of all errors, either global or on any fields, in the ValidationResult, regardless of level
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Errors")
  public java.util.List getErrors();


  /**
   * Returns the highest validation level passed, taking only errors into account.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValidationLevelPassed")
  public com.guidewire.ab.external.typelist.ValidationLevel getValidationLevelPassed();


  /**
   * Returns list of all warnings, either global or on any fields, in the ValidationResult, regardless of level
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Warnings")
  public java.util.List getWarnings();

  /**
   * Returns list of all errors, either global or on any fields, above the given level in the ValidationResult
   *
   * @return List of errors, may be empty but is never null
   * @param level the level to check or null. If null then all errors are returned
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getErrors")
  public java.util.List getErrors(com.guidewire.ab.external.typelist.ValidationLevel level);

  /**
   * Returns list of all warnings, either global or on any fields, above the given level in the ValidationResult
   *
   * @return List of warnings, may be empty but is never null
   * @param level the level to check or null. If null then all warnings are returned
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getWarnings")
  public java.util.List getWarnings(com.guidewire.ab.external.typelist.ValidationLevel level);

  /**
   * 
   *
   * @return True if the ValidationResults contains any errors, either global
        or on any fields, regardless of error level.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasErrors")
  public boolean hasErrors();

  /**
   * Returns whether or not errors exist in this validation result at the given level
   *
   * @return True if the ValidationResults contains any errors, either global
        or on any fields, relative to the specified error level. If the specified
        level is null, <i>all</i> errors are significant.
   * @param level the level to check or null
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasErrors")
  public boolean hasErrors(com.guidewire.ab.external.typelist.ValidationLevel level);

  /**
   * 
   *
   * @return True if the ValidationResults contains any warnings, either global
        or on any fields, regardless of error level.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasWarnings")
  public boolean hasWarnings();

  /**
   * Returns whether or not warnings exist in this validation result.
   *
   * @return True if the ValidationResults contains any warnings, either global
        or on any fields, relative to the specified warning level. If the specified
        level is null, <i>all</i> warnings are significant.
   * @param level the level to check or null
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "hasWarnings")
  public boolean hasWarnings(com.guidewire.ab.external.typelist.ValidationLevel level);

  /**
   * Returns true if this validation result contains errors and/or warnings
relative to the specified validation level.
   *
   * @return False if the ValidationResults contains any errors, either global
        or on any fields, relative to the specified error level. If the specified
        level is null, <i>all</i> errors are significant.
   * @param level the validation level to check
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isEmpty")
  public boolean isEmpty(com.guidewire.ab.external.typelist.ValidationLevel level);
}
