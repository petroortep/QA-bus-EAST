import Express from 'express';
import Clients from "./clients.js";


const app = Express();
const port = 4000;
app.use(Express.json())
app.use(Express.urlencoded({ extended: true}))


app.get('/api/clients', (req, res) => {
    
    var custs = []

    // res.json(Clients.find((client) =>{
    //     return client.city === "Seakonk"
    // }))
    res.json(Clients)

})

app.listen(port, ()=> console.log("Listening on port: " + port));