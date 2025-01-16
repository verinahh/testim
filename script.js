//asinkrone - nuk e pret asni funksion,  -->
//node js punon ma shpejt
      
// node js osht ni server, ku klienti lidhet me to (serveri duhet me kon lshut 24/7)
// ky server merr edhe dergon te dhena-->

//key word ne terminal "node emri i js file" psh --> node script.js

// console.log("My first app in Node.js")

// const name = "Verina"
// const age = 17

// console.log(`My name is ${name} and I am ${age} years old.`)

var http = require("http")
var server = http.createServer((request, response) => {  //200 osht kur faqja o tu shku okej dmth e kunderta e 404
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.end("Hello Verina")   //.end per me na e shfaq 
}).listen(8080); //qikjo 8080 osht porta, serveri jon
console.log('serveri eshte duke run ne faqen http://127.0.0.1:8080/')

//127.0.0.1: osht gjith njejt
//per me nal serverin  ctrl c