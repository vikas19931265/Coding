package trainingapp.base

class RecentlyViewedContactUtil {
  
      public static function lastViewedContact ( ViewingUser : User ) : ABContact {
         var viewedContactsQuery = gw.api.database.Query.make(ViewedContact)
         viewedContactsQuery.compare("ViewingUser", Equals, ViewingUser.ID)
         var resultSet = viewedContactsQuery.select()
         resultSet.orderByDescending(\row -> row.CreateTime)
         return resultSet.FirstResult.ViewedContact
      }
      
      public static function lastViewedContact ( ) : ABContact {
         return lastViewedContact(User.util.getCurrentUser())
      }

      public static function lastViewedContactList ( ViewingUser : User ) : List<ABContact>{
         // query for complete list of ViewedContacts
         var viewedContactsQuery = gw.api.database.Query.make(ViewedContact)
         viewedContactsQuery.compare("ViewingUser", Equals, ViewingUser.ID)
         var resultSet = viewedContactsQuery.select()
         resultSet.orderByDescending(\row -> row.CreateTime)
         
         // create empty contact list
         var contactList = new List<ABContact>()

         // for each ViewedContact, if the contact list isn't full and if the    
         // contact isn't already in the list, add the contact to the list
         for (x in resultSet) {
           // CurrDev fix ScriptParameters  if ((contactList.Count < ScriptParameters.MaximumViewedContacts) AND (!contactList.contains(x.ViewedContact))) {
           if ((contactList.Count < 100) and  (!contactList.contains(x.ViewedContact))) {
             contactList.add(x.ViewedContact)
           }
         }

         // return contact list
         return contactList        
      }

}

