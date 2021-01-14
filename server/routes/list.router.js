const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


//GET route to get all the items from the database
router.get('/', (req,res)=> {

    //order by item
    const queryText = `SELECT * FROM "shopping"
                        ORDER BY "item";`
    
    pool.query(queryText)
    .then(result => {
        console.log(`Got shopping items back from the database:`, result);
        // just send it! result.rows
        res.send(result.rows);
    })
    .catch(error => {
        console.log(`Error in GET route server-side trying to make query ${queryText} `, error);
        res.sendStatus(500);
    })
})

module.exports = router;