const express = require('express')
const app = express()

// routes
const API = require("./routes/API");

// config
const Keys = require("./config/Keys");

// port
const PORT = Keys.PORT || 4000;

// static serving
app.use('/uploads', express.static('uploads'))

//CORS
const cors = require("cors");
const corsOptions = {
    origin: Keys.CORS_URL,
    credentials: true,
    //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

// BodyParser middleware
const bodyParser = require("express");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Connect to MongoDB
// mongoose.set('strictQuery', true);
// mongoose.connect(
//     Keys.MONGO_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// )
//     .then(() => console.log("MongoDB successfully connected"))
//     .catch(err => console.log(err));

app.get('/', (req, res) => {
    let year = new Date().getFullYear();
    res.send(`Boilerplate Codebase - ©${year} SATHNINDU KOTTAGE`);
})

// Rotes
app.use("/api", API);

// App Listen
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})
