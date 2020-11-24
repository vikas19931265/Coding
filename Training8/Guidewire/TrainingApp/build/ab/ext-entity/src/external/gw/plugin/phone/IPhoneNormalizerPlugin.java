package external.gw.plugin.phone;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface IPhoneNormalizerPlugin extends gw.plugin.IPlugin
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BundleSize")
  public int getBundleSize();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "EntityPhoneMapperEntries")
  public java.util.Map getEntityPhoneMapperEntries();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "MaximumExtensionLength")
  public int getMaximumExtensionLength();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "WorkItemPartitionSize")
  public int getWorkItemPartitionSize();


  /**
   * null
   *
   * @param param GWPhoneNumber
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "formatPhoneNumber")
  public java.lang.String formatPhoneNumber(external.gw.api.util.phone.GWPhoneNumber param);



  /**
   * null
   *
   * @param param IEntityType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getEntityPhoneMapperForIEntityType")
  public java.util.List getEntityPhoneMapperForIEntityType(gw.pl.external.Type param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isPossibleNumber")
  public boolean isPossibleNumber(java.lang.String param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isPossibleNumberWithExtension")
  public boolean isPossibleNumberWithExtension(java.lang.String param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "isValidExtension")
  public boolean isValidExtension(java.lang.String param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "normalizeNumberIfPossible")
  public java.lang.String normalizeNumberIfPossible(java.lang.String param);



  /**
   * null
   *
   * @param param IArchivedEntity
   * @param param1 List<PhoneColumnProperties>
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "normalizePhoneNumbersInArchive")
  public void normalizePhoneNumbersInArchive(external.gw.api.archiving.upgrade.IArchivedEntity param, java.util.List param1);



  /**
   * null
   *
   * @param param KeyableBean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "normalizePhoneNumbersInBean")
  public void normalizePhoneNumbersInBean(gw.pl.external.entity.KeyableEntity param);



  /**
   * null
   *
   * @param param String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "parsePhoneNumber")
  public external.gw.api.util.phone.GWPhoneNumber parsePhoneNumber(java.lang.String param);

}
