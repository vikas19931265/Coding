package com.guidewire.ab.external.entity;

/**
 * Vendor evaluation
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface VendorEvaluation extends com.guidewire.ab.external.entity.Retireable, com.guidewire.ab.external.entity.Verifiable_Ext, gw.pl.external.entity.Entity
{


  /**
   * Contact under evaluation
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContact")
  public com.guidewire.ab.external.entity.ABContact getABContact();

  /**
   * Contact under evaluation
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ABContact")
  public void setABContact(com.guidewire.ab.external.entity.ABContact value);


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


  /**
   * Timestamp when the object was created
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateTime")
  public java.util.Date getCreateTime();


  /**
   * User who created the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CreateUser")
  public com.guidewire.ab.external.entity.User getCreateUser();


  /**
   * Date evaluation occurred
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EvaluationDate")
  public java.util.Date getEvaluationDate();

  /**
   * Date evaluation occurred
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EvaluationDate")
  public void setEvaluationDate(java.util.Date value);


  /**
   * Evaluator
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Evaluator")
  public java.lang.String getEvaluator();

  /**
   * Evaluator
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Evaluator")
  public void setEvaluator(java.lang.String value);


  /**
   * Communicator
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EvaluatorComment")
  public java.lang.String getEvaluatorComment();

  /**
   * Communicator
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "EvaluatorComment")
  public void setEvaluatorComment(java.lang.String value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * Priority of the verification
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Priority")
  public com.guidewire.ab.external.typelist.Priority getPriority();

  /**
   * Priority of the verification
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Priority")
  public void setPriority(com.guidewire.ab.external.typelist.Priority value);


  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "PublicID")
  public java.lang.String getPublicID();

  /**
   * ID or primary key of the row in the external system to which this row is mapped
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "PublicID")
  public void setPublicID(java.lang.String value);


  /**
   * Does this object need verification?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RequiresVerification")
  public java.lang.Boolean isRequiresVerification();

  /**
   * Does this object need verification?
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RequiresVerification")
  public void setRequiresVerification(java.lang.Boolean value);


  /**
   * Score for communication
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Score_Communication")
  public java.lang.Integer getScore_Communication();

  /**
   * Score for communication
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Score_Communication")
  public void setScore_Communication(java.lang.Integer value);


  /**
   * Score for pricing
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Score_Pricing")
  public java.lang.Integer getScore_Pricing();

  /**
   * Score for pricing
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Score_Pricing")
  public void setScore_Pricing(java.lang.Integer value);


  /**
   * Score for quality of work
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Score_QualityOfWork")
  public java.lang.Integer getScore_QualityOfWork();

  /**
   * Score for quality of work
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Score_QualityOfWork")
  public void setScore_QualityOfWork(java.lang.Integer value);


  /**
   * Score for timeliness
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Score_Timeliness")
  public java.lang.Integer getScore_Timeliness();

  /**
   * Score for timeliness
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Score_Timeliness")
  public void setScore_Timeliness(java.lang.Integer value);


  /**
   * Status of vendor evaluation
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Status")
  public com.guidewire.ab.external.typelist.VendorEvaluationStatus getStatus();

  /**
   * Status of vendor evaluation
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Status")
  public void setStatus(com.guidewire.ab.external.typelist.VendorEvaluationStatus value);


  /**
   * Returns the sum of all four evaluation categories.
NOTE: This logic is also coded on the reflection tab of the VendorEvaluationDV's
Total Score widget. (The reflection tab duplicates the logic within the PCF to
keep that logic entirely client-side. Any use of VendorEvaluationEnhancement
logic would require a call to the server.) If the logic is changed in the property
below, then it should also be changed on the reflection tab of the widget.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TotalScore")
  public int getTotalScore();


  /**
   * Total_Score
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Total_Score")
  public java.lang.Integer getTotal_Score();

  /**
   * Total_Score
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Total_Score")
  public void setTotal_Score(java.lang.Integer value);


  /**
   * Timestamp when the object was last updated
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateTime")
  public java.util.Date getUpdateTime();


  /**
   * User who last updated the object
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdateUser")
  public com.guidewire.ab.external.entity.User getUpdateUser();


  /**
   * Date object was verified
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VerificationDate")
  public java.util.Date getVerificationDate();

  /**
   * Date object was verified
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VerificationDate")
  public void setVerificationDate(java.util.Date value);


  /**
   * Date by which object should be verified
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "VerificationDueDate")
  public java.util.Date getVerificationDueDate();

  /**
   * Date by which object should be verified
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "VerificationDueDate")
  public void setVerificationDueDate(java.util.Date value);

  /**
   * null
   *
   * @param val1 
   * @param val2 
   * @param val3 
   * @param val4 
   * @deprecated 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "sumTotalScore")
  public int sumTotalScore(int val1, int val2, int val3, int val4);


  /**
   * Utility class for initializing an instance of VendorEvaluation
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity VendorEvaluation.
     */
    public static VendorEvaluation newInstance()
    {
      return (VendorEvaluation) gw.pl.external.entity.EntityFactory.getInstance().newEntity(VendorEvaluation.class);
    }
  }

}
