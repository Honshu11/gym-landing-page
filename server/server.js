
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/api/register', (req, res) => {
  console.log(req.body);
  res.status(200);
  res.send('form submitted');
})

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


