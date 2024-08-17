const express = require( 'express' );
const app = express();

let { people } = require( './data' );

// req => middleware => res
//app.use( [ logger, authorize ] ); // passing a middleware
app.use( express.static( './public' ) );

// parse from data
app.use( express.urlencoded({ extended: false }) );
// parse json
app.use( express.json() );

app.post( '/api/people', ( req, res ) => {
        const { name } = req.body;
        if( !name )
                return res.status(400).json({ success: false, msg: 'please provide a name value' });

        res.status(201).json({ success: true, person: name });
});
app.post( '/api/postman/people', ( req, res ) => {
	const { name } = req.body;
        if( !name )
                return res.status(400).json({ success: false, msg: 'please provide a name value' });

        res.status(201).json({ success: true, data: [...people, name] });

});

app.put( '/api/people/:id', ( req, res ) => {
	const { id } = req.params;
	const { name } = req.body;
	const person = people.find(( person ) => person.id === Number( id ));
	if( !person )
		return res.status(404).json({ success: false, msg: `no peron with id: ${id}` });
	const newPeople = people.map(( person ) => {
		if( person.id === Number( id )) person.name = name;
		return person
	});
	res.status(200).json( {success: true, data: newPeople} );
});



app.get( '/api/people', ( req, res ) => {
        res.status(200).json({ success: true, data: people });
});

app.listen( 5000, () => {
        console.log( 'Server is listening on port 5000...' );
});

