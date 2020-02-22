package external.gw.pl.persistence.core;

/**
 * null
 *
 * @deprecated External entities are deprecated. Please use the new Java API instead.
 */
@Deprecated
public interface Bundle
{
  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "BundleTransactionCallbacks")
  public java.util.List getBundleTransactionCallbacks();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "InsertedBeans")
  public java.util.Collection getInsertedBeans();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "ReadOnly")
  public boolean isReadOnly();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "RemovedBeans")
  public java.util.Collection getRemovedBeans();

  /**
   * 
   * 
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.PROPERTY_GETTER, name = "UpdatedBeans")
  public java.util.Collection getUpdatedBeans();


  /**
   * null
   *
   * @param param T
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "add")
  public <T extends gw.pl.external.entity.KeyableEntity> T add(T param);



  /**
   * null
   *
   * @param param BundleTransactionCallback
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "addBundleTransactionCallback")
  public void addBundleTransactionCallback(external.gw.transaction.BundleTransactionCallback param);



  /**
   * null
   *
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "commit")
  public void commit() throws java.lang.RuntimeException;



  /**
   * null
   *
   * @param param KeyableBean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "delete")
  public gw.pl.external.entity.KeyableEntity delete(gw.pl.external.entity.KeyableEntity param);



  /**
   * null
   *
   * @param param IEntityType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "getBeansByRootType")
  public java.util.Collection getBeansByRootType(gw.pl.external.Type param);



  /**
   * null
   *
   * @param param Key
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "loadBean")
  public gw.pl.external.entity.KeyableEntity loadBean(gw.pl.external.entity.Key param);



  /**
   * null
   *
   * @param param Key
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "loadByKey")
  public gw.pl.external.entity.KeyableEntity loadByKey(gw.pl.external.entity.Key param);



  /**
   * null
   *
   * @param param IEntityType
   * @param param1 String
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "loadByPublicId")
  public gw.pl.external.entity.KeyableEntity loadByPublicId(gw.pl.external.Type param, java.lang.String param1);



  /**
   * null
   *
   * @param param IEntityType
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "newBeanInstance")
  public gw.pl.external.entity.Entity newBeanInstance(gw.pl.external.Type param);



  /**
   * null
   *
   * @param param KeyableBean
   */
  @gw.pl.external.Invocation(type = gw.pl.external.InvocationType.METHOD, name = "remove")
  public gw.pl.external.entity.KeyableEntity remove(gw.pl.external.entity.KeyableEntity param);

}
