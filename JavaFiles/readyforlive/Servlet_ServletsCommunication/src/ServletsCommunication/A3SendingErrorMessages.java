/*

2. SENDING ERROR MESSAGES:
==============================================================

-> As part of the web application execution, if the container identify any exception or error then container
  will send the respective error message to be client in its standalone template.

-> As part of our application, if we want to send our own messages to the client in the container defined
  template we have to use the following method from response.


    public void sendError(int statuscode, String description)

    Where statuscode may be 5xx.


*/