let http = require('http')

let r_generator = require('./lib/randnumber');

let facts = require('./lib/jokes');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'});

    setInterval(function(){

        let random_number = r_generator.random(1, facts.fact.length-1);

        let fact = facts.fact[random_number];

        console.log(fact);

    }, 1000);

}).listen(5000);

console.log('Server started at 5000');