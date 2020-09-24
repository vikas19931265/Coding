
/*

Rest
=============

* Rest stands for REST stands for REpresentational State Transfer.The main goal of RESTful web services 
  is to make web services more effective. We can build REST web services using either json or xml but
  json is the preferred format.
  
* The important REST methods are 

		GET : to read a resouce
		PUT:  to update an existing resource
		POST : to create a new resource.
		DELETE: to delete an existing resource.
		
* For example, if we want to perform the following actions in the social media application, 
  we get the corresponding results.

POST /users: It creates a user.

GET /users/{id}: It retrieves the detail of a user.

GET /users: It retrieves the detail of all users.

DELETE /users: It deletes all users.

DELETE /users/{id}: It deletes a user.

GET /users/{id}/posts/post_id: It retrieve the detail of a specific post.

POST / users/{id}/ posts: It creates a post of the user.

HTTP Standard Codes
=========================

HTTP also defines the following standard status code:

404: Resource not found
500: Server error
200: Success
401:Unauthorized
201: Created.



*/