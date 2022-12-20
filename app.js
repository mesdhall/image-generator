// Server for the image generator app

// import CORS to help prevent errors
const cors = require('cors')

const { Configuration, OpenAIApi } = require("openai");


// import express
const express = require('express')
const bodyParser = require('body-parser')

// create express app
const app = express();

let apiKey = "Test";

const configuration = new Configuration({
  apiKey: apiKey,
});

const openai = new OpenAIApi(configuration);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3001)
console.log('Server running on port 3001')

// whitelist of origins for CORS
const whitelist = ['http://localhost:3000', 'http://localhost:3001/']

// configure CORS
const corsOptions = {
    origin: function (origin, callback) {
      console.log("** Origin of request " + origin)
      console.log(origin, whitelist.indexOf(origin))
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        console.log("Origin acceptable")
        callback(null, true)
      } else {
        console.log("Origin rejected")
        callback(new Error('Not allowed by CORS'))
      }
    }
  }
  
app.use(cors(corsOptions))

app.options('*', cors())


async function generateImage(text) {
  // generate the image using the OpenAI API
  const response = await openai.createImage({
    // set the prompt to the user's text input  
    prompt: text,

    // set the number of images to generate to 1
    n: 1,

    // set the size of the image to 512x512
    size: "512x512"
  })
  .catch(err => {console.log(err)});

  console.log(response.data.data[0].url)
  // get the image URL from the response
  return response.data.data[0].url
}     


// parse application/x-www-form-urlencoded

app.post('/form', (req,res) => {
    console.log(req, "here")
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  })

app.get('/test', (req,res) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.send('Hello World')
})

