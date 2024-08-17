const logger = require( './logger' );
const authorize = require( './authorize' );
const express = require( 'express' );
const app = express();

// req => middleware => res
app.use( "/api", [ logger, authorize ] ); // passing a middleware
// only applies to a route that start with api/
// array method will execute functions in order

app.get( '/', ( req, res ) => {
	res.send( 'Home' );
});
app.get( '/about', ( req, res ) => {
	res.send( 'About' );
});
app.get( '/api/products', ( req, res ) => {
        res.send( 'Products' );
});
app.get( '/api/items', ( req, res ) => {
        res.send( 'Items' );
});
app.listen( 5000, () => {
	console.log( 'Server is listening on port 5000...' );
});
