const express = require( 'express' );
const app = express();

let { people } = require( './data' );

// 1. use vs route
// 2. options - our own / express / third party

// req => middleware => res
//app.use( [ logger, authorize ] ); // passing a middleware
app.use( express.static( './public' ) );

// parse from data
app.use( express.urlencoded({ extended: false }) );
// parse json
app.use( express.json() );


app.post( './login', ( req, res ) => {
	// console.log( req.body );
	const { name } = req.body;
	if ( name ) 
		return res.status(200).send( `Welcome ${name}` );
	
	res.status(401).send( 'Please Provide Credentials' );
});
app.post( '/api/people', ( req, res ) => {
	const { name } = req.body;
	if( !name )
		return res.status(400).json({ success: false, msg: 'please provide a name value' });
	
	res.status(201).json({ success: true, person: name });
});



app.get( '/api/people', ( req, res ) => {
	res.status(200).json({ success: true, data: people });
});
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

