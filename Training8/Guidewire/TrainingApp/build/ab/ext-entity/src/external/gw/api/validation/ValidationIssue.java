package external.gw.api.validation;

/**
 * ValidationIssue wraps a validation message (the Reason property) along with
its validation level and type (Error or Warning), and other data. It is created by
calls to a <code>reject...()</code> method on a Validatable bean.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ValidationIssue
{


  /**
   * Corresponding EntityValidation, if any.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntityValidation")
  public external.gw.api.validation.EntityValidation getEntityValidation();

  /**
   * Corresponding EntityValidation, if any.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EntityValidation")
  public void setEntityValidation(external.gw.api.validation.EntityValidation value);


  /**
   * The identifier of the flow step, such as a WizardStep page, where this
ValidationIssue should be displayed to the user. Not currently used.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "FlowStepId")
  public java.lang.String getFlowStepId();

  /**
   * The identifier of the flow step, such as a WizardStep page, where this
ValidationIssue should be displayed to the user. Not currently used.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "FlowStepId")
  public void setFlowStepId(java.lang.String value);


  /**
   * ValidationLevel to which the reason message applies.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Level")
  public com.guidewire.ab.external.typelist.ValidationLevel getLevel();

  /**
   * ValidationLevel to which the reason message applies.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Level")
  public void setLevel(com.guidewire.ab.external.typelist.ValidationLevel value);


  /**
   * The validation message.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Reason")
  public java.lang.String getReason();

  /**
   * The validation message.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Reason")
  public void setReason(java.lang.String value);


  /**
   * A sub-entity of the bean being validated, to which this issue is tied.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RelatedBeanID")
  public gw.pl.external.entity.Key getRelatedBeanID();

  /**
   * A sub-entity of the bean being validated, to which this issue is tied.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RelatedBeanID")
  public void setRelatedBeanID(gw.pl.external.entity.Key value);


  /**
   * The type of issue, generally Error or Warning.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Type")
  public com.guidewire.ab.external.typelist.ValidationIssueType getType();

  /**
   * The type of issue, generally Error or Warning.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Type")
  public void setType(com.guidewire.ab.external.typelist.ValidationIssueType value);


  /**
   * Utility class for initializing an instance of external.gw.api.validation.ValidationIssue
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static ValidationIssue newInstance()
    {
      return (ValidationIssue) gw.pl.external.Invoker.getInstance().construct(external.gw.api.validation.ValidationIssue.class, new Class[]{ } , new Object[]{ });
    }

  }
}
