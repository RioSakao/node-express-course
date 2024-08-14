const http = require( 'http' );
const server = http.createServer( (req, res) => {
	console.log(`user hit the server`);
	console.log(`user is trying to access ${req.url} page`);
	
	const url = req.url;
	// home page
	if( url === '/') 
	{
		res.writeHead( 200, {'content-type':'text/html'});
		res.write('<h1>Home Page</h1>');
		res.end('Do not forget to add res.end()');
	} 
	// about page
	else if( url === '/about' ) 
	{
		res.writeHead( 200, {'content-type':'text/html'});
                res.write('<h1>About Page</h1>');
                res.end('Do not forget to add res.end()');
	}
	// 404 NOT FOUND
	else
	{
		res.writeHead( 404, {'content-type':'text/html'});
                res.write('<h1>page not found</h1>');
                res.end();
	}
});
server.listen( '5000' );


