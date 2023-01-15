var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const mockAPIResponse = require('./mockAPI.js')


const dotenv = require('dotenv');
dotenv.config();
const app = express()
app.use(cors());
app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//api
const apiKey = process.env.API_KEY
const meaningcloudurl = 'https://api.meaningcloud.com/sentiment-2.1?'

console.log(__dirname)
console.log(`Your API key is ${process.env.API_KEY}`)
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
const port = 8081
app.listen(port, function () {
    console.log('Example app listening on port 8081!')
    console.log(`http://localhost:${port}`)
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

let userInput = []
app.post('/article', async function(req,res){

    userInput = req.body.url

    const data = await fetch(meaningcloudurl + "key=" + apiKey + "&lang=auto&url=" + userInput,{
        method:"GET"
    })
    console.log(data)
    try{
        const porojectData = await data.json()
        res.send(porojectData)
    }catch(error){
        console.log("Error: ", error)
    }
    
})