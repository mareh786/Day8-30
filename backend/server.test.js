const request = require('supertest');
const express = require('express');
const bodyParser = require('express').json;
const { addOrCheckMember } = require('./db');

const app = express();
app.use(bodyParser());

app.post('/api/check', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Name is required' });

  addOrCheckMember(name.trim(), (err, message) => {
    if (err) return res.status(500).json({ message: 'Server error' });
    res.json({ message });
  });
});

describe('POST /api/check', () => {
  it('should return welcome message for a new user', async () => {
    const res = await request(app).post('/api/check').send({ name: 'JohnTest123' });
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toMatch(/welcome|existing/i);
  });

  it('should return error for missing name', async () => {
    const res = await request(app).post('/api/check').send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toBe('Name is required');
  });
});
