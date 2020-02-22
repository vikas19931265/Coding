package external.gw.api.archiving.upgrade;

/**
 * Represents a typekey usage in the XML.
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IArchivedTypekey
{
  /**
   * the display name property of the typekey represented by this IArchivedTypekey
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "DisplayName")
  public java.lang.String getDisplayName();

  /**
   * the code of the typekey represented by this IArchivedTypekey
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "Typecode")
  public java.lang.String getTypecode();

  /**
   * the name of the typelist for the typekey represented by this IArchivedTypekey
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "TypelistName")
  public java.lang.String getTypelistName();


  /**
   * Deletes this IArchivedTypekey. The operation does not check for references. If this typekey is still used, the import should fail.
   *
   * @return this -- for the builder pattern.
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "delete")
  public external.gw.api.archiving.upgrade.IArchivedTypekey delete();

}
