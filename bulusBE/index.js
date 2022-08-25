//const app = require('express')();
const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.json())

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
) 

app.get('/tshirt', (req, res)=> {
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
} ); 

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo) {
        res.status(418).send({ message: 'We need a Bulus! '})
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });

});


app.post('/audi', (req, res) => {
    //const { id } = req.params;
    const { enjin } = req.body;
    let id = 'Molla V8';

    res.send({
        tshirt: `🏎️ with your ${enjin} and Audi of ${id}`,
    });

});