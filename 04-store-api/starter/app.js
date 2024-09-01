require( 'dotenv' ).config();
// async errors
require('express-async-errors')

const express = require( 'express' );
const app = express();

const connectDB = require('./db/connect');
const productRouter = require('./routes/products')

const notFoundMiddleware = require( './middleware/not-found' );
const errorMiddleware = require( './middleware/error-handler' );

// middleware 
app.use(express.json());

// routes
app.get('/',( req, res ) => {
    res.send('<h1> Store API </h1><a href="/api/v1/products">products route</a>');
})

app.use('/api/v1/products', productRouter)

//products routes
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;
const mongo_url = 'mongodb+srv://riosakao334:zsjyIWF7ZkueBcz3@nodeexptessproject.ehofa.mongodb.net/04-STORE-API?retryWrites=true&w=majority&appName=NodeExptessProject'

const start = async() => {
    try {
        // connect DB
        await connectDB(mongo_url)
        app.listen(port, console.log(`Server is listening port ${port}...`));
    } catch( error ) {
        console.log(error);
    }
}

start()