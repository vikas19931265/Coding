package com.guidewire.ab.external.entity;

/**
 * Table linking ReviewsSummaries to Category Scores
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ReviewSummaryCategoryScore extends com.guidewire.ab.external.entity.Versionable, gw.pl.external.entity.Entity
{


  /**
   * Auto-incremented object version
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BeanVersion")
  public java.lang.Integer getBeanVersion();


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
   * Category of this QuestionSet.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReviewCategory")
  public com.guidewire.ab.external.typelist.ReviewCategory getReviewCategory();

  /**
   * Category of this QuestionSet.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ReviewCategory")
  public void setReviewCategory(com.guidewire.ab.external.typelist.ReviewCategory value);


  /**
   * Associated Review.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReviewSummary")
  public com.guidewire.ab.external.entity.ReviewSummary getReviewSummary();

  /**
   * Associated Review.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ReviewSummary")
  public void setReviewSummary(com.guidewire.ab.external.entity.ReviewSummary value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Score")
  public java.lang.Integer getScore();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Score")
  public void setScore(java.lang.Integer value);


  /**
   * Utility class for initializing an instance of ReviewSummaryCategoryScore
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ReviewSummaryCategoryScore.
     */
    public static ReviewSummaryCategoryScore newInstance()
    {
      return (ReviewSummaryCategoryScore) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ReviewSummaryCategoryScore.class);
    }
  }

}
