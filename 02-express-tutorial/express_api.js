const { products } = require( './data' );
const express = require( 'express' );
const app = express();

app.get( '/', ( req, res ) => {
	res.send( '<h1>Home Page</h1><a href="/api/products">products</a>' );
	/*
	res.json(products);
	res.json([
		{ name: 'John'},
		{ name: 'Susan'}
	]);
	*/
});


// productID : a placeholder
app.get( '/api/products/:productID', ( req, res ) => {
	/*
	const newProducts = products.map(( product ) => {
		const { id, name, image } = product;
		return { id, name, image };
	});*/
	// console.log( req );
	// console.log( req.params )
	const { productID } = req.params;
	const singleProduct = products.find(( product ) => product.id === Number( productID ) );
	if( !singleProduct ) 
		return res.status(404).send( 'Product Does Not Exist' );
	return res.json( singleProduct );
});

app.get( '/api/v1/query', ( req, res ) => {
	//console.log( req.query );
	const { search, limit } = req.query;
	let sortedProducts = [ ...products ];
	if( search )
	{
		sortedProducts = sortedProducts.filter(( product ) => {
			return product.name.startWith( search );
		});
	}
	if( limit ) 
		sortedProducts = sortedProducts.slice( 0, Number( limit ) );
	if( sortedProducts.length < 1 )
		return res.status(200).json({ success: true, data: [] });
	
	return res.status(200).json( sortedProducts );
	//res.send( 'hello world' );
});

app.listen( 5000, () => {
	console.log( 'Server is listening on port 5000...' );
});
