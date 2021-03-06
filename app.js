const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser") // simplifies access to request body
const fs = require('fs')  // NEW - this is required
const app = express()  // make express app
const http = require('http').Server(app)  // inject app into the server
//const port = 8081


// ADD THESE COMMENTS AND IMPLEMENTATION HERE 
// 1 set up the view engine
// 2 manage our entries
// 3 set up the logger
// 4 handle valid GET requests
// 5 handle valid POST request (not required to fully work)
// 6 respond with 404 if a bad URI is requested

// 1 set up the view engine
app.set("views", path.resolve(__dirname, "views")) // path to views
app.set("view engine", "ejs") // specify our view

// 2 include public assets and use bodyParser
// Node uses __dirname for the The directory name of the current module.
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3 log requests to stdout and also
// log HTTP requests to a file using the standard Apache combined format
// see https://github.com/expressjs/morgan for more
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));

// 4 http GET default page at /
app.get("/", function (req, res) {
    //res.sendFile(path.join(__dirname + '/assets/index.html'))
    res.render("index.ejs")
   })
   
   // 4 http GET /calculate
   app.get("/calculator", function (req, res) {
    res.render("calculator.ejs")
   })
   
   // 4 http GET /about
   app.get("/index", function (req, res) {
    res.render("index.ejs")
   })
   
   // 4 http GET /contact
   app.get("/contactUs", function (req, res) {
    res.render("contactUs.ejs")
   })
   // 5 http POST /contact
app.post("/contact", function (req, res) {
    var api_key='020b72c7d14e461e76dddb5015b6db42-4836d8f5-14045c54';
    var domain='sandbox532facd41b854e26b178c4709d94691b.mailgun.org';
    var mailgun=require('mailgun-js')({apikey:api_key,domain:domain});
    const name = req.body.name;
    const email = req.body.inputemail;
    const company = req.body.inputcompany;
    const comment = req.body.inputcomment;
    const isError = true;
   
    // setup e-mail data with unicode symbols
    var data= {
      from: 'Excited user <postmaster@sandbox532facd41b854e26b178c4709d94691b.mailgun.org>', // sender address
      to: 'Pranathi Mothe <pranureddy0306@gmail.com>', // list of receivers
      subject: 'Message from Website Contact page', // Subject line
      text: name
      
    }
   
    // logs to the terminal window (not the browser)
    mailgun.messages().send(data,function(error,body){
    console.log('\nCONTACT FORM DATA: ' + name + ' ' + email + ' ' + comment + '\n');
    //})
    });
})   
   
   // 6 this will execute for all unknown URIs not specifically handled
app.get(function (req, res) {
    res.render("404")
   })
   
   // Listen for an application request on designated port
   app.listen(process.env.PORT||8081, function () {
    console.log('Web app started and listening on http://localhost:8081')
   })