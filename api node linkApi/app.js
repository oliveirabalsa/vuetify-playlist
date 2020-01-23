const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/data', function (req, res) {
    var data = [
        { ramTransactions: '99,964' },
        { actJobs: 12 },
        { actTenants: 1 },
        { Sucess: '99,91' },
        { Error: '00,09' }
    ];


    res.send(JSON.stringify(data));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");

});
app.listen(3000, function () {
    console.log('Servidor rodando na porta 3000.');
});