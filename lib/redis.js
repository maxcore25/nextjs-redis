import { Client, Entity, Schema, Repository } from 'redis-om';

const client = new Client();

async function connection() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Car extends Entity {}
