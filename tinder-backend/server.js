import express from 'express'
import mongoose from 'mongoose'
import cards from 'dbCards.js'
import cors from 'cors'

//app configurable
const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:2JnKU67Ga5ikpWJC@cluster0.jrlf0.mongodb.net/tinderdb?retryWrites=true&w=majority`
//Middlewares
app.use(express.json())
//DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
//API endpoints
app.get('/',(req,res) => {
    res.status(200).send("Server is working!");
})

app.post('/tinder/cards',(req,res) => {
    const dbCards=req.body;
})

cards.create(dbCards,(err,data) => {
    if(err)
    {
        res.status(500).send(err)
    }
    else
    {
        res.status(201).send(data);
    }
})

app.get('/tinder/cards',(req,res) => {
    cards.find((err,data) => {
        if(err)
        {
            res.status(500).send(err)
        }
        else
        {
            res.status(200).send(data);
        }
    })
})
//Listener
app.listen(port, () => console.log(`Listening on local host: ${port}`));

