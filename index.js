const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3030;

app.get('/*', function(req, res) {
    res.render('index');
    //THIS IS GIVING AN ERROR BECAUSE IT HAS NO ENGINE SET > NEED TO FIX THIS
})

app.listen(port, function() {
    console.log("Listening on " + port);
});