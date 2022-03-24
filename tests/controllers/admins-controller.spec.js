import request from 'supertest';
import app from '../../app.js';

import prisma from '../../prisma/client.js';

beforeEach(async () => {
  await prisma.admin.deleteMany({});
});

describe('POST /admins', () => {
  it('should save create a new admin', async () => {
    const data = { name: 'Diego Marczal', email: 'marczal@utfpr.edu.br', password: '123456' }
    const resp = await request(app).post('/admins').send(data);

    expect(resp.status).toBe(200);
    expect(resp.body.id).toBeDefined();
    expect(resp.body.name).toEqual(data['name']);
    expect(resp.body.email).toEqual(data['email']);
  });
});

describe('GET /admins', () => {
  it('responds with json', async () => {
    const data = [
      { name: 'Diego-1', email: 'admin-1@admin.com', password: '123456' },
      { name: 'Diego-2', email: 'admin-2@admin.com', password: '123456' }
    ];

    prisma.admin.createMany({ data: data });

    const resp = await request(app).get('/admins');
    expect(resp.status).toBe(200);

    for (var el in data) {
      expect(resp.body.name).toEqual(el['name']);
      expect(resp.body.email).toEqual(el['email']);
    }
  });
});
