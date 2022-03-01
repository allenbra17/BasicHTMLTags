require('dotenv').config()
// dotenv import must be above all other imports
const Express = require("express");
const app = Express();

const controllers = require("./controllers");
const dbConnection = require("./db");
const middleware = require('./middleware')
/*
    -First we create a variable to import express from node modules folder into our file using the require() method.
    - Creating the top level function Express() to gain access to all of its methods and properties:
        -HTTP requests
        -middleware fuctionality
        -basic app settings
*/
app.use(Express.json())
//Recognizes and handles incoming requests as json objects. its middleware that parses the json
app.use(middleware.CORS)
app.use("/pies", controllers.piecontroller)
app.use("/user", controllers.usercontroller)

dbConnection.authenticate()
    .then(() => dbConnection.sync())
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('[server]: app.js is listening on 4000');
        })

    })
    .catch((err) => console.log(err))

app.get("/pies", (req, res) => {
    res.send("I love pie!!")
});

/*
    Routes are the roads that we can take to the specific places in our application

    They are the enpoints/ URI/URL we can reach to handle a specific resource
    They utilize the HTTP request/response cycle to work
        -HTTP request bening sent from the client to the server
        -HTTP response is processed on the server and sent to the client

    HTTP requests handle full CRUD functionality of our server CRUD:
        -Create content (POST) [has body]
        -Read content (GET) [no body, just endpoint + headers]
        -Update content (PUT) [has body]
        -Delete content (DELETE) [no body, just endpoint + headers]
    
    HTTP requests also come with response status coes that specify what happened to our HTTP request
*/

/* 
    Model View Controller
    -Pattern which helps us design and build scalable and maintainable applications.
        -Model (database part)
        -View (what the display of data will look like)
            -browser, postman, react front-end
        -Controller (processes the request data comin in from endpoints and handles responses)
*/