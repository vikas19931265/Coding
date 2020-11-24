package com.guidewire.ab.external.entity;

/**
 * A summary of a service provider review, created from a given Review in ClaimCenter.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface ReviewSummary extends com.guidewire.ab.external.entity.ABLinkable, com.guidewire.ab.external.entity.Retireable, gw.pl.external.entity.Entity
{


  /**
   * Associated Contact. NOTE: when inserting a ReviewSummary this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ABContact")
  public com.guidewire.ab.external.entity.ABContact getABContact();

  /**
   * Associated Contact. NOTE: when inserting a ReviewSummary this field must be non-null.
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
   * List of categories and their scores, associated with this Review.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "CategoryScores")
  public com.guidewire.ab.external.entity.ReviewSummaryCategoryScore[] getCategoryScores();

  /**
   * List of categories and their scores, associated with this Review.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "CategoryScores")
  public void setCategoryScores(com.guidewire.ab.external.entity.ReviewSummaryCategoryScore[] value);


  /**
   * The PublicID of the Review in ClaimCenter, intended as an cross-reference for informational purposes only.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ClaimCenterUID")
  public java.lang.String getClaimCenterUID();

  /**
   * The PublicID of the Review in ClaimCenter, intended as an cross-reference for informational purposes only.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ClaimCenterUID")
  public void setClaimCenterUID(java.lang.String value);


  /**
   * Claim Number associated with this review. NOTE: when inserting a ReviewSummary this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ClaimNumber")
  public java.lang.String getClaimNumber();

  /**
   * Claim Number associated with this review. NOTE: when inserting a ReviewSummary this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ClaimNumber")
  public void setClaimNumber(java.lang.String value);


  /**
   * Comments about the review.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Comments")
  public java.lang.String getComments();

  /**
   * Comments about the review.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Comments")
  public void setComments(java.lang.String value);


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
   * Description of the accident or loss.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Description")
  public java.lang.String getDescription();

  /**
   * Description of the accident or loss.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Description")
  public void setDescription(java.lang.String value);


  /**
   * Internally managed primary key
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ID")
  public gw.pl.external.entity.Key getID();


  /**
   * Represents the ID used by client applications to link with the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LinkID")
  public java.lang.String getLinkID();

  /**
   * Represents the ID used by client applications to link with the Address Book.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "LinkID")
  public void setLinkID(java.lang.String value);


  /**
   * LoadCommand for load where row was created. If not null this object was loaded via the loader.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "LoadCommandID")
  public java.lang.Long getLoadCommandID();


  /**
   * Short name of this review type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Name")
  public java.lang.String getName();

  /**
   * Short name of this review type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Name")
  public void setName(java.lang.String value);


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
   * Associated part of a claim for this review type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RelatedTo")
  public java.lang.String getRelatedTo();

  /**
   * Associated part of a claim for this review type.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "RelatedTo")
  public void setRelatedTo(java.lang.String value);


  /**
   * Name of the Review Type associated with this review. NOTE: when inserting a ReviewSummary this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReviewType")
  public java.lang.String getReviewType();

  /**
   * Name of the Review Type associated with this review. NOTE: when inserting a ReviewSummary this field must be non-null.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ReviewType")
  public void setReviewType(java.lang.String value);


  /**
   * User who created the review
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReviewedBy")
  public java.lang.String getReviewedBy();

  /**
   * User who created the review
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ReviewedBy")
  public void setReviewedBy(java.lang.String value);


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
   * Date of the service being reviewed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ServiceDate")
  public java.util.Date getServiceDate();

  /**
   * Date of the service being reviewed
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ServiceDate")
  public void setServiceDate(java.util.Date value);


  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ServiceType")
  public com.guidewire.ab.external.typelist.ReviewServiceType getServiceType();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "ServiceType")
  public void setServiceType(com.guidewire.ab.external.typelist.ReviewServiceType value);


  /**
   * List of categories and their scores, associated with this Review.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "SortedCategoryScores")
  public com.guidewire.ab.external.entity.ReviewSummaryCategoryScore[] getSortedCategoryScores();


  /**
   * Optionally associated sub-Contact (Service Person or similar).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Subcontact")
  public java.lang.String getSubcontact();

  /**
   * Optionally associated sub-Contact (Service Person or similar).
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Subcontact")
  public void setSubcontact(java.lang.String value);


  /**
   * Boolean field to mark a review as included in the total for the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Tallied")
  public java.lang.Boolean isTallied();

  /**
   * Boolean field to mark a review as included in the total for the contact.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_SETTER, name = "Tallied")
  public void setTallied(java.lang.Boolean value);


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
   * 
   *
   * @param reviewCategory the ReviewCategory to add.
   * @param categoryScore the score to add for that reviewCategory.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addNewCategoryScore")
  public void addNewCategoryScore(com.guidewire.ab.external.typelist.ReviewCategory reviewCategory, int categoryScore);

  /**
   * null
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addToCategoryScores")
  public void addToCategoryScores(com.guidewire.ab.external.entity.ReviewSummaryCategoryScore element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ReviewSummaryCategoryScore from the CategoryScores array.
   *
   * @param element 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCategoryScores")
  public void removeFromCategoryScores(com.guidewire.ab.external.entity.ReviewSummaryCategoryScore element);

  /**
   * Removes an instance of com.guidewire.ab.external.entity.ReviewSummaryCategoryScore having id elementID from the CategoryScores array by retiring the element.
   *
   * @param elementID 
   * @deprecated Please use the version that takes an entity instead.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "removeFromCategoryScores")
  public void removeFromCategoryScores(gw.pl.external.entity.Key elementID);


  /**
   * Utility class for initializing an instance of ReviewSummary
   */
  public static class CONSTRUCT
  {
    /**
     * Create a new proxy instance of the external entity ReviewSummary.
     */
    public static ReviewSummary newInstance()
    {
      return (ReviewSummary) gw.pl.external.entity.EntityFactory.getInstance().newEntity(ReviewSummary.class);
    }
  }

}
