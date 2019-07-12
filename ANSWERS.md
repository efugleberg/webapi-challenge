## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [ ] Mention two parts of Express that you learned about this week.
>>>> I learned that is is basically a web app framework that sits on top of the Node.js web server ---> Like React for your backend.
>>>> I learned that it is compatible with middleware so we can tap into an extensive collectino of modules written for connect.
>>>> I learned it's lightweight and easy to use.  If we need some heavier lifting, we'll have to import other modules/dependencies because Express was made to run light and one of it's main benefits is it's ease of use.
>>>> You can use Express Routers to break your app in to sub-apps to make it easier to maintain.


- [ ] Describe Middleware?
>>> Middleware is an array of functions that get executed in the order they are introduced to the server code.  It comes in the middle of the request and response cycle.  Middleware has access to the request and response object and has access to the next function of the req-res life cycle.
>>> They are functions executed in the middle after the incoming request then produces an output which could be the final output passed or could be used by the next middleware until the cycle is completed.  We can have more than one middleware execute within a given function.
>>>> A function that is invoked by the Express routing layer before the final request handler, and thus sits in the middle between a raw request and the final intended route.

- [ ] Describe a Resource?
>>>> A resource is data that is transmitted between the server-side and client-side.  It is something that either the server or the client wants to get, add, delete, or change.

- [ ] What can the API return to help clients know if a request was successful?
>>>> The API can return status codes to let a client know if a request was successfull.  Examples are 200, 201, 204, 400, 404, 500, etc.

- [ ] How can we partition our application into sub-applications?
>>>> We can use Express Routers to reogranize our code into a sub-app in order to make our code cleaner and easier to read and maintain.