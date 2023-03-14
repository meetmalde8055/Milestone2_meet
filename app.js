 //require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')


//create app 
const app = express();

//configure app
const port = 3005;
const host = 'localhost';
app.set('view engine', 'ejs');

//mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use(methodOverride('_method'))


const tradeRoutes = require('./routes/trade_route/tradeRoutes');
const mainRoutes = require('./routes/main_route/main_routes');


// set up routes
app.get('/', (req, res) => {   
    res.render('index');
});

app.use('/trades', tradeRoutes);
app.use('/', mainRoutes);

app.use((req, res, next) => {
    let err = new Error('The server cannot locate ' + req.url)
    err.status = 404
    next(err)
})

app.use((err, req, res, next) => {
    if(!err.status) {
        err.status = 500;
        err.message = ("Internal Server Error")
    }
    res.status(err.status)
    res.render('error', {error: err})
})


// start the server
app.listen(port, host, () =>{
    console.log('The server is running on port', port)
})
