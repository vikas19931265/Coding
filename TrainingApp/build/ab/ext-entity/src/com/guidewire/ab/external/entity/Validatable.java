package com.guidewire.ab.external.entity;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Validatable extends gw.pl.external.entity.Entity
{


  /**
   * Gets the validation result.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValidationResult")
  public external.gw.api.validation.ValidationResult getValidationResult();

  /**
   * Rejects the root bean w/ a global message
<p/>
Note the reason why the bean failed validation shouldn't refer to a particular
field in the entity. To do that, use the rejectField() method.
<p/>
Note you can indicate failure as both an error and a warning simultaneously.
However, if the failure is both an error and a warning, the failure should
have different error and warning levels.
<p/>
   *
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "reject")
  public void reject(com.guidewire.ab.external.typelist.ValidationLevel errorLevel, java.lang.String strErrorReason, com.guidewire.ab.external.typelist.ValidationLevel warningLevel, java.lang.String strWarningReason);

  /**
   * Rejects a particular field or field path on the root bean.
<p/>
Note you can indicate failure as both an error and a warning simultaneously.
However, if the failure is both an error and a warning, the failure should
have different error and warning levels.
<p/>
   *
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "rejectField")
  public void rejectField(java.lang.String strRelativeFieldPath, com.guidewire.ab.external.typelist.ValidationLevel errorLevel, java.lang.String strErrorReason, com.guidewire.ab.external.typelist.ValidationLevel warningLevel, java.lang.String strWarningReason);

  /**
   * Rejects a particular field or field path on the root bean.
<p/>
Note you can indicate failure as both an error and a warning simultaneously.
However, if the failure is both an error and a warning, the failure should
have different error and warning levels.
<p/>
   *
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   * @param flowStepId The process FlowStep that this error applies to, if any
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "rejectFieldWithFlowStep")
  public void rejectFieldWithFlowStep(java.lang.String strRelativeFieldPath, com.guidewire.ab.external.typelist.ValidationLevel errorLevel, java.lang.String strErrorReason, com.guidewire.ab.external.typelist.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId);

  /**
   * Reject a particular field of field path on a bean related to the root
bean, e.g. an array element of the bean such as an Exposure of a Claim.
<p/>
Note you can indicate failure as both an error and a warning simultaneously.
However, if the failure is both an error and a warning, the failure should
have different error and warning levels.
<p/>
   *
   * @param relatedBean Bean related to the root bean
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "rejectSubField")
  public void rejectSubField(gw.pl.external.entity.KeyableEntity relatedBean, java.lang.String strRelativeFieldPath, com.guidewire.ab.external.typelist.ValidationLevel errorLevel, java.lang.String strErrorReason, com.guidewire.ab.external.typelist.ValidationLevel warningLevel, java.lang.String strWarningReason);

  /**
   * Reject a particular field of field path on a bean related to the root
bean, e.g. an array element of the bean such as an Exposure of a Claim.
<p/>
Note you can indicate failure as both an error and a warning simultaneously.
However, if the failure is both an error and a warning, the failure should
have different error and warning levels.
<p/>
Note that this is the fullest version of "reject"; all the others are
overloaded for easier use.
   *
   * @param relatedBean Bean related to the root bean
   * @param strRelativeFieldPath The relative path from the root bean to the field that failed validation.
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   * @param flowStepId The process FlowStep that this error applies to, if any
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "rejectSubFieldWithFlowStep")
  public void rejectSubFieldWithFlowStep(gw.pl.external.entity.KeyableEntity relatedBean, java.lang.String strRelativeFieldPath, com.guidewire.ab.external.typelist.ValidationLevel errorLevel, java.lang.String strErrorReason, com.guidewire.ab.external.typelist.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId);

  /**
   * Rejects the root bean w/ a global message
<p/>
Note the reason why the bean failed validation shouldn't refer to a particular
field in the entity. To do that, use the rejectField() method.
<p/>
Note you can indicate failure as both an error and a warning simultaneously.
However, if the failure is both an error and a warning, the failure should
have different error and warning levels.
<p/>
   *
   * @param errorLevel The corresponding level effected by the validation error.
   * @param strErrorReason The message that should be displayed to the user, to indicate the reason for the error.
   * @param warningLevel The corresponding level effected by the validation warning.
   * @param strWarningReason The message that should be displayed to the user, to indicate the reason for the warning.
   * @param flowStepId The process FlowStep that this error applies to, if any
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "rejectWithFlowStep")
  public void rejectWithFlowStep(com.guidewire.ab.external.typelist.ValidationLevel errorLevel, java.lang.String strErrorReason, com.guidewire.ab.external.typelist.ValidationLevel warningLevel, java.lang.String strWarningReason, java.lang.String flowStepId);


  /**
   * Utility class for initializing an instance of Validatable
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity Validatable.
     */
    public static Validatable newInstance()
    {
      return (Validatable) gw.pl.external.entity.EntityFactory.getInstance().newEntity(Validatable.class);
    }
  }

}
