const express = require('express');
const app = express();
const movieRouter = require('./routes/movies');
const notFound = require('./middlewares/notFound');
const serverError = require('./middlewares/serverError');
const PORT = process.env.PORT || 3000;

//register the static middleware
app.use(express.static('public'))

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);

})

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the movie review API SERVER'
    })
})


//register the movies router
app.use('/api/movies', movieRouter)



//handle server errors with a middleware
app.use(serverError);

//handle 404 errors with a middleware
app.use(notFound);