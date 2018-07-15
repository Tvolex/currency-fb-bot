const BotKit = require('botkit');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, () => console.log('Server is stated up'));
