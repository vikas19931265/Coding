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
public interface ValidationResult extends external.gw.api.validation.ValidationResultBase
{


  /**
   * Returns the full list of entity validations.  Validations will only exist for those entities that had
at least one ValidationIssue attached to them.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntityValidations")
  public external.gw.api.validation.EntityValidation[] getEntityValidations();

  /**
   * Adds all the validations from another validation result.
Note this method assumes no field validation conflicts
or general validation conflicts exist between the source
validation result and this one.
   *
   * @param vrSource A source validation result.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "add")
  public void add(external.gw.api.validation.ValidationResult vrSource);

  /**
   * Adds an error to this result for the specified bean.  This is a convenience method that ultimately chains
to the {@link #reject} method.
   *
   * @param bean the entity to add the error to
   * @param errorLevel the ValidationLevel of the error
   * @param errorReason the error message
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addError")
  public void addError(gw.pl.external.entity.KeyableEntity bean, com.guidewire.ab.external.typelist.ValidationLevel errorLevel, java.lang.String errorReason);

  /**
   * Adds a warning to this result for the specified bean.  This is a convenience method that ultimately chains
to the {@link #reject} method.
   *
   * @param bean the entity to add the warning to
   * @param warningLevel the ValidationLevel of the warning
   * @param warningReason the warning message
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addWarning")
  public void addWarning(gw.pl.external.entity.KeyableEntity bean, com.guidewire.ab.external.typelist.ValidationLevel warningLevel, java.lang.String warningReason);

  /**
   * Returns the EntityValidation for a given entity, if one exists.
   *
   * @return the EntityValidation for that entity, or null if no issues exist for that entity
   * @param id the id of the entity to get an EntityValidation for
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getEntityValidation")
  public external.gw.api.validation.EntityValidation getEntityValidation(gw.pl.external.entity.Key id);

  /**
   * Reject a particular field of field path on a bean related to the root
bean, e.g. an array element of the bean such as an Exposure of a Claim.
<p/>
Note you can indicate failure as both an error and a warning simultaneously.
However, if the failure is both an error and a warning, the failure should
have different error and warning levels.
   *
   * @param id The id of the entity having the validation error/warning.
   * @param relatedBean Bean related to the root bean
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   * @param flowStepId The process FlowStep that this error applies to, if any
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "reject")
  public void reject(gw.pl.external.entity.Key id, gw.pl.external.entity.KeyableEntity relatedBean, java.lang.String strRelativeFieldPath, com.guidewire.ab.external.typelist.ValidationLevel errorLevel, java.lang.String strErrorReason, com.guidewire.ab.external.typelist.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId);


  /**
   * Utility class for accessing static features for external.gw.api.validation.ValidationResult
   * <ul>
   * <li>Access static properties for this type.</li>
* <li>Invoke static methods for this type.</li>
   * </ul>
   */
  public static class UTIL
  {
    //Static Properties
    
    /**
     * Gets the current thread-local validation result, if one has been set.  If no thread-local validation result has
been set, this method will return null.
     * 
     */
    public static external.gw.api.validation.ValidationResult getCurrent()
    {
      return (external.gw.api.validation.ValidationResult) gw.pl.external.Invoker.getInstance().getStaticProperty(external.gw.api.validation.ValidationResult.class, "Current");
    }

        //Static Methods
    
    /**
     * Clears out the thread-local validation result.  This method should only be used in a pair with {@link #setThreadLocalValidationResult(ValidationResult)}
as described on that method.
     *
     */
    public static void clearThreadLocalValidationResult()
    {
      gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.validation.ValidationResult.class, "clearThreadLocalValidationResult", new Class[]{ } , new Object[]{ });
    }

    /**
     * Sets the thread-local validation result, which will be seen in subsequent calls to {@link #getCurrent}.  It shouldn't
be necessary to call this method directly, as the validation result should be set appropriately for the beforeCommit
and beforeSave expressions.  Any calls to the various "reject" methods on validatable beans will also be added to
the thread-local result.

This method should always be paired with a call to {@link #clearThreadLocalValidationResult}
in a try/finally block, as in:
<pre>
ValidationResult.setThreadLocalValidationResult(result);
try {
  . . .
} finally {
  ValidationResult.clearThreadLocalValidationResult();
}
</pre>
     *
     * @param result the ValidationResult to set as the thread-local result
     */
    public static void setThreadLocalValidationResult(external.gw.api.validation.ValidationResult result)
    {
      gw.pl.external.Invoker.getInstance().invokeStaticMethod(external.gw.api.validation.ValidationResult.class, "setThreadLocalValidationResult", new Class[]{ external.gw.api.validation.ValidationResult.class} , new Object[]{ result});
    }

  }


  /**
   * Utility class for initializing an instance of external.gw.api.validation.ValidationResult
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static ValidationResult newInstance()
    {
      return (ValidationResult) gw.pl.external.Invoker.getInstance().construct(external.gw.api.validation.ValidationResult.class, new Class[]{ } , new Object[]{ });
    }

  }
}
