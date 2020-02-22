package external.gw.api.validation;

/**
 * EntityValidation
An IValidationResult on a specific entity.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface EntityValidation extends external.gw.api.validation.ValidationResultBase
{


  /**
   * The id of the entity this validation applies to.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntityId")
  public gw.pl.external.entity.Key getEntityId();


  /**
   * Gets the list of associated validation issues
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ValidationIssues")
  public java.util.List getValidationIssues();


  /**
   * Utility class for initializing an instance of external.gw.api.validation.EntityValidation
   */
  public static class CONSTRUCT
  {

  }
}
