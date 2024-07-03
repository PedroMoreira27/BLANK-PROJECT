import express from 'express';
import { PrismaClient } from '@prisma/client/extension';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

const users = [];

app.post('/usuarios', async (req, res) => {
  prisma.user.create({
    data: {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email
    },
  });
});

app.get('/usuarios', async (req, res) => {
  res.json(users);
});

app.listen(3000);
