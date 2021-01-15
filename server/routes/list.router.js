const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

// GET ROUTE

// POST ROUTE
router.post('/', (req, res) => {
    const list = req.body;
    const queryText = `INSERT INTO "shopping" ("item", "quantity", "unit")
    VALUES ($1, $2, $3);`

    pool.query(queryText, [list.item, list.quantity, list.unit])
        .then((result) => {
            console.log(`Added New Item to the Shopping List: `, list);
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error making database query ${queryText}`, error);
            res.sendStatus(500);
        })
}); //end POST ROUTE


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
})//end GET Route

//Delete route
router.delete('/:id', (req,res) => {
    let item = req.params.id;
    console.log('Delete route called for item: ', item);

    const queryText = `DELETE FROM "shopping"
                        WHERE "id" = $1;`;

    pool.query(queryText, [item]).then((results) => {
        res.sendStatus(204);
    })
})// end Delete route



module.exports = router;