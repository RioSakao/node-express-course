require( 'dotenv' ).config();
const connectDB = require( './db/connect' );
const express = require( 'express' );
const app = express();
const port = process.env.PORT || 3000;
const tasks = require( './routes/tasks' );
const notFound = require( './middleware/not-found' );
const errorHandlerMiddleware = require( './middleware/error-handler' );
const mongo_url = '';

app.use( express.static( './public' ) );
app.use( express.json() );

app.use( '/api/v1/tasks', tasks );
app.use( notFound );
app.use( errorHandlerMiddleware );
const start = async() => {
	try {
		//console.log(process.env.MONGO_URL);
		await connectDB( process.env.MONGO_URL );
		//await connectDB ( mongo_url );
		app.listen( port, console.log( `server is listenig on port ${port}...` ));
	} catch( error ) {
		console.log( error );
	}
};

start();

