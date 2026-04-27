const connection = require('../database/connection');

//Index
const index = (req, res) => {

    // prepare the sql query
    const sql = 'SELECT * FROM movies';


    // execute the sql query
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error executing the query:', err);
            res.status(500).json({
                error: 'Internal Server Error'
            });
            return;
        }

        res.json(results);
    })

    
    
}


//Show
const show = (req, res) => {

    //preprare the sql query

    const sql = 'SELECT * FROM movies WHERE id = ?';
    const movieId = Number(req.params.id);

    //execute the sql query
    connection.query(sql, [movieId], (err, results) => {
        if (err) {
            console.error('Error executing the query:', err);
            res.status(500).json({
                error: 'Internal Server Error'
            });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({
                error: 'Movie not found'
            });
            return;
        }

        res.json(results[0]);
    });
    
}

module.exports = {
    index,
    show
}