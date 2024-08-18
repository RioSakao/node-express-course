const people = require( './routes/people' );
const auth = require( './routes/auth' );
const express = require( 'express' );
const app = express();

// req => middleware => res
//app.use( [ logger, authorize ] ); // passing a middleware
app.use( express.static( './public' ) );

// parse from data
app.use( express.urlencoded({ extended: false }) );
// parse json
app.use( express.json() );

app.use( '/api/people', people );
app.use( '/login', auth );

app.listen( 5000, () => {
        console.log( 'Server is listening on port 5000...' );
});

