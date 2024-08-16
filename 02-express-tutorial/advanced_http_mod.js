const http = require( 'http' );
const { readFileSync } = require( 'fs' );

// get all files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyle = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer( (req, res) => {
	console.log(`user hit the server`);
	console.log(`user is trying to access ${req.url} page`);
	
	const url = req.url;
	// home page
	if( url === '/') 
	{
		res.writeHead( 200, {'content-type':'text/html'});
		//res.write('<h1>Home Page</h1>');
		res.write(homePage);
		res.end('Do not forget to add res.end()');
	}
	// style
	else if( url === '/styles.css' )
	{
		res.writeHead( 200, {'content-type':'text/css'});
                res.write(homeStyle);
		res.end();
	}
	// logo
	else if( url === '/logo.svg' )
        {
                res.writeHead( 200, {'content-type':'image/svg+xml'});
                res.write(homeImage);
		res.end();
        }
	else if( url === '/browser-app.js' )
        {
                res.writeHead( 200, {'content-type':'text/javascript'});
                res.write(homeLogic);
		res.end();
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


