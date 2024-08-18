const {
	getPeople,
        createPerson,
        updatePerson,
        deletePerson
} = require( '../controllers/people' );
const express = require( 'express' );
const router = express.Router();

/*
router.post( '/', createPerson );

router.put( '/:id', updatePerson );

router.delete( '/:id', deletePerson );

router.get( '/', getPeople );
*/

router.route( '/' ).get( getPeople ).post( createPerson );
router.route( '/:id' ).put( updatePerson ).delete( deletePerson );


module.exports = router;
