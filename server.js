import express from 'express';

const app = express();
app.use(express.json());

const users = [];

app.post('/usuarios', async (req, res) => {
  users.push(req.body);

  res.send('PeGoU! POST');
});

app.get('/usuarios', async (req, res) => {
  res.json(users);
});

app.listen(3000);
