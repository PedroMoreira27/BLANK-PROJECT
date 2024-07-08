import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors()); //mudar para url do frontend para segurança

app.post('/usuarios', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.put('/usuarios/:id', async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        age: req.body.age,
        email: req.body.emai,
        password: req.body.password,
        username: req.body.username
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

app.get('/usuarios', async (req, res) => {
  let users = [];

  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        age: req.query.age,
        username: req.query.username,
        password: req.query.password
      },
    });
  } else {
    users = await prisma.user.findMany({});
  }
});

app.delete('/usuarios/:id', async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.post('/anime', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        username: req.query.username,
        password: req.query.password
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.put('/anime/:id', async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        age: req.body.age,
        email: req.body.emai,
        username: req.query.username,
        password: req.query.password
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.get('/anime', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

app.get('/anime', async (req, res) => {
  let users = [];

  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        age: req.query.age,
      },
    });
  } else {
    users = await prisma.user.findMany({});
  }
});

app.delete('/anime/:id', async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.post('/filme', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.put('/filme/:id', async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        age: req.body.age,
        email: req.body.emai,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.get('/filme', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

app.get('/filme', async (req, res) => {
  let users = [];

  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        age: req.query.age,
      },
    });
  } else {
    users = await prisma.user.findMany({});
  }
});

app.delete('/filme/:id', async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.post('/manga', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.put('/manga/:id', async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: req.body.name,
        age: req.body.age,
        email: req.body.emai,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.get('/manga', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

app.get('/manga', async (req, res) => {
  let users = [];

  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        age: req.query.age,
      },
    });
  } else {
    users = await prisma.user.findMany({});
  }
});

app.delete('/manga/:id', async (req, res) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
