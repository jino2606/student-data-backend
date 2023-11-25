//import json-server library in index.js file
const jsonServer=require('json-server')

//create json-server
const studentsDataServer =jsonServer.create()

//create path to json file
const router=jsonServer.router('db.json')

//middleware to convert json to js
const middleware =jsonServer.defaults()

//use middleware and router in server
studentsDataServer.use(middleware)
studentsDataServer.use(router)


//setup port for running server
const port=4000 || process.env.PORT

//to listen for resolving request from client
studentsDataServer.listen(port,()=>{
    console.log(`Student-Data-Server started at http://localhost:${port} and waiting for the request....`);
})



