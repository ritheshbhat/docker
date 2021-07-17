const express = require('express');
const redis = require('redis');

const process = require('process');


const app = express();
const client = redis.createClient({
    host: 'redis-server' ,//name of service in docker compose,
    port: 6379
});

client.set('visits', 0);


app.get("/", (req,res ) => {
    // process.exit(0) testing container restart in docker-compose
    client.get('visits', (err,visits)=> {
        res.send("No of visits is " + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});


app.listen(8081, () => {
    console.log("listening on port 4001")
})