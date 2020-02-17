/*
 
1. For every component a clear well defined functionailty is defined then that component is said to follow high cohesion.

Example 1 -> Low Cohesion

        TotalServlet( Contains 70 lakh lines of codes)
            LoginPageDisplay
            Validation
            IndexPage
            ReplyPage
            ComposePage
            ErrorPage

Example 2->High Cohesion

login.jsp
    ValidationServlet
        inbox.jsp
                reply.jsp
                compose.jsp
         error.jsp



2. High Cohesion is always a good programming practice because it has several advantages.

    a) Without affecting remaining components we can modify any component hence enhancement will become easy.

    b) It promotes reusability of the code ( wherever validation is required we can reuse the same validate servlet) 
       without rewriting.

    c) It improves maintainability of the application.




[note]

    Loosely coupling and high cohesion are good programming practices.

*/

//--------------------------------------------------------------------------********--------------------------------------------------------------