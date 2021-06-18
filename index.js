import Express from 'express';
import Clients from "./clients.js";


const app = Express();
const port = 4000;
app.use(Express.json())
app.use(Express.urlencoded({ extended: true}))

app.get("/", (req, res) => {
    // req.query
    // req.params
    res.send("<h1>Welcome!</h1>")
    })

function customMiddleware(req, res, next){
    console.log(req.query)
    // console.log(req.body);
    console.log(req.params);
    //CALLS CALLBACK FOR ME
    next();
}

app.get("/clients/", (req, res) => {
    // req.query
    // req.params

    res.json(Clients)
    })

// app.get("/clients/:id", (req, res) => {
//     // req.query
//     // req.params
//     res.json(Clients.find((client) => {
//         return +req.params.id === client.id
//     }))
//      
//     })

//SAME AS ABOVE BUT CALLING CUSTOM MIDDLEWARE FIRST
app.get("/clients/:id", customMiddleware, (req, res) => {
    // req.query
    // req.params
    res.json(Clients.find((client) => {
        return +req.params.id === client.id
    }))
     
    })

app.post("/add", (req, res) => {
    console.log(req.body.id)
    // res.send(req.body.id)
    res.sendStatus(200);

})

app.listen(port, ()=> console.log("Listening on port: " + port));