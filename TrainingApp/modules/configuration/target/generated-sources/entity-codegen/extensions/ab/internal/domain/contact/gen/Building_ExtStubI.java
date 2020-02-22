
package extensions.ab.internal.domain.contact.gen;

import java.util.Date;
import com.guidewire.commons.metadata.types.ColumnPropertyInfoCache;
import com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference;
import com.guidewire.commons.metadata.types.LinkPropertyInfoCache;
import com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache;
import extensions.ab.contact.entity.Building_Ext;
import extensions.ab.contact.typekey.BuildingType_Ext;
import gw.ab.addressbook.entity.ABContact;
import gw.pl.contact.entity.Address;
import gw.pl.persistence.core.entity.Retireable;

public interface Building_ExtStubI
    extends Retireable
{

    EntityIntrinsicTypeReference<Building_Ext> TYPE = new EntityIntrinsicTypeReference<Building_Ext>("entity.Building_Ext");
    ColumnPropertyInfoCache LOADCOMMANDID_PROP = new ColumnPropertyInfoCache(TYPE, "LoadCommandID");
    LinkPropertyInfoCache ADDRESS_PROP = new LinkPropertyInfoCache(TYPE, "Address");
    LinkPropertyInfoCache ABCONTACT_PROP = new LinkPropertyInfoCache(TYPE, "ABContact");
    ColumnPropertyInfoCache NUMBEROFEMPLOYEES_PROP = new ColumnPropertyInfoCache(TYPE, "NumberOfEmployees");
    ColumnPropertyInfoCache INSPECTIONDATE_PROP = new ColumnPropertyInfoCache(TYPE, "InspectionDate");
    ColumnPropertyInfoCache HASPARKING_PROP = new ColumnPropertyInfoCache(TYPE, "HasParking");
    TypekeyPropertyInfoCache BUILDINGTYPE_PROP = new TypekeyPropertyInfoCache(TYPE, "BuildingType");
    ColumnPropertyInfoCache RETIREDVALUE_PROP = new ColumnPropertyInfoCache(TYPE, "RetiredValue");
    ColumnPropertyInfoCache CREATETIME_PROP = new ColumnPropertyInfoCache(TYPE, "CreateTime");
    ColumnPropertyInfoCache UPDATETIME_PROP = new ColumnPropertyInfoCache(TYPE, "UpdateTime");
    LinkPropertyInfoCache CREATEUSER_PROP = new LinkPropertyInfoCache(TYPE, "CreateUser");
    LinkPropertyInfoCache UPDATEUSER_PROP = new LinkPropertyInfoCache(TYPE, "UpdateUser");
    ColumnPropertyInfoCache BEANVERSION_PROP = new ColumnPropertyInfoCache(TYPE, "BeanVersion");
    ColumnPropertyInfoCache ID_PROP = new ColumnPropertyInfoCache(TYPE, "ID");
    ColumnPropertyInfoCache PUBLICID_PROP = new ColumnPropertyInfoCache(TYPE, "PublicID");

    /**
     * Gets the value of the LoadCommandID field.
     * 
     * 
     */
    Long getLoadCommandID();

    /**
     * Gets the value of the Address field.
     * Address at which building is located
     * 
     */
    Address getAddress();

    /**
     * Sets the value of the Address field.
     * 
     */
    void setAddress(Address value);

    /**
     * Gets the value of the ABContact field.
     * Associated ABContact
     * 
     */
    ABContact getABContact();

    /**
     * Sets the value of the ABContact field.
     * 
     */
    void setABContact(ABContact value);

    /**
     * Gets the value of the NumberOfEmployees field.
     * Number of employees in this building
     * 
     */
    Integer getNumberOfEmployees();

    /**
     * Sets the value of the NumberOfEmployees field.
     * 
     */
    void setNumberOfEmployees(Integer value);

    /**
     * Gets the value of the InspectionDate field.
     * Date of last inspection
     * 
     */
    Date getInspectionDate();

    /**
     * Sets the value of the InspectionDate field.
     * 
     */
    void setInspectionDate(Date value);

    /**
     * Gets the value of the HasParking field.
     * Is there a parking structure at this building?
     * 
     */
    Boolean isHasParking();

    /**
     * Sets the value of the HasParking field.
     * 
     */
    void setHasParking(Boolean value);

    /**
     * Gets the value of the BuildingType field.
     * Building type
     * 
     */
    BuildingType_Ext getBuildingType();

    /**
     * Sets the value of the BuildingType field.
     * 
     */
    void setBuildingType(BuildingType_Ext value);

}
