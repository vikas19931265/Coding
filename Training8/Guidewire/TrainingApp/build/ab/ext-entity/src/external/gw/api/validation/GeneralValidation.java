package external.gw.api.validation;

/**
 * GeneralValidation
General validation error raised on an entity
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface GeneralValidation extends external.gw.api.validation.ValidationIssue
{


  /**
   * Utility class for initializing an instance of external.gw.api.validation.GeneralValidation
   */
  public static class CONSTRUCT
  {

    /**
     * null
     *

     */
    public static GeneralValidation newInstance()
    {
      return (GeneralValidation) gw.pl.external.Invoker.getInstance().construct(external.gw.api.validation.GeneralValidation.class, new Class[]{ } , new Object[]{ });
    }

  }
}
