package external.gw.api.bean.compare.ui;

/**
 * Represents a policy difference as it appears in the policy refresh comparison screen. It provides everything
necessary to display the difference. Operations on a DiffDisplay are not recursive, for example {@link #getType()}
does not examine their children.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface DiffDisplay
{
  /**
   * the displayable value for the Diff being displayed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Label")
  public java.lang.String getLabel();

  /**
   * the new Policy value for the Diff being displayed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "NewValue")
  public java.lang.String getNewValue();

  /**
   * the old Policy value for the Diff being displayed.
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "OldValue")
  public java.lang.String getOldValue();
}
