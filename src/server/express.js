const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const luhn = require("luhn");
const content = require('../content.json');

const app = express();
const publicDirectoryPath = path.join(__dirname, 'public');

app.use(express.static(publicDirectoryPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.set('PORT', process.argv.PORT || '3001');

app.listen(app.get('PORT'), () => {
    console.log('Port is started at', app.get("PORT"))
})

app.post('/add', (req, res) => {
    const ccNumber = req.body && req.body.userCCData.userCCNumber;
    req.body.userCCData.balance = '£0';
    if (luhn.validate(ccNumber)) {
        loading((error, response) => {
            if (error) throw error;
            response.users.push(req.body.userCCData);
            saving(response)
        });
        res.status(200).send();
    }
    else {
        res.status(500).send({ creditCardError: 'Please Enter the Correct Credit Card Number' })
    }
})

app.get('/getAll', (req, res) => {
    res.status(200).send(content)
})

const loading = (callback) => {
    fs.readFile(path.join(__dirname, '../') + 'content.json', (error, response) => {
        if (error) {
            throw error
        }
        const dataBuffer = response.toString();
        const parsedData = JSON.parse(dataBuffer);
        callback(error, parsedData);
    })
}

const saving = (editedContent) => {
    fs.writeFile('content.json', JSON.stringify(editedContent), (error) => {
        console.log('Content Saved')
    })
}
